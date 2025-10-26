import { useState, useEffect } from "react";

function Currentwea(props){
  const weatherIcon = (weatherCode) => {
     const icons = {
       0: "☀️",  // Clear sky
       1: "🌤️",  // Mainly clear
       2: "⛅",  // Partly cloudy
       3: "☁️",  // Overcast
       45: "🌫️", // Fog
       48: "🌫️", // Depositing rime fog
       51: "🌦️", // Light drizzle
       53: "🌦️", // Moderate drizzle
       55: "🌦️", // Dense drizzle
       61: "🌧️", // Slight rain
       63: "🌧️", // Moderate rain
       65: "🌧️", // Heavy rain
       80: "🌦️", // Slight rain showers
       81: "🌦️", // Moderate rain showers
       82: "🌦️", // Violent rain showers
       95: "⛈️",  // Thunderstorm
       96: "⛈️",  // Thunderstorm with slight hail
       99: "⛈️"   // Thunderstorm with heavy hail
     }
     return icons[weatherCode]
   }
   return(
    <div className="card ">
    <div className="flex">
      <span className="text-4xl">{weatherIcon(props.weatherCode)}</span>
    <h2 className="text-4xl font-semibold mb-8">{props.temperature}°</h2>
    </div>
    <h2 className="text-lg font-semibold">Wind:{props.windSpeed}mph</h2>
    <h2 className="text-lg font-semibold gap-6">Time:{props.currentTime}</h2>
    </div>
   )
}

export default function WeatherCard({dark}) {
  const latitude = -1.9536
  const longitude = 30.0606
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [time, setTime]= useState(new Date().toLocaleTimeString([], {}))
    useEffect (()=>{
      const timer = setInterval(()=>{
        setTime(new Date().toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }))
      }, 1000)
      return ()=> clearInterval(timer)
    },[])
    useEffect(() => {
        const fetchdata = async () => {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m&timezone=Africa/Kigali`)
        const data = await res.json()
        setItems (data.current)
        setLoading(false)
        }
        fetchdata()
    }, [])
    if(!items){
      return <div>Loading...</div>
    }
  return ( 
    <section className={`card shadow rounded-2xl p-8 max-w-md w-100 h-85 border ${dark ? 'border-gray-600 bg-gray-800' : 'border-gray-600 bg-white  text-black'}`}>
        <h2 className="font-bold mb-16 text-2xl">Current Weather</h2>
     <div className="">
            <Currentwea 
            temperature={items.temperature_2m}
            windSpeed={items.wind_speed_10m}
            currentTime={time}
            weatherCode={items.weather_code}
             />
     </div>
    </section>
  )}