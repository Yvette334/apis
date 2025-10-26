import { useState, useEffect } from "react";

function Profile(props){
   return(
    <div className="h-auto flex gap-8">
    <img className="rounded-full h-30 w-30 object-cover" src={props.avatar_url} alt="" />
    <div className="pl-10">
    <h2 className="text-2xl font-bold">{props.public_repos}</h2>
    <p className="text-lg">Repos</p>
    <h2 className="text-2xl font-bold">{props.followers}</h2>
    <p className="text-lg">Followers</p>
    <h2 className="text-2xl font-bold">{props.following}</h2>
    <p className="text-lg">Following</p>
    </div>
    </div>
   )
}
export default function GitHubCard({dark}) {
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
    <section className={`card shadow rounded-2xl p-8 max-w-md w-100 h-85 border ${dark ? 'border-gray-600 bg-gray-800' : 'border-gray-600  text-black'}`}>
        <h2 className="font-bold mb-10 text-xl ">Github</h2>
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