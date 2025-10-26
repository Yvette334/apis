import { useState, useEffect } from "react";

function Currentwea(props){
   return(
    <div className="card ">
    <h2 className="text-4xl font-semibold mb-6">{props.temperature}°</h2>
    <h2 className="mb-2">Wind:{props.windSpeed}mph</h2>
    <h2>Time:{props.currentTime}</h2>
    </div>
   )
}

export default function WeatherCard() {
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
    <section className="card shadow rounded-2xl p-8 max-w-md w-100 h-85" >
        <h2 className="font-bold mb-20 text-xl">Current Weather</h2>
     <div className="">
            <Currentwea 
            temperature={items.temperature_2m}
            windSpeed={items.wind_speed_10m}
            currentTime={time}
             />
     </div>
    </section>
  )}