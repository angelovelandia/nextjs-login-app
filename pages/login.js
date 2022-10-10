import { useState } from "react"
import axios from "axios"
import { useRouter } from "next/router";

export default function Login() {
  
  const router = useRouter();

  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  })

  const handleChange = (e)=>{
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async(e)=>{
    e.preventDefault()
    const response = await axios.post('/api/auth/login', credentials);
    if(response.status === 200){
      router.push("/dashboard/");
    }
  }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="email" name="email" placeholder="email" onChange={handleChange} />
            <input type="password" name="password" placeholder="password" onChange={handleChange} />
            <button type="submit">Login</button>
        </form>
    </div>
  )
}