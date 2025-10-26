import { useState, useEffect } from "react";

function Profile(props){
   return(
    <div className="">
    <img src={props.avatar_url} alt="" />
    <h2>Followers:{props.followers}</h2>
    <h2>Following:{props.following}</h2>
    </div>
   )
}

export default function GitHubCard() {
    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchdata = async () => {
        const res = await fetch(`https://api.github.com/users/Yvette334`)
        const data = await res.json()
        setItems ([data])
        setLoading(false)
        }
        fetchdata()
    }, [])
  return (
   <> {items.length === 0  ? <div>Loading ...</div> :
    <section className="pt-20 pb-20 " >
        <h2 className="font-bold">Github</h2>
     <div>
        {items.map((items)=>(
            <Profile key={items.id} {...items} />
        ))}
     </div>
    </section>

   }
   </>
  )
}