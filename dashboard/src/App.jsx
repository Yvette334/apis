import { useState } from "react"
import GitHubCard from "./components/GitHubCard"
import WeatherCard from "./components/WeatherCard"
import Navbar from "./components/Navbar"

function App() {
  const [dark, setDark] = useState(false)
  
  const toggletheme = () => {
    setDark(!dark)
  }

  return (
    <div className={dark ? 'bg-black text-white' : 'light-mode'}> 
      <Navbar toggletheme={toggletheme} dark={dark} />
      <div className="flex flex-col md:flex-row items-start justify-center gap-6 px-8 max-w-6xl mx-auto">
        <WeatherCard />
        <GitHubCard />
      </div>
    </div>
  )
}

export default App