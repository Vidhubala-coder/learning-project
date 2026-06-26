import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Login = () => {

  const [formData, setFormData] = useState({username:"", password:""})

    const navigate = useNavigate()

  const handleChange = (e)=>{

    setFormData({...formData, [e.target.name] : e.target.value})
    // console.log({...formData, [e.target.name] : e.target.value})
  }


  // const handleSubmit =(e)=>{
  //   e.preventDefault()

  //   console.log(formData)
  //   try{

  //   }catch(err){
  //     console.log(err.message)
  //   }
  // }


  const handleSubmit =(e)=>{
    e.preventDefault()

   if(
    formData.username === "admin",
    formData.password === "password123"
   ){
      localStorage.setItem("admin",JSON.stringify({
        username : formData.username,
        password :formData.password
      }))
      // console.log("Login Successfull")
      toast.success("login Successfull")
      

      navigate("/books")


   }
   else{
    // console.log("Invalid Username or Password")
    toast.error("Invalid Username or Password")
   }
  }
  




  return (
    <div className ='min-h-screen bg-gray-100 flex flex-col justify-center items-center px-4'>
      <div className='max-w-md bg-white border border-gray-200 p-8 rounded-xl shadow-md'>
        <div className='text-center mb-6'>
          <h1 className ='text-2xl font-bold text-gray-800'>libris Admin Panel</h1>
          <p className='text-gray-500 text-sm mt-1'>Simple Library Management</p>
          </div>
          
          <form action="" className='space-y-4' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="" className='block text-gray-600 text-sm font-medium font-semibold mb-1'>Username</label>
              <input type="text" onChange={handleChange} name="username" id="" value={formData.username} placeholder="E.g Admin" className='w-full p-2.5 border border-gray-400 rounded-lg text-gray-500 bg-gray-50 '/>
            </div>
            <div>
              <label htmlFor="" className='block text-gray-600 text-sm font-medium font-semibold mb-1'>Password</label>
              <input onChange={handleChange} name="password" value={formData.password} type="password"  id="" placeholder="E.g Password" className='w-full p-2.5 border border-gray-400 rounded-lg text-gray-500 bg-gray-50 '/>
            </div>
            <button className='bg-blue-500 py-2.5  text-white font-bold font-semibold w-full rounded-lg
            hover:bg-blue-800 cursor-pointer'>Sign in</button>
          </form>
      </div>
    </div>
  )
}

export default Login