import { useState, useEffect } from "react";

function Currentwea(props){
   return(
    <div className="">
    <img src={props.avatar_url} alt="" />
    <h2>Wind:{props.followers}</h2>
    <h2>Time:{props.following}</h2>
    </div>
   )
}

export default function WeatherCard() {
  const latitude = -1.9536
  const longitude = 30.0606
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchdata = async () => {
        const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,weather_code,wind_speed_10m&timezone=Africa/Kigali`)
        const data = await res.json()
        setItems ([data])
        setLoading(false)
        }
        fetchdata()
    }, [])
  return (
   <> {items.length === 0  ? <div>Loading ...</div> :
    <section className="pt-20 pb-20 " >
        <h2 className="font-bold">Current Weather</h2>
     <div>
        {items.map((items)=>(
            <Currentwea key={items.id} {...items} />
        ))}
     </div>
    </section>

   }
   </>
  )
}