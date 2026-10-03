---
aliases: [Rust Package Manager, crates.io]
tags:
  - rust
  - tooling
  - beginner
---
# Cargo and Packages

`cargo` is the Rust package manager and build system. It handles project building, downloading dependencies, and compiling them.

## Basic Commands
- `cargo new my_project`: Creates a new project directory with a `Cargo.toml` file and an `src/main.rs`.
- `cargo build`: Compiles the project. The executable is placed in `target/debug/`.
- `cargo run`: Compiles and executes the project in one step.
- `cargo check`: Verifies the code compiles without producing an executable (much faster than `build`).
- `cargo release`: Compiles the project with optimizations for deployment (`target/release/`).

## Cargo.toml
This file is the manifest for your project. It contains metadata and dependencies.
```toml
[package]
name = "my_project"
version = "0.1.0"
edition = "2021"

[dependencies]
rand = "0.8.5"
```

## Crates
A crate is a compilation unit in Rust.
- **Binary Crates**: Programs compiled to be executed. Must contain a `main` function.
- **Library Crates**: Code compiled to be shared. Does not have a `main` function.

You can find thousands of community library crates on [crates.io](https://crates.io).
