## Developer Dashboard
A modern, responsive React dashboard that displays real-time GitHub profile information and weather data with persistent light/dark mode toggle.
 Features
GitHub Profile Card - Displays user avatar, repository count, followers, and following

Weather Card - Shows current temperature, wind speed, and live updating time with weather icons

Theme Toggle - Switch between light and dark modes with persistent local storage

Responsive Design - Optimized for mobile, tablet, and desktop

Real-time Data - Live weather updates and GitHub statistics
Technologies Used
React - Frontend framework with hooks

Tailwind CSS - Styling and responsive design

Fetch API - Data fetching from external APIs

JavaScript ES6+ - Modern JavaScript features

 APIs Used
GitHub API: https://api.github.com/users/Yvette334

Open-Meteo Weather API: https://api.open-meteo.com/v1/forecast

Local Development
Clone the repository
git clone https://github.com/Yvette334/apis.git
cd dashboard

Install dependencies
npm install
Start the development server
npm run dev

Open your browser
Navigate to http://localhost:5173

Project Structure
```developer-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation with theme toggle
│   │   ├── GitHubCard.jsx      # GitHub profile display
│   │   └── WeatherCard.jsx     # Weather information display
│   ├── App.jsx                 # Main application component
│   ├── main.jsx                # Application entry point
│   └── index.css               # Global styles
├── package.json
└── README.md
```
 Component Architecture
App.jsx
Manages global theme state using useState

Handles localStorage for theme persistence using useEffect

Passes props to child components

Navbar.jsx
Displays "Developer Dashboard" title

Theme toggle button that switches between "Light/Dark"

Responsive flex layout

GitHubCard.jsx
Fetches GitHub user data from API

Displays circular profile avatar

Shows repository count, followers, and following statistics

Handles loading states

WeatherCard.jsx
Fetches real-time weather data from Open-Meteo API

Displays temperature, wind speed, and live updating time

Shows weather condition icons based on API weather codes

Updates time every second

🎨 Design Features
Card-based Layout: Clean shadow cards with rounded corners

Consistent Spacing: Uniform padding and margins throughout

Typography: Clear hierarchy with bold headings

Color Scheme: Gray scale with blue accent for buttons

Responsive: Flexbox layout that adapts to screen size

📱 Screenshots
Light Mode: Clean white background with gray cards
*Dark Mode: Dark background with gray-800 cards*

🌐 Live Demo
[Add your live deployment link here]

✅ Assignment Requirements Met
Core Features
✅ GitHub Profile Card with avatar, repos, followers, following

✅ Weather Card with temperature, wind speed, live time

✅ Light/Dark mode toggle with localStorage persistence

✅ Responsive design across all devices

Technical Implementation
✅ React hooks (useState, useEffect)

✅ Props passing between components

✅ API data fetching with error handling

✅ Modular component architecture

✅ Tailwind CSS for styling

![Image Alt](https://github.com/Yvette334/apis/blob/main/screencapture-localhost-5173-2025-10-26-18_44_56%20(3).png?raw=true)
