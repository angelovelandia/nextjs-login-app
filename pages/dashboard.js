import axios from "axios"

export default function dashboard() {

    const getProfile = async()=>{
        const response = await axios.get('api/profile')
        console.log(response)
    }

  return (
    <div>
        <h1>Dashboard</h1>
        <button onClick={()=> getProfile()}>get profile</button>
    </div>
  )
}