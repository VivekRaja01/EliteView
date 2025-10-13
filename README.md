# 🎬 EliteView - Movie & TV Streaming Platform

🎬 EliteView is a Netflix-inspired movie & TV streaming web app built with React, Tailwind CSS, React Router & TMDB API 💻.
✨ Browse trending movies, watch previews, save favorites ⭐, search instantly 🔍, and enjoy smooth animations & responsive design 📱💻.
🌙 Features dark mode, interactive hover effects, collapsible FAQs 📖, and email prompts 📧 for a realistic streaming experience.
🚀 Perfect for showcasing modern UI/UX skills, interactive design, and a polished Netflix-like clone ❤️.

---

## 🚀 Project Overview

EliteView replicates the core functionality and user experience of streaming platforms like Netflix. Users can explore trending content, read descriptions, save movies to their personal list, and browse via categorized sections. The project emphasizes UI polish, API integration, component reusability, and frontend best practices.

This application is ideal for:
- ✅ Portfolio showcase
- ✅ Frontend development practice
- ✅ API-driven projects
- ✅ Resume & GitHub presentation
- ✅ Scalable React architecture

---

## 🌟 Key Features (Fully Implemented)

### ✅ 1. Dynamic Movie & TV Content  
- Integrated with **TMDB API** to fetch trending titles in real-time  
- Displays posters, descriptions, and ratings  
- Uses fallback `SAMPLE_MOVIES` when API is unavailable

### ✅ 2. My List (LocalStorage Integration)  
- Users can save movies locally  
- Data persists after page refresh  
- No backend needed

### ✅ 3. Search Functionality  
- Search movies and TV shows by title  
- Instant filtering without page reload

### ✅ 4. Responsive UI & Theming  
- Fully responsive (desktop, tablet, mobile)  
- Light/Dark mode toggle with saved preference  
- Interactive layouts using Tailwind CSS

### ✅ 5. Smooth Animations & UX Enhancements  
- Framer Motion for transitions  
- FAQ accordion with smooth scroll  
- Hover animations on posters

### ✅ 6. Email Call-to-Action Section  
- Collects email to “Join or Restart Membership”  
- Styled like Netflix landing pages

### ✅ 7. FAQ Component  
- Expandable questions  
- Animated open/close behavior  
- Auto-scroll to focused item

### ✅ 8. Trailer Modal (Optional Preview)  
- Movie posters reveal trailer previews on click/hover

### 🛠 Tech Stack

Frontend: React (Vite) ⚛️

Styling: Tailwind CSS 🎨

Animations: Framer Motion ✨

Routing: React Router DOM 🛣️

API Integration: TMDB API 🎬

State Storage: LocalStorage 💾

Icons (if used): Lucide / HeroIcons 🖼️


🧠 Component Breakdown
✅ MovieGrid.jsx

Fetches and displays trending movies

Supports hover effects and modal popups

✅ FAQSection.jsx

Smooth toggle animations

Scrolls to the opened question

✅ EmailCTA.jsx

User email input with responsive layout

Call-to-action section

✅ FeaturesSection.jsx

Displays highlighted benefits (Watch Anywhere, Kids Mode, Offline, etc.)

✅ LocalStorage Logic

Saves favorite movies to "My List"

Keeps dark mode setting active

🧩 API & Data Logic

TMDB requests are made using fetch() or axios

Movies are fetched from endpoints like: https://api.themoviedb.org/3/trending/all/week?api_key=YOUR_KEY


🚧 Future Roadmap

Planned improvements:

✅ Add authentication (Firebase / Supabase)
✅ User profiles & watch history
✅ Payment UI simulation
✅ Backend integration for real database
✅ Filter by genre, language, year
✅ Multi-language support
✅ Continue watching section
✅ Deployment on Vercel/Netlify

🎨 UI/UX Highlights

Clean Netflix-style layout

Hover-based previews

Consistent font, spacing, colors

Mobile-first responsive grid

Smooth animations via Framer Motion

Sticky navbar & scroll behavior


📧 Contact

👨‍💻 Developed by: Vivek Raja

📮 Email: rajavivek773@gmail.com

🌍 GitHub: https://github.com/VivekRaja01

💖 Support

If you like this project, please ⭐ star the repository and share it with others! Your support helps me keep improving and building more awesome apps 🚀✨.
