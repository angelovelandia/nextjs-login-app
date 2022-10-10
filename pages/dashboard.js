import axios from "axios"
import { useState } from "react"
import { useRouter } from "next/router";

export default function Dashboard() {

  const router = useRouter();

  const [user, setUser] = useState("");

  const getProfile = async()=>{
      const response = await axios.get('api/profile')
      setUser(response.data)
  }

  const logout = async()=>{
    try {
      await axios.post('api/auth/logout');
      router.push('/login');  
    } catch (error) {
      console.log(error);
      router.push('/login');
    }
  } 

  return (
    <div>

        <h1>Dashboard</h1>
        <pre>
          {JSON.stringify(user, null, 2)}
        </pre>

        <button onClick={()=> getProfile()}>get profile</button>
        <button onClick={()=> logout()}>Logout</button>

    </div>
  )
}