import { useState, useEffect } from "react";

function Profile(props){
   return(
    <div className="h-auto w-[50px] flex gap-8">
    <img className="rounded-full h-20 w-15" src={props.avatar_url} alt="" />
    <div>
    <h2 className="mb-4">{props.public_repos}
        <br/>Repos </h2>
    <h2 className="mb-4">{props.followers}<br/>Followers</h2>
    <h2 className="mb-4">{props.following}<br/>Following</h2>
    </div>
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
    <section className="card shadow rounded-2xl p-8 max-w-md w-100 h-85" >
        <h2 className="font-bold mb-10 text-xl">Github</h2>
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