🎬 Movie Fan

A Full-Stack Movie Discovery Application built with React, TailwindCSS, Firebase, and TMDb API.
This app delivers a smooth user experience with real-time movie data, secure authentication, and modern UI design.

🚀 Features

🔐 Authentication with Firebase (Google & Email/Password).

🎥 Real-Time Movies powered by TMDb API
.

⭐ Favorites Management linked to user accounts.

🔎 Advanced Search for films & TV shows via TMDb Search Endpoint.

📱 Responsive Design optimized for all devices.

⚡ Lightweight & Fast React + Vite architecture.

🛠️ Tech Stack

React.js → Component-based UI framework.

TailwindCSS → Utility-first CSS framework.

Firebase Authentication → Secure login & user sessions.

TMDb API
 → Movie & TV data provider.

React Router → Client-side routing.

Context API → Global state management.

⚙️ Setup & Configuration

Clone the repository:

git clone https://github.com/your-username/movie-fan.git
cd movie-fan


Install dependencies:

npm install


Get your TMDb API key from here
.

Configure Firebase + TMDb API inside .env:

VITE_FIREBASE_API_KEY=your_firebase_key  
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_domain  
VITE_FIREBASE_PROJECT_ID=your_firebase_project  
VITE_TMDB_API_KEY=your_tmdb_key  


Run the development server:

npm run dev

📂 Project Overview

Authentication Layer → Firebase handles login/logout & user sessions.

Movie Data Layer → TMDb API provides trending, popular, and detailed movie info.

UI Layer → TailwindCSS for responsive modern styling.

Routing Layer → React Router for navigation (Home, Login, Movie Details, Favorites).

State Layer → Context API for global state (auth + favorites).

🎨 Design Highlights

Clean, minimal, and modern UI.

Responsive layouts for both mobile and desktop.

Intuitive navigation with smooth user experience.

Dark Mode Ready with theme toggling.

🔮 Future Roadmap

📝 Add user reviews and custom ratings.

📺 Expand to include full TV show support.

🌐 Add multi-language support.

📊 Performance + SEO optimizations.

💾 Offline mode for saved favorites.

🙌 Credits

Firebase
 → Authentication & backend services.

TMDb API
 → Movie data provider.

TailwindCSS
 → Styling system.

React
 → UI framework.

📌 Disclaimer: All movie & TV data is sourced from TMDb.