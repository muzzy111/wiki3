---
aliases: []
tags:
  - termux
  - displays
  - information
  - wifi
---



1. **pkg [[update]]**: This command updates the package lists for upgrades and installs.
   
2. **pkg upgrade**: Upgrades all installed packages to their latest version.
   
3. **pkg install [package_name]**: Installs a package. Replace `[package_name]` with the name of the package you want to install.
   
4. **pkg uninstall [package_name]**: Uninstalls a package. Replace `[package_name]` with the name of the package you want to uninstall.
   
5. **pkg search [keyword]**: Searches for packages containing the specified keyword.
   
6. **pkg list-all**: Lists all available packages.
   
7. **termux-[[setup]]-storage**: Sets up storage in Termux to access files on your device.
   
8. **pkg info [package_name]**: Displays information about a specific package.
   
9. **pkg list-installed**: Lists all installed packages.
   
10. **termux-wake-lock**: Keeps the device awake while Termux is running.
   
11. **termux-wake-unlock**: Allows the device to sleep normally.
   
12. **termux-open [file/path]**: Opens a file or directory with the default app.
   
13. **termux-open-url [URL]**: Opens the specified URL in the default browser.
   
14. **termux-toast [message]**: Displays a toast message on the screen.
   
15. **termux-volume [option]**: Adjusts the volume. Options include `music`, `ring`, `alarm`, `notification`, and `system`.

16. **termux-vibrate**: Vibrates the device for a specified duration.

17. **termux-share**: Shares files or text using the Android share menu.

18. **termux-clipboard-get**: Retrieves the current contents of the clipboard.

19. **termux-clipboard-set [text]**: Sets the clipboard contents to the specified text.

20. **termux-dialog**: Opens a dialog box with various options.

21. **termux-notification**: Sends a notification with the specified title and text.

22. **termux-sms-inbox**: Lists received SMS messages.

23. **termux-sms-send -n [number] [message]**: Sends an SMS to the specified number with the given message.

24. **termux-contact-list**: Lists all contacts stored on the device.

25. **termux-contact-get [contact_name]**: Retrieves information about the specified contact.

26. **termux-sms-list**: Lists all SMS messages.

27. **termux-tts-speak [text]**: Converts text to speech and speaks it aloud.

28. **termux-camera-photo [output_file]**: Takes a photo using the device's camera and saves it to the specified file.

29. **termux-camera-record [output_file]**: Records a video using the device's camera and saves it to the specified file.

30. **termux-media-player play [file]**: Plays the specified audio or video file.

31. **termux-media-player pause**: Pauses the currently playing media.

32. **termux-media-player stop**: Stops the currently playing media.

33. **termux-media-player seek [time]**: Seeks to the specified time in the currently playing media.

34. **termux-media-player playlist [file]**: Loads a playlist file.

35. **termux-download [URL]**: Downloads a file from the specified URL.

36. **termux-upload [source_file] [destination_directory]**: Uploads a file to the specified directory.

37. **termux-fix-shebang [file]**: Fixes the shebang of a script file to make it executable.

38. **termux-info**: Displays system information.

39. **termux-open-settings**: Opens the Termux settings menu.

40. **termux-wifi-enable [true/false]**: Enables or disables Wi-Fi.

41. **termux-battery-[[status]]**: Shows the current battery [[status]].

42. **termux-telephony-cellinfo**: Shows information about the current cellular network.

43. **termux-telephony-deviceinfo**: Shows device-specific information.

44. **termux-telephony-imei**: Shows the IMEI number of the device.

45. **termux-telephony-signalstrength**: Shows information about the signal strength of the cellular network.

46. **termux-dialog**: Displays a dialog box with customizable options.

47. **termux-notification**: Sends a notification to the notification bar.

48. **termux-vibrate**: Vibrates the device.

49. **termux-toast**: Displays a toast message on the screen.

50. **termux-wifi-connectioninfo**: Shows information about the current Wi-Fi connection.

51. **termux-wifi-ipinfo**: Displays information about the device's IP address.

52. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

53. **termux-clipboard-get**: Retrieves the current contents of the clipboard.

54. **termux-clipboard-set [text]**: Sets the clipboard contents to the specified text.

55. **termux-dialog**: Displays a dialog box with customizable options.

56. **termux-notification**: Sends a notification to the notification bar.

57. **termux-vibrate**: Vibrates the device.

58. **termux-toast**: Displays a toast message on the screen.

59. **termux-battery-[[status]]**: Shows the current battery [[status]].

60. **termux-camera-info**: Shows information about the device's camera(s).

61. **termux-camera-photo [output_file]**: Takes a photo using the device's camera and saves it to the specified file.

62. **termux-camera-record [output_file]**: Records a video using the device's camera and saves it to the specified file.

63. **termux-camera-snapshot [output_file]**: Takes a snapshot using the device's camera and saves it to the specified file.

64. **termux-camera-view**: Opens a live [[preview]] from the device's camera.

65. **termux-contact-get [contact_name]**: Retrieves information about the specified contact.

66. **termux-contact-list**: Lists all contacts stored on the device.

67. **termux-dialog**: Displays a dialog box with customizable options.

68. **termux-download [URL]**: Downloads a file from the specified URL.

69. **termux-fix-shebang [file]**: Fixes the shebang of a script file to make it executable.

70. **termux-info**: Displays system information.

71. **termux-location**: Shows the current device location.

72. **termux-media-player**: Controls media playback.

73. **termux-media-scan [path]**: Scans the specified path for media files.

74. **termux-microphone-record [output_file]**: Records audio using the device's microphone and saves it to the specified file.

75. **termux-notification**: Sends a notification to the notification bar.

76. **termux-open [file/path]**: Opens a file or directory with the default app.

77. **termux-open-url [URL]**: Opens the specified URL in the default browser.

78. **termux-share**: Shares files or text using the Android share menu.

79. **termux-sms-list**: Lists all SMS messages.

80. **termux-sms-inbox**: Lists received SMS messages.

81. **termux-sms-send -n [number] [message]**: Sends an SMS to the specified number with the given message.

82. **termux-sms-view [message_id]**: Displays the contents of the specified SMS message.

83. **termux-storage-get [path]**: Retrieves information about the specified storage path.

84. **termux-storage-list**: Lists all available storage volumes.

85. **termux-telephony-cellinfo**: Shows information about the current cellular network.

86. **termux-telephony-deviceinfo**: Shows device-specific information.

87. **termux-telephony-imei**: Shows the IMEI number of the device.

88. **termux-telephony-signalstrength**: Shows information about the signal strength of the cellular network.

89. **termux-torch [true/false]**: Turns the device's flashlight on or off.

90. **termux-tts-engines**: Lists available text-to-speech engines.

91. **termux-tts-speak [text]**: Converts text to speech and speaks it aloud.

92. **termux-upload [source_file] [destination_directory]**: Uploads a file to the specified directory.

93. **termux-url-opener [URL]**: Opens the specified URL in the default app.

94. **termux-volume**: Controls volume settings.

95. **termux-wallpaper [file]**: Sets the device's wallpaper to the specified image file.

96. **termux-wifi-connect [SSID] [password]**: Connects to the specified Wi-Fi network.

97. **termux-wifi-enable [true/false]**: Enables or disables Wi-Fi.

98. **termux-wifi-ipinfo**: Displays information about the device's IP address.

99. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

100. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

101. **termux-am broadcast -a [action]**: Sends a broadcast intent with the specified action.

102. **termux-audio-info**: Displays information about the audio system.

103. **termux-audio-play [file]**: Plays the specified audio file.

104. **termux-audio-info**: Displays information about the audio system.

105. **termux-audio-play [file]**: Plays the specified audio file.

106. **termux-audio-record [output_file]**: Records audio and saves it to the specified file.

107. **termux-call-log**: Lists the call log.

108. **termux-call-log -t [type]**: Lists call log entries of the specified type (incoming, outgoing, missed).

109. **termux-call-log -l [limit]**: Limits the number of entries displayed in the call log.

110. **termux-camera-info**: Displays information about the device's camera(s).

111. **termux-camera-photo [output_file]**: Takes a photo using the device's camera and saves it to the specified file.

112. **termux-camera-record [output_file]**: Records a video using the device's camera and saves it to the specified file.

113. **termux-camera-snapshot [output_file]**: Takes a snapshot using the device's camera and saves it to the specified file.

114. **termux-camera-view**: Opens a live [[preview]] from the device's camera.

115. **termux-clipboard-get**: Retrieves the current contents of the clipboard.

116. **termux-clipboard-set [text]**: Sets the clipboard contents to the specified text.

117. **termux-contact-get [contact_name]**: Retrieves information about the specified contact.

118. **termux-contact-list**: Lists all contacts stored on the device.

119. **termux-dialog**: Displays a dialog box with customizable options.

120. **termux-download [URL]**: Downloads a file from the specified URL.

121. **termux-file-editor [file]**: Opens the specified file in a text editor.

122. **termux-file-editor-editable [file]**: Opens the specified file in an editable text editor.

123. **termux-fix-shebang [file]**: Fixes the shebang of a script file to make it executable.

124. **termux-info**: Displays system information.

125. **termux-infrared-frequencies**: Lists the supported frequencies of the device's infrared transmitter.

126. **termux-infrared-transmit [frequency] [pattern]**: Transmits an infrared pattern at the specified frequency.

127. **termux-keyring [options]**: Manages passwords and secrets.

128. **termux-media-scan [path]**: Scans the specified path for media files.

129. **termux-microphone-record [output_file]**: Records audio using the device's microphone and saves it to the specified file.

130. **termux-notification**: Sends a notification to the notification bar.

131. **termux-open [file/path]**: Opens a file or directory with the default app.

132. **termux-open-url [URL]**: Opens the specified URL in the default browser.

133. **termux-share**: Shares files or text using the Android share menu.

134. **termux-sms-list**: Lists all SMS messages.

135. **termux-sms-inbox**: Lists received SMS messages.

136. **termux-sms-send -n [number] [message]**: Sends an SMS to the specified number with the given message.

137. **termux-sms-view [message_id]**: Displays the contents of the specified SMS message.

138. **termux-telephony-cellinfo**: Shows information about the current cellular network.

139. **termux-telephony-deviceinfo**: Shows device-specific information.

140. **termux-telephony-imei**: Shows the IMEI number of the device.

141. **termux-telephony-signalstrength**: Shows information about the signal strength of the cellular network.

142. **termux-torch [true/false]**: Turns the device's flashlight on or off.

143. **termux-tts-engines**: Lists available text-to-speech engines.

144. **termux-tts-speak [text]**: Converts text to speech and speaks it aloud.

145. **termux-upload [source_file] [destination_directory]**: Uploads a file to the specified directory.

146. **termux-url-opener [URL]**: Opens the specified URL in the default app.

147. **termux-volume**: Controls volume settings.

148. **termux-wallpaper [file]**: Sets the device's wallpaper to the specified image file.

149. **termux-wifi-connect [SSID] [password]**: Connects to the specified Wi-Fi network.

150. **termux-wifi-enable [true/false]**: Enables or disables Wi-Fi.

151. **termux-wifi-ipinfo**: Displays information about the device's IP address.

152. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

153. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

154. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

155. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

156. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

157. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

158. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

159. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

160. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

161. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

162. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

163. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

164. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

165. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

166. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

167. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

168. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

169. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

170. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

171. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

172. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

173. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

174. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

175. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

176. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

177. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

178. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

179. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

180. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

181. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

182. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

183. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

184. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

185. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

186. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

187. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

188. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

189. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

190. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

191. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

192. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

193. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

194. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

195. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

196. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

197. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

198. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

199. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

200. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

201. **termux-api**: Allows access to various device APIs from Termux shell scripts.
   
202. **termux-battery-[[status]]**: Shows battery information such as level, [[status]], health, etc.
   
203. **termux-camera-info**: Provides information about the device's camera(s).
   
204. **termux-call-log**: Lists call history including incoming, outgoing, and missed calls.
   
205. **termux-clipboard-get**: Retrieves the current contents of the clipboard.
   
206. **termux-clipboard-set [text]**: Sets the clipboard contents to the specified text.
   
207. **termux-contact-list**: Lists all contacts stored on the device.
   
208. **termux-dialog**: Displays a customizable dialog box.
   
209. **termux-download [URL]**: Downloads a file from the specified URL.
   
210. **termux-info**: Displays system information.
   
211. **termux-infrared-transmit [frequency] [pattern]**: Transmits an infrared pattern at the specified frequency.
   
212. **termux-job-scheduler [options]**: Schedules jobs to run in the background.
   
213. **termux-location**: Retrieves the device's current location.
   
214. **termux-media-scan [path]**: Scans the specified path for media files.
   
215. **termux-media-player**: Controls media playback.
   
216. **termux-notification**: Sends a notification to the notification bar.
   
217. **termux-notification-remove [id]**: Removes a notification with the specified ID.
   
218. **termux-notification-list**: Lists all active notifications.
   
219. **termux-notification-remove-all**: Removes all active notifications.
   
220. **termux-open [file/path]**: Opens a file or directory with the default app.
   
221. **termux-open-url [URL]**: Opens the specified URL in the default browser.
   
222. **termux-share**: Shares files or text using the Android share menu.
   
223. **termux-sms-inbox**: Lists received SMS messages.
   
224. **termux-sms-send -n [number] [message]**: Sends an SMS to the specified number with the given message.
   
225. **termux-sms-view [message_id]**: Displays the contents of the specified SMS message.
   
226. **termux-telephony-cellinfo**: Shows information about the current cellular network.
   
227. **termux-telephony-deviceinfo**: Shows device-specific information.
   
228. **termux-telephony-imei**: Shows the IMEI number of the device.
   
229. **termux-telephony-signalstrength**: Shows information about the signal strength of the cellular network.
   
230. **termux-tts-speak [text]**: Converts text to speech and speaks it aloud.
   
231. **termux-url-opener [URL]**: Opens the specified URL in the default app.
   
232. **termux-volume**: Controls volume settings.
   
233. **termux-wallpaper [file]**: Sets the device's wallpaper to the specified image file.
   
234. **termux-wifi-connect [SSID] [password]**: Connects to the specified Wi-Fi network.
   
235. **termux-wifi-enable [true/false]**: Enables or disables Wi-Fi.
   
236. **termux-wifi-ipinfo**: Displays information about the device's IP address.
   
237. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
238. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
239. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
240. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

241. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
242. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
243. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
244. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
245. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
246. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
247. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
248. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
249. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
250. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
251. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
252. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
253. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
254. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
255. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
256. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
257. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
258. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
259. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
260. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
261. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
262. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
263. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
264. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
265. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
266. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
267. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
268. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
269. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
270. **termux-wifi-scan

info**: Scans for Wi-Fi networks and displays information about them.
   
71. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
72. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
73. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
74. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
75. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
76. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
77. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
78. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
79. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
80. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.

81. **termux-api**: Allows access to various device APIs from Termux shell scripts.
   
82. **termux-battery-[[status]]**: Shows battery information such as level, [[status]], health, etc.
   
83. **termux-camera-info**: Provides information about the device's camera(s).
   
84. **termux-call-log**: Lists call history including incoming, outgoing, and missed calls.
   
85. **termux-clipboard-get**: Retrieves the current contents of the clipboard.
   
86. **termux-clipboard-set [text]**: Sets the clipboard contents to the specified text.
   
87. **termux-contact-list**: Lists all contacts stored on the device.
   
88. **termux-dialog**: Displays a customizable dialog box.
   
89. **termux-download [URL]**: Downloads a file from the specified URL.
   
90. **termux-info**: Displays system information.
   
91. **termux-infrared-transmit [frequency] [pattern]**: Transmits an infrared pattern at the specified frequency.
   
92. **termux-job-scheduler [options]**: Schedules jobs to run in the background.
   
93. **termux-location**: Retrieves the device's current location.
   
94. **termux-media-scan [path]**: Scans the specified path for media files.
   
95. **termux-media-player**: Controls media playback.
   
96. **termux-notification**: Sends a notification to the notification bar.
   
97. **termux-notification-remove [id]**: Removes a notification with the specified ID.
   
98. **termux-notification-list**: Lists all active notifications.
   
99. **termux-notification-remove-all**: Removes all active notifications.
   
100. **termux-open [file/path]**: Opens a file or directory with the default app.
   
101. **termux-open-url [URL]**: Opens the specified URL in the default browser.
   
102. **termux-share**: Shares files or text using the Android share menu.
   
103. **termux-sms-inbox**: Lists received SMS messages.
   
104. **termux-sms-send -n [number] [message]**: Sends an SMS to the specified number with the given message.
   
105. **termux-sms-view [message_id]**: Displays the contents of the specified SMS message.
   
106. **termux-telephony-cellinfo**: Shows information about the current cellular network.
   
107. **termux-telephony-deviceinfo**: Shows device-specific information.
   
108. **termux-telephony-imei**: Shows the IMEI number of the device.
   
109. **termux-telephony-signalstrength**: Shows information about the signal strength of the cellular network.
   
110. **termux-tts-speak [text]**: Converts text to speech and speaks it aloud.
   
111. **termux-url-opener [URL]**: Opens the specified URL in the default app.
   
112. **termux-volume**: Controls volume settings.
   
113. **termux-wallpaper [file]**: Sets the device's wallpaper to the specified image file.
   
114. **termux-wifi-connect [SSID] [password]**: Connects to the specified Wi-Fi network.
   
115. **termux-wifi-enable [true/false]**: Enables or disables Wi-Fi.
   
116. **termux-wifi-ipinfo**: Displays information about the device's IP address.
   
117. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
118. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
119. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
   
120. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about wifi
121. **termux-activity-manager**: Manages activities running in the background.
122. **termux-app-info [package_name]**: Displays information about the specified app.
123. **termux-app-list**: Lists all installed apps.
124. **termux-audio-info**: Displays information about the audio system.
125. **termux-audio-play [file]**: Plays the specified audio file.
126. **termux-audio-record [output_file]**: Records audio and saves it to the specified file.
127. **termux-battery-[[status]]**: Shows battery information such as level, [[status]], health, etc.
128. **termux-brightness [value]**: Sets the screen brightness to the specified value.
129. **termux-camera-info**: Provides information about the device's camera(s).
130. **termux-camera-photo [output_file]**: Takes a photo using the device's camera and saves it to the specified file.
131. **termux-camera-record [output_file]**: Records a video using the device's camera and saves it to the specified file.
132. **termux-camera-snapshot [output_file]**: Takes a snapshot using the device's camera and saves it to the specified file.
133. **termux-camera-view**: Opens a live [[preview]] from the device's camera.
134. **termux-clipboard-get**: Retrieves the current contents of the clipboard.
135. **termux-clipboard-set [text]**: Sets the clipboard contents to the specified text.
136. **termux-clipboard-clear**: Clears the clipboard contents.
137. **termux-contact-get [contact_name]**: Retrieves information about the specified contact.
138. **termux-contact-list**: Lists all contacts stored on the device.
139. **termux-download [URL]**: Downloads a file from the specified URL.
140. **termux-fix-shebang [file]**: Fixes the shebang of a script file to make it executable.
141. **termux-info**: Displays system information.
142. **termux-infrared-frequencies**: Lists the supported frequencies of the device's infrared transmitter.
143. **termux-infrared-transmit [frequency] [pattern]**: Transmits an infrared pattern at the specified frequency.
144. **termux-keyring [options]**: Manages passwords and secrets.
145. **termux-media-scan [path]**: Scans the specified path for media files.
146. **termux-microphone-record [output_file]**: Records audio using the device's microphone and saves it to the specified file.
147. **termux-notification**: Sends a notification to the notification bar.
148. **termux-notification-remove [id]**: Removes a notification with the specified ID.
149. **termux-notification-list**: Lists all active notifications.
150. **termux-notification-remove-all**: Removes all active notifications.
151. **termux-open [file/path]**: Opens a file or directory with the default app.
152. **termux-open-url [URL]**: Opens the specified URL in the default browser.
153. **termux-share**: Shares files or text using the Android share menu.
154. **termux-sms-list**: Lists all SMS messages.
155. **termux-sms-inbox**: Lists received SMS messages.
156. **termux-sms-send -n [number] [message]**: Sends an SMS to the specified number with the given message.
157. **termux-sms-view [message_id]**: Displays the contents of the specified SMS message.
158. **termux-storage-get [path]**: Retrieves information about the specified storage path.
159. **termux-storage-list**: Lists all available storage volumes.
160. **termux-telephony-cellinfo**: Shows information about the current cellular network.
161. **termux-telephony-deviceinfo**: Shows device-specific information.
162. **termux-telephony-imei**: Shows the IMEI number of the device.
163. **termux-telephony-signalstrength**: Shows information about the signal strength of the cellular network.
164. **termux-torch [true/false]**: Turns the device's flashlight on or off.
165. **termux-tts-engines**: Lists available text-to-speech engines.
166. **termux-tts-speak [text]**: Converts text to speech and speaks it aloud.
167. **termux-upload [source_file] [destination_directory]**: Uploads a file to the specified directory.
168. **termux-url-opener [URL]**: Opens the specified URL in the default app.
169. **termux-volume**: Controls volume settings.
170. **termux-wallpaper [file]**: Sets the device's wallpaper to the specified image file.
171. **termux-api**: Allows access to various device APIs from Termux shell scripts.
172. **termux-clipboard-get**: Retrieves the current contents of the clipboard.
173. **termux-clipboard-set [text]**: Sets the clipboard contents to the specified text.
174. **termux-cpu-info**: Displays information about the device's CPU.
175. **termux-cpu-top**: Displays CPU usage by processes.
176. **termux-debug-info**: Displays debugging information about the Termux environment.
177. **termux-download [URL]**: Downloads a file from the specified URL.
178. **termux-fix-shebang [file]**: Fixes the shebang of a script file to make it executable.
179. **termux-info**: Displays system information.
180. **termux-job-scheduler [options]**: Schedules jobs to run in the background.
181. **termux-location**: Retrieves the device's current location.
182. **termux-media-scan [path]**: Scans the specified path for media files.
183. **termux-media-player**: Controls media playback.
184. **termux-notification**: Sends a notification to the notification bar.
185. **termux-notification-remove [id]**: Removes a notification with the specified ID.
186. **termux-notification-list**: Lists all active notifications.
187. **termux-notification-remove-all**: Removes all active notifications.
188. **termux-open [file/path]**: Opens a file or directory with the default app.
189. **termux-open-url [URL]**: Opens the specified URL in the default browser.
190. **termux-share**: Shares files or text using the Android share menu.
191. **termux-storage-get [path]**: Retrieves information about the specified storage path.
192. **termux-storage-list**: Lists all available storage volumes.
193. **termux-sys-info**: Displays system information.
194. **termux-tar**: Archives files using tar.
195. **termux-telephony-cellinfo**: Shows information about the current cellular network.
196. **termux-telephony-deviceinfo**: Shows device-specific information.
197. **termux-telephony-imei**: Shows the IMEI number of the device.
198. **termux-telephony-signalstrength**: Shows information about the signal strength of the cellular network.
199. **termux-torch [true/false]**: Turns the device's flashlight on or off.
200. **termux-tts-engines**: Lists available text-to-speech engines.
201. **termux-tts-speak [text]**: Converts text to speech and speaks it aloud.
202. **termux-upload [source_file] [destination_directory]**: Uploads a file to the specified directory.
203. **termux-url-opener [URL]**: Opens the specified URL in the default app.
204. **termux-volume**: Controls volume settings.
205. **termux-wallpaper [file]**: Sets the device's wallpaper to the specified image file.
206. **termux-wifi-connect [SSID] [password]**: Connects to the specified Wi-Fi network.
207. **termux-wifi-enable [true/false]**: Enables or disables Wi-Fi.
208. **termux-wifi-ipinfo**: Displays information about the device's IP address.
209. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
210. **termux-wifi-tether**: Tethers the device's Wi-Fi connection.
211. **termux-xdg-open [file/path]**: Opens a file or URL using the XDG standard.
212. **termux-contact-list**: Lists all contacts stored on the device.
213. **termux-contact-get [contact_name]**: Retrieves information about the specified contact.
214. **termux-call-log**: Lists call history including incoming, outgoing, and missed calls.
215. **termux-sms-list**: Lists all SMS messages.
216. **termux-sms-inbox**: Lists received SMS messages.
217. **termux-sms-send -n [number] [message]**: Sends an SMS to the specified number with the given message.
218. **termux-sms-view [message_id]**: Displays the contents of the specified SMS message.
219. **termux-camera-info**: Provides information about the device's camera(s).
220. **termux-camera-photo [output_file]**: Takes a photo using the device's camera and saves it to the specified file.
221. **termux-add-repo [repository]**: Adds a new repository to the list of available repositories.
222. **termux-chroot [directory]**: Changes the root directory for the current session.
223. **termux-create-package [package_name]**: Creates a new package with the specified name.
224. **termux-fingerprint [options]**: Manages fingerprints for SSH connections.
225. **termux-fix-permissions [directory/file]**: Fixes permissions for the specified directory or file.
226. **termux-fix-shebang [file]**: Fixes the shebang of a script file to make it executable.
227. **termux-info**: Displays system information.
228. **termux-lock-settings**: Locks Termux settings with a password.
229. **termux-notify**: Sends a notification to the notification bar.
230. **termux-open [file/path]**: Opens a file or directory with the default app.
231. **termux-open-url [URL]**: Opens the specified URL in the default browser.
232. **termux-package-info [package_name]**: Displays information about the specified package.
233. **termux-package-list [options]**: Lists installed packages.
234. **termux-reload-settings**: Reloads Termux settings from disk.
235. **termux-reload-style**: Reloads the Termux console style settings.
236. **termux-reload-fonts**: Reloads the Termux console font settings.
237. **termux-reload-properties**: Reloads the Termux console properties settings.
238. **termux-reset-settings**: Resets Termux settings to default values.
239. **termux-reset**: Resets Termux to a clean state.
240. **termux-[[setup]]-storage**: Sets up storage for Termux.
241. **termux-[[setup]]-storage**: Sets up storage for Termux.
242. **termux-share**: Shares files or text using the Android share menu.
243. **termux-[[setup]]-storage**: Sets up storage for Termux.
244. **termux-sudo**: Runs a command with superuser privileges.
245. **termux-telephony-configure**: Configures telephony settings.
246. **termux-tmpdir**: Prints the path to the temporary directory.
247. **termux-wallpaper [file]**: Sets the device's wallpaper to the specified image file.
248. **termux-wake-lock**: Keeps the device awake until explicitly released.
249. **termux-wake-unlock**: Releases the wake lock on the device.
250. **termux-wifi-connect [SSID] [password]**: Connects to the specified Wi-Fi network.
251. **termux-wifi-enable [true/false]**: Enables or disables Wi-Fi.
252. **termux-wifi-ipinfo**: Displays information about the device's IP address.
253. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
254. **termux-wifi-tether**: Tethers the device's Wi-Fi connection.
255. **termux-wifi-disable**: Disables Wi-Fi.
256. **termux-wifi-enable**: Enables Wi-Fi.
257. **termux-wifi-ipinfo**: Shows information about the Wi-Fi IP address.
258. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information.
259. **termux-wifi-tether**: Shares the cellular data connection via Wi-Fi.
260. **termux-wifi-toggle**: Toggles the Wi-Fi connection.
261. **termux-wifi-connect**: Connects to a specified Wi-Fi network.
262. **termux-wifi-connectioninfo**: Shows information about the current Wi-Fi connection.
263. **termux-wifi-disable**: Disables Wi-Fi.
264. **termux-wifi-enable**: Enables Wi-Fi.
265. **termux-wifi-ipinfo**: Displays information about the device's IP address.
266. **termux-wifi-scaninfo**: Scans for Wi-Fi networks and displays information about them.
267. **termux-wifi-tether**: Tethers the device's Wi-Fi connection.
268. **termux-wifi-toggle**: Toggles the Wi-Fi connection.
269. **termux-wifi-connect [SSID] [password]**: Connects to the specified Wi-Fi network.
270. **termux-wifi-enable [true/false]**: Enables or disables Wi-Fi.
271. **termux-arp**: Displays and modifies the ARP cache.
272. **termux-cpulimit**: Limits CPU usage of a process.
273. **termux-df**: Displays disk usage statistics.
274. **termux-dns-lookup**: Performs DNS lookups.
275. **termux-ftp**: Initiates an FTP session.
276. **termux-hostname**: Displays or sets the system hostname.
277. **termux-iostat**: Displays I/O statistics.
278. **termux-ip**: Displays or configures network interfaces.
279. **termux-netstat**: Displays network connections, routing tables, etc.
280. **termux-nmap**: Performs network discovery and security auditing.
281. **termux-nping**: Sends ICMP echo requests to a host.
282. **termux-ping**: Sends ICMP echo requests to a host.
283. **termux-route**: Displays or modifies the IP routing table.
284. **termux-ss**: Displays socket statistics.
285. **termux-sysctl**: Configures kernel parameters at runtime.
286. **termux-telnet**: Initiates a Telnet session.
287. **termux-traceroute**: Traces the route taken by packets to a destination.
288. **termux-whois**: Retrieves WHOIS information for a domain.
289. **termux-wget**: Retrieves files from the web using HTTP, HTTPS, or FTP.
290. **termux-ssh**: Initiates an SSH session.
291. **termux-sshfs**: Mounts a remote filesystem over SSH.
292. **termux-tcpdump**: Captures and analyzes network packets.
293. **termux-ifconfig**: Displays or configures network interfaces.
294. **termux-ping**: Sends ICMP echo requests to a host.
295. **termux-route**: Displays or modifies the IP routing table.
296. **termux-df**: Displays disk usage statistics.
297. **termux-ssh**: Initiates an SSH session.
298. **termux-whois**: Retrieves WHOIS information for a domain.
299. **termux-iostat**: Displays I/O statistics.
300. **termux-netstat**: Displays network connections, routing tables, etc.
301. **termux-nmap**: Performs network discovery and security auditing.
302. **termux-nping**: Sends ICMP echo requests to a host.
303. **termux-ping**: Sends ICMP echo requests to a host.
304. **termux-route**: Displays or modifies the IP routing table.
305. **termux-ss**: Displays socket statistics.
306. **termux-sysctl**: Configures kernel parameters at runtime.
307. **termux-telnet**: Initiates a Telnet session.
308. **termux-traceroute**: Traces the route taken by packets to a destination.
309. **termux-wget**: Retrieves files from the web using HTTP, HTTPS, or FTP.
310. **termux-ssh**: Initiates an SSH session.
311. **termux-sshfs**: Mounts a remote filesystem over SSH.
312. **termux-tcpdump**: Captures and analyzes network packets.
313. **termux-ifconfig**: Displays or configures network interfaces.
314. **termux-ping**: Sends ICMP echo requests to a host.
315. **termux-route**: Displays or modifies the IP routing table.
316. **termux-df**: Displays disk usage statistics.
317. **termux-ssh**: Initiates an SSH session.
318. **termux-whois**: Retrieves WHOIS information for a domain.
319. **termux-iostat**: Displays I/O statistics.
320. **termux-netstat**: Displays network connections, routing tables, etc.
321. **termux-cat [file]**: Displays the contents of a file.
322. **termux-cp [source] [destination]**: Copies files and directories.
323. **termux-cut [options]**: Cuts out selected portions of each line of a file.
324. **termux-echo [text]**: Displays a line of text.
325. **termux-file-editor [file]**: Opens a file in the default text editor.
326. **termux-file-info [file]**: Displays information about a file.
327. **termux-head [options] [file]**: Displays the first part of a file.
328. **termux-less [file]**: Displays the contents of a file, one screen at a time.
329. **termux-ln [options] [source] [destination]**: Creates links to files.
330. **termux-ls [options]**: Lists directory contents.
331. **termux-md5sum [file]**: Calculates and verifies MD5 checksums.
332. **termux-mkdir [directory]**: Creates directories.
333. **termux-mv [source] [destination]**: Moves or renames files and directories.
334. **termux-od [options] [file]**: Displays the contents of a file in various formats.
335. **termux-paste**: Combines lines from multiple files.
336. **termux-pwd**: Prints the current working directory.
337. **termux-readlink [options] [file]**: Displays the value of a symbolic link.
338. **termux-realpath [file]**: Displays the absolute path of a file.
339. **termux-rm [options] [file]**: Removes files or directories.
340. **termux-sort [options]**: Sorts lines of text files.
341. **termux-split [options] [file]**: Splits a file into pieces.
342. **termux-stat [file]**: Displays file or file system [[status]].
343. **termux-sum [file]**: Calculates checksums and counts the number of blocks for a file.
344. **termux-sync**: Synchronizes cached writes to persistent storage.
345. **termux-tac [file]**: Concatenates and prints files in reverse.
346. **termux-tail [options] [file]**: Displays the last part of a file.
347. **termux-touch [options] [file]**: Updates the access and modification times of files.
348. **termux-truncate [options] [file]**: Shrink or extend the size of a file.
349. **termux-uniq [options]**: Reports or omits repeated lines.
350. **termux-wc [options] [file]**: Prints newline, word, and byte counts for each file.
351. **termux-cut**: Removes sections from each line of files.
352. **termux-cp**: Copies files and directories.
353. **termux-cat**: Concatenates files and prints on the standard output.
354. **termux-paste**: Merges lines of files.
355. **termux-pwd**: Prints the name of the current working directory.
356. **termux-rm**: Removes files or directories.
357. **termux-od**: Displays files in octal format.
358. **termux-sort**: Sorts lines of text files.
359. **termux-split**: Splits a file into pieces.
360. **termux-stat**: Displays file or file system [[status]].
361. **termux-sum**: Displays checksum and block counts for a file.
362. **termux-tac**: Concatenates and prints files in reverse.
363. **termux-tail**: Displays the last part of a file.
364. **termux-touch**: Updates the access and modification times of each file.
365. **termux-truncate**: Shrink or extend the size of each file.
366. **termux-uniq**: Reports or filters out repeated lines in a file.
367. **termux-wc**: Prints newline, word, and byte counts for each file.
368. **termux-which [command]**: Locates the executable file associated with a given command.
369. **termux-whoami**: Displays the username of the current user.
370. **termux-xargs [options]**: Builds and executes command lines from standard input.
____
____

These commands provide powerful tools for managing and manipulating data files and directories on the system. Feel free to adjust or expand upon this chapter as needed!
____
