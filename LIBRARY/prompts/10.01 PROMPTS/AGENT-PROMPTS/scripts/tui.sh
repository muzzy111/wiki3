#!/usr/bin/env bash
#
# tui.sh — interactive TUI wizard for install.sh
#
# Sourced by scripts/install.sh after lib.sh.  Provides the interactive
#   Tools → Teams → Review → Install wizard (run when --interactive or a
#   bare TTY invocation).
#
# Depends on lib.sh for terminal/TUI primitives (init_ansi, tui_begin,
# read_key, draw_frame, etc.) and on install.sh for tool constants and
# detection functions (ALL_TOOLS, ALL_DIVISIONS, is_detected, etc.).
#
# This file is a sister of install.sh, not of lib.sh — it knows about
# tools, divisions, and the installer model.

# ---------------------------------------------------------------------------
# Box drawing — pure ASCII, fixed 52-char wide
#   box_top / box_mid / box_bot  — structural lines
#   box_row <text>               — content row, right-padded to fit
# ---------------------------------------------------------------------------
BOX_INNER=48   # chars between the two | walls

box_top() { printf "  +"; printf '%0.s-' $(seq 1 $BOX_INNER); printf "+\n"; }
box_bot() { box_top; }
box_sep() { printf "  |"; printf '%0.s-' $(seq 1 $BOX_INNER); printf "|\n"; }

# ponytail: box_row uses lib.sh's strip_ansi (sed) — install.sh's old awk copy was dead code
box_row() {
  local raw="$1" visible
  visible="$(strip_ansi "$raw")"
  local pad=$(( BOX_INNER - 2 - ${#visible} ))
  (( pad < 0 )) && pad=0
  printf "  | %s%*s |\n" "$raw" "$pad" ''
}
box_blank() { printf "  |%*s|\n" $BOX_INNER ''; }

# ponytail: TUI state extracted from install.sh — these globals are consumed
# by interactive_wizard() and drive the SELECTED_TOOLS / FILTER_DIVISIONS
# that main() uses after the wizard completes.
TOOL_SEL=()      # 1/0 per ALL_TOOLS
TEAM_SEL=()      # 1/0 per ALL_DIVISIONS

# ---------------------------------------------------------------------------
# Interactive selector
# ---------------------------------------------------------------------------

# division_emoji <div> — a glyph for the team list (unicode only).
division_emoji() {
  if ! supports_unicode; then printf '*'; return; fi
  case "$1" in
    academic) printf '📚';; design) printf '🎨';; engineering) printf '💻';;
    finance) printf '💵';; game-development) printf '🎮';; marketing) printf '📢';;
    paid-media) printf '💰';; product) printf '📊';; project-management) printf '🎬';;
    sales) printf '💼';; security) printf '🔒';; spatial-computing) printf '🥽';;
    specialized) printf '🎯';; support) printf '🛟';; testing) printf '🧪';; *) printf '•';;
  esac
}

# Generic multi-select. Inputs (globals): OPT_LABEL[], OPT_SEL[];
# SEL_TITLE, SEL_HINT, SEL_SUMMARY_FN, SEL_NAV, SEL_WARN_FN.
# Mutates OPT_SEL[]; sets SEL_RESULT = next|back|quit.
selector() {
  local n=${#OPT_LABEL[@]} cur=0 top=0 query="" searching=false key i idx vn rows W
  rows=$(( $(term_rows) - 9 )); (( rows < 3 )) && rows=3
  while true; do
    local view=() qlc
    qlc="$(printf '%s' "$query" | tr '[:upper:]' '[:lower:]')"
    for (( i=0; i<n; i++ )); do
      if [[ -z "$query" || "$(printf '%s' "${OPT_LABEL[$i]}" | tr '[:upper:]' '[:lower:]')" == *"$qlc"* ]]; then
        view+=("$i")
      fi
    done
    vn=${#view[@]}
    (( cur>=vn )) && cur=$(( vn>0 ? vn-1 : 0 ))
    (( cur<top )) && top=$cur
    (( cur>=top+rows )) && top=$(( cur-rows+1 ))
    W=$(( $(term_cols) - 4 )); (( W>74 )) && W=74; (( W<40 )) && W=40
    local buf="" hlen=$(( W - ${#SEL_TITLE} - 5 )); (( hlen<1 )) && hlen=1
    buf+="  ${C_BOLD}${C_CYAN}${BX_TL}${BX_H}${BX_H} ${SEL_TITLE} $(repeat "$BX_H" "$hlen")${BX_TR}${C_RESET}"$'\n'
    buf+="  ${C_DIM}${SEL_HINT}${C_RESET}"$'\n\n'
    (( vn==0 )) && buf+="   ${C_DIM}(no matches)${C_RESET}"$'\n'
    for (( i=top; i<top+rows && i<vn; i++ )); do
      idx=${view[$i]}
      local mark cg label="${OPT_LABEL[$idx]}"
      [[ "${OPT_SEL[$idx]}" == 1 ]] && mark="${C_GREEN}${GLYPH_ON}${C_RESET}" || mark="${C_DIM}·${C_RESET}"
      if (( i==cur )); then cg="${C_CYAN}${GLYPH_CUR}${C_RESET}"; label="${C_BOLD}${label}${C_RESET}"; else cg=" "; fi
      buf+="   $cg [$mark] $label"$'\n'
    done
    local shown=$(( vn<rows ? vn : rows )); for (( i=shown; i<rows; i++ )); do buf+=$'\n'; done
    buf+=$'\n'"  ${C_BOLD}$("$SEL_SUMMARY_FN")${C_RESET}"$'\n'
    buf+="  ${C_DIM}${SEL_NAV}${C_RESET}"$'\n'
    local _w; _w="$("$SEL_WARN_FN")"; [[ -n "$_w" ]] && buf+="  ${C_YELLOW}${_w}${C_RESET}"$'\n'
    if $searching; then buf+="  ${C_CYAN}search:${C_RESET} ${query}_"$'\n'
    elif [[ -n "$query" ]]; then buf+="  ${C_CYAN}/${query}${C_RESET}  ${C_DIM}(esc clears)${C_RESET}"$'\n'; fi
    draw_frame "$buf"

    key="$(read_key)"
    if $searching; then
      case "$key" in
        ENTER) searching=false ;;
        ESC)   query=""; searching=false ;;
        BACKSPACE) query="${query%?}" ;;
        *) [[ ${#key} -eq 1 ]] && query="$query$key" ;;
      esac
      continue
    fi
    case "$key" in
      UP|k)        (( cur>0 ))    && cur=$(( cur-1 )) ;;
      DOWN|j)      (( cur<vn-1 )) && cur=$(( cur+1 )) ;;
      SPACE)       (( vn>0 )) && { idx=${view[$cur]}; OPT_SEL[$idx]=$(( 1 - ${OPT_SEL[$idx]} )); } ;;
      a|A)         for (( i=0; i<n; i++ )); do OPT_SEL[$i]=1; done ;;
      n|N)         for (( i=0; i<n; i++ )); do OPT_SEL[$i]=0; done ;;
      /)           searching=true ;;
      ENTER|RIGHT) SEL_RESULT=next; return ;;
      LEFT)        SEL_RESULT=back; return ;;
      ESC)         [[ -n "$query" ]] && query="" || { SEL_RESULT=back; return; } ;;
      q|Q)         SEL_RESULT=quit; return ;;
      EOF)         SEL_RESULT=quit; return ;;
    esac
  done
}

# --- Screen: Tools ---
_no_warn() { :; }
_tools_summary() {
  local i c=0; for (( i=0; i<${#OPT_SEL[@]}; i++ )); do [[ "${OPT_SEL[$i]}" == 1 ]] && c=$(( c+1 )); done
  printf '%s of %s tools selected' "$c" "${#OPT_SEL[@]}"
}
screen_tools() {
  OPT_LABEL=(); OPT_SEL=()
  local i det path label
  for (( i=0; i<${#ALL_TOOLS[@]}; i++ )); do
    local t="${ALL_TOOLS[$i]}"
    path="$(resolve_tool_path "$t" 2>/dev/null || true)"
    if is_detected "$t" 2>/dev/null; then det="${C_GREEN}${GLYPH_DET}${C_RESET}"; else det="${C_DIM}${GLYPH_OFF}${C_RESET}"; fi
    label="$(printf '%s %-13s %s' "$det" "$(tool_simple_name "$t")" "${C_DIM}${path:-not found}${C_RESET}")"
    OPT_LABEL+=("$label"); OPT_SEL+=("${TOOL_SEL[$i]:-0}")
  done
  SEL_TITLE="The Agency · Installer  —  1/3 · Tools"
  SEL_HINT="Pick where to install.  ${GLYPH_DET} = detected on this machine."
  SEL_SUMMARY_FN=_tools_summary
  SEL_NAV="space toggle · a all · n none · / search · enter next · q quit"
  SEL_WARN_FN=_no_warn
  selector
  for (( i=0; i<${#OPT_SEL[@]}; i++ )); do TOOL_SEL[$i]="${OPT_SEL[$i]}"; done
}

tool_simple_name() {
  case "$1" in
    claude-code) echo "Claude Code";; copilot) echo "Copilot";; antigravity) echo "Antigravity";;
    gemini-cli) echo "Gemini CLI";; opencode) echo "OpenCode";; openclaw) echo "OpenClaw";;
    cursor) echo "Cursor";; aider) echo "Aider";; windsurf) echo "Windsurf";;
    qwen) echo "Qwen Code";; kimi) echo "Kimi Code";; codex) echo "Codex";; *) echo "$1";;
  esac
}

# --- Screen: Teams ---
_teams_agents() {
  local i c=0 d
  for (( i=0; i<${#ALL_DIVISIONS[@]}; i++ )); do
    [[ "${OPT_SEL[$i]}" == 1 ]] && { d="${ALL_DIVISIONS[$i]}"; c=$(( c + ${TEAM_COUNTS[$i]} )); }
  done
  echo "$c"
}
_teams_summary() {
  local sel=0 i a; a="$(_teams_agents)"
  for (( i=0; i<${#OPT_SEL[@]}; i++ )); do [[ "${OPT_SEL[$i]}" == 1 ]] && sel=$(( sel+1 )); done
  printf '%s agents · %s of %s teams' "$a" "$sel" "${#OPT_SEL[@]}"
}
_teams_warn() {
  local a cap; a="$(_teams_agents)"; cap="$(tool_cap opencode)"
  if _opencode_selected && [[ "$a" -gt "$cap" ]]; then
    printf "⚠ OpenCode registers ~%s; ~%s of %s won't load (#27988)" "$cap" "$(( a - cap ))" "$a"
  fi
}
_opencode_selected() {
  local i; for (( i=0; i<${#TOOL_SEL[@]}; i++ )); do
    [[ "${ALL_TOOLS[$i]}" == "opencode" && "${TOOL_SEL[$i]}" == 1 ]] && return 0
  done; return 1
}
screen_teams() {
  OPT_LABEL=(); OPT_SEL=()
  local i
  for (( i=0; i<${#ALL_DIVISIONS[@]}; i++ )); do
    local d="${ALL_DIVISIONS[$i]}"
    OPT_LABEL+=("$(printf '%s %-20s %s' "$(division_emoji "$d")" "$d" "${C_DIM}${TEAM_COUNTS[$i]} agents${C_RESET}")")
    OPT_SEL+=("${TEAM_SEL[$i]:-1}")
  done
  SEL_TITLE="The Agency · Installer  —  2/3 · Teams"
  SEL_HINT="Pick which teams to install.  Fewer teams keeps OpenCode under its limit."
  SEL_SUMMARY_FN=_teams_summary
  SEL_NAV="space toggle · a all · n none · / search · enter next · ← back · q quit"
  SEL_WARN_FN=_teams_warn
  selector
  for (( i=0; i<${#OPT_SEL[@]}; i++ )); do TEAM_SEL[$i]="${OPT_SEL[$i]}"; done
}

# --- Screen: Review ---
REVIEW_RESULT=""
# grid_2col <cellwidth> <items...> — lay items out in two column-major columns
# (left column filled top-to-bottom first). Plain text cells (no ANSI) so the
# width padding stays correct.
grid_2col() {
  local w="$1"; shift
  local n=$# r rows left right out=""
  (( n==0 )) && { printf '     %snone%s\n' "$C_DIM" "$C_RESET"; return; }
  local items=("$@")
  rows=$(( (n + 1) / 2 ))
  for (( r=0; r<rows; r++ )); do
    left="${items[$r]}"
    right="${items[$(( r + rows ))]:-}"
    if [[ -n "$right" ]]; then out+="$(printf '     %-*s  %s' "$w" "$left" "$right")"$'\n'
    else out+="     $left"$'\n'; fi
  done
  printf '%s' "$out"
}

screen_review() {
  local tools=() teams=() i agents
  for (( i=0; i<${#TOOL_SEL[@]}; i++ )); do [[ "${TOOL_SEL[$i]}" == 1 ]] && tools+=("$(tool_simple_name "${ALL_TOOLS[$i]}")"); done
  for (( i=0; i<${#TEAM_SEL[@]}; i++ )); do [[ "${TEAM_SEL[$i]}" == 1 ]] && teams+=("${ALL_DIVISIONS[$i]}"); done
  agents=0; for (( i=0; i<${#TEAM_SEL[@]}; i++ )); do [[ "${TEAM_SEL[$i]}" == 1 ]] && agents=$(( agents + ${TEAM_COUNTS[$i]} )); done
  local cur=0   # 0=Install 1=mode toggle
  while true; do
    local buf="" m
    buf+="  ${C_BOLD}${C_CYAN}${BX_TL}${BX_H}${BX_H} The Agency · Installer  —  3/3 · Review $(repeat "$BX_H" 28)${BX_TR}${C_RESET}"$'\n'
    buf+="  ${C_DIM}Confirm your selection, then install.${C_RESET}"$'\n\n'
    buf+="   ${C_BOLD}Tools${C_RESET} ${C_DIM}(${#tools[@]})${C_RESET}"$'\n'
    buf+="$(grid_2col 16 ${tools[@]+"${tools[@]}"})"$'\n'
    buf+="   ${C_BOLD}Teams${C_RESET} ${C_DIM}(${#teams[@]})${C_RESET}"$'\n'
    buf+="$(grid_2col 20 ${teams[@]+"${teams[@]}"})"$'\n\n'
    $USE_LINK && m="symlink" || m="copy"
    if (( cur==1 )); then buf+="   ${C_CYAN}${GLYPH_CUR}${C_RESET} Mode: ${C_BOLD}${m}${C_RESET}  ${C_DIM}(space toggles copy/symlink)${C_RESET}"$'\n'
    else buf+="     Mode: ${m}  ${C_DIM}(space toggles copy/symlink)${C_RESET}"$'\n'; fi
    buf+=$'\n'
    buf+="  ${C_BOLD}Installing ${agents} agents · ${#teams[@]} teams · ${#tools[@]} tools${C_RESET}"$'\n'
    if (( cur==0 )); then buf+="  ${C_CYAN}${GLYPH_CUR}${C_RESET} ${C_BOLD}${C_GREEN}Install${C_RESET}   ${C_DIM}↑/↓ move · enter install · ← back · q quit${C_RESET}"$'\n'
    else buf+="    ${C_GREEN}Install${C_RESET}   ${C_DIM}↑/↓ move · space toggle mode · ← back · q quit${C_RESET}"$'\n'; fi
    local cap; cap="$(tool_cap opencode)"
    if printf '%s\n' "${tools[@]}" | grep -qx "OpenCode" && [[ "$agents" -gt "$cap" ]]; then
      buf+="  ${C_YELLOW}⚠ OpenCode registers ~${cap}; ~$(( agents - cap )) of ${agents} won't load (#27988)${C_RESET}"$'\n'
    fi
    draw_frame "$buf"
    local key; key="$(read_key)"
    case "$key" in
      UP|DOWN|k|j|TAB) cur=$(( 1 - cur )) ;;
      SPACE) (( cur==1 )) && { $USE_LINK && USE_LINK=false || USE_LINK=true; } ;;
      ENTER) if (( cur==0 )); then REVIEW_RESULT=install; return; fi ;;
      LEFT)  REVIEW_RESULT=back; return ;;
      q|Q|EOF) REVIEW_RESULT=quit; return ;;
    esac
  done
}

# interactive_wizard — drive the three screens; commit to SELECTED_TOOLS /
# FILTER_DIVISIONS / USE_LINK. Returns 1 if no TTY (caller falls back).
interactive_wizard() {
  init_ansi
  TEAM_COUNTS=(); local i
  for (( i=0; i<${#ALL_DIVISIONS[@]}; i++ )); do TEAM_COUNTS+=("$(division_count "${ALL_DIVISIONS[$i]}")"); done
  # seed defaults: tools = detected, teams = all
  TOOL_SEL=(); for (( i=0; i<${#ALL_TOOLS[@]}; i++ )); do is_detected "${ALL_TOOLS[$i]}" 2>/dev/null && TOOL_SEL+=(1) || TOOL_SEL+=(0); done
  TEAM_SEL=(); for (( i=0; i<${#ALL_DIVISIONS[@]}; i++ )); do TEAM_SEL+=(1); done

  tui_begin || return 1
  local screen=tools
  while true; do
    case "$screen" in
      tools)  screen_tools;  case "$SEL_RESULT" in next) screen=teams;; quit) tui_end; exit 0;; esac ;;
      teams)  screen_teams;  case "$SEL_RESULT" in next) screen=review;; back) screen=tools;; quit) tui_end; exit 0;; esac ;;
      review) screen_review; case "$REVIEW_RESULT" in install) break;; back) screen=teams;; quit) tui_end; exit 0;; esac ;;
    esac
  done
  tui_end

  # commit
  SELECTED_TOOLS=()
  for (( i=0; i<${#TOOL_SEL[@]}; i++ )); do [[ "${TOOL_SEL[$i]}" == 1 ]] && SELECTED_TOOLS+=("${ALL_TOOLS[$i]}"); done
  FILTER_DIVISIONS=()
  local all=1
  for (( i=0; i<${#TEAM_SEL[@]}; i++ )); do [[ "${TEAM_SEL[$i]}" == 1 ]] || all=0; done
  if [[ "$all" == 0 ]]; then
    for (( i=0; i<${#TEAM_SEL[@]}; i++ )); do [[ "${TEAM_SEL[$i]}" == 1 ]] && FILTER_DIVISIONS+=("${ALL_DIVISIONS[$i]}"); done
  fi
  build_selection
  return 0
}
