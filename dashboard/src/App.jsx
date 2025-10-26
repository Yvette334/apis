import { useEffect, useState } from "react"
import GitHubCard from "./components/GitHubCard"
import WeatherCard from "./components/WeatherCard"
import Navbar from "./components/Navbar"

function App() {
  const [dark, setDark] = useState(false)
   const toggletheme = () => {
    setDark(!dark)}
  return (
    <div className={`min-h-screen ${dark ?' bg-gray-900 text-white' : 'bg-white text-gray-900'}`}> 
      <Navbar toggletheme={toggletheme} dark={dark} />
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8">
        <WeatherCard dark={dark} />
        <GitHubCard dark={dark} />
      </div>
    </div>
  )
}

export default App