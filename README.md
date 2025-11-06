# 🎵 YourSpotify — Expo Music Player

A modern and elegant music player app built with React Native (Expo), featuring local audio playback, real-time controls, auto-play transitions, and smooth animations — all running directly in Expo Go using the expo-av module.

## 🚀 Features

### 🎧 Play / Pause / Next / Previous song controls

### 🔄 Auto-play next track after one finishes

### ⏱️ Seek bar for progress tracking and scrubbing

### 🖼️ Dynamic album art & song info display

### 💾 Local MP3 files stored inside the app

### 🪄 Works in Expo Go (no native build required)

### 🧠 Built using clean, modular TypeScript components




## 🧠 Tech Stack

| Technology                         | Purpose                      |
| ---------------------------------- | ---------------------------- |
| **React Native + Expo**            | Cross-platform app framework |
| **expo-av**                        | Audio playback and control   |
| **@react-native-community/slider** | Progress bar for audio       |
| **react-native-vector-icons**      | Icon library for buttons     |
| **TypeScript**                     | Type safety and cleaner code |



## 📂 Folder Structure

```bash
yourspotify/
│
├── app/
│   ├── index.tsx                # App entry point
│   ├── screens/
│   │   └── MusicPlayer.tsx      # Core music player logic
│   ├── components/
│   │   ├── ControlCenter.tsx    # Play/Pause/Next/Prev buttons
│   │   ├── SongInfo.tsx         # Song title, artist, album info
│   │   └── SongSlider.tsx       # Seekbar with time display
│   └── constants.ts             # Local playlist (5 hardcoded songs)
│
├── assets/
│   |── audio/                   # Local MP3 song files
│      ├── one.mp3
│      ├── two.mp3
│      ├── three.mp3
│      ├── four.mp3
│      └── five.mp3
│   
├── package.json
├── app.json
├── tsconfig.json
└── README.md

```



## ⚙️ Installation & Setup


1️⃣ Clone the repository

   ```bash
   git clone https://github.com/YOUR_USERNAME/YourSpotify.git

   cd YourSpotify

   ```

2️⃣ Install dependencies

   ```bash
   npm install
   ```

3️⃣ Install Expo packages

```bash
npx expo install expo-av @react-native-community/slider react-native-vector-icons
```
4️⃣ Start the app

```bash
npx expo start
```
Then scan the QR code using the Expo Go app (Android/iOS).



## 🎶 Songs Included (Local)

| # | Title               | Artist                       |
| - | ------------------- | ---------------------------- |
| 1 | Maan Meri Jaan      | King                         |
| 2 | Raataan Lambiyan    | Asees Kaur, Tanishk Bagchi   |
| 3 | Kesariya            | Arijit Singh                 |
| 4 | Pal Pal Dil Ke Paas | Kishore Kumar                |
| 5 | Besharam Rang       | Vishal & Shekhar, Shilpa Rao |

All tracks are bundled as local MP3 files inside /assets/audio/.



## 🧩 Future Improvements

### 🌐 Add online API integration (JioSaavn / Spotify)

### 💖 Add Favorites and Recently Played sections

### 🔊 Add Shuffle and Repeat features

### 📁 Add custom playlists

### 🌓 Add light/dark theme toggle



Made by Yash Tiwari with 💖
