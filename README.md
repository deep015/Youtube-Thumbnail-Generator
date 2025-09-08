# 🎬 YouTube Thumbnail Generator

A modern, professional, and responsive **YouTube Thumbnail Generator** built with **React**. This app allows users to fetch and download YouTube video thumbnails in various resolutions instantly. Perfect for content creators, developers, and YouTube enthusiasts.

---

## 🚀 Project Description

Thumbnails are crucial for attracting viewers on YouTube. This project provides a **fast and simple way** to generate all available thumbnail sizes for any YouTube video. Users can:

- View all thumbnails (120x90, 320x180, 480x360, 640x480, 1280x720)  
- Download thumbnails with a single click  
- Copy thumbnail URLs instantly  

The app features **professional card designs**, **hover animations**, **glassmorphism effects**, and **staggered fade-in animations** for a polished, modern look. Fully responsive for mobile, tablet, and desktop devices.

---

## 🛠 Features

- **Generate Thumbnails**: Fetch all available sizes for any YouTube video.  
- **Download**: One-click download of any thumbnail.  
- **Copy URL**: Copy thumbnail URL to clipboard instantly.  
- **Responsive Design**: Mobile, tablet, and desktop friendly.  
- **Animated Cards**: Smooth fade-in and hover effects.  
- **Modern UI/UX**: Gradient buttons, hover zoom effects, glassmorphism card footer.  
- **Error Handling**: Invalid URLs trigger toast notifications.

---

## 💻 Tech Stack

| Layer       | Technology           | Purpose |
|------------|--------------------|---------|
| Frontend   | React.js           | UI rendering & interactivity |
| Styling    | Tailwind CSS       | Responsive modern design |
| Animations | Animate.css + Tailwind | Smooth card animations |
| Icons      | Remixicon          | Buttons & icons |
| URL Parsing| get-youtube-id     | Extract YouTube video ID |
| Notifications | react-toastify   | Toast success/error messages |

---

## 🗂 Data Flow

1. User enters a **YouTube URL**.  
2. App extracts the **video ID** using `get-youtube-id`.  
3. Generates thumbnail URLs using predefined paths (`default.jpg`, `mqdefault.jpg`, etc.).  
4. Stores URLs in **React state**.  
5. Maps over the state to render **animated cards** with download and copy buttons.  

**Flow Diagram (Simplified)**

