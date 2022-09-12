import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from "react-hook-form"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { Button } from "../components"

const Signup = () => {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  const [loading, setLoading]=useState(false)

  const toastOptions={
    position:'top-right',
    autoClose:500,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable:true,
    progress:undefined,
    theme:'dark'
  }


  const onSubmit =(data)=>{
    setLoading(true)
    const auth = getAuth()
    let uid = ''
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((response)=>{
        uid=response.user.uid
        sessionStorage.setItem('User Id', uid)
        sessionStorage.setItem('Auth token', response._tokenRosponse.refreshToken)
        window.dispatchEvent(new Event('storage'))
      })
      .catch((error)=>{
        if(error.code ==='auth/email-already-in use'){
          toast.error('Email Already In Use')
        }
      })
      fetch('http://localhost:5000/api/create-user', {
        method: 'POST',
        header:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          email:data.email,
          name:data.name,
          _id: uid
        })
      }).then((response)=>{
        if(response.status === 200){
          setLoading(false)
          toast.success('Acount created Successfully ',toastOptions)
          navigate('/')
        }else{
          console.log(response.json())
        }
      }).catch((error)=>{
        setLoading(false)
        console.log(error)
      })
  }

  return (
    <div className='h-screen flex items-center justify-center bg-black'>
      <div className="rounded-lg max-w-md w-full flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 transition duration-300 animate-pink blur  gradient bg-gradient-to-tr from-rose-500 to-yellow-500"></div>
        <div className="p-10 rounded-xl z-10 w-full h-full bg-black">
          <h5 className="text-3xl">SignUp</h5>
          <form onSubmit={handleSubmit(onSubmit)} className="w-full space-y-6">
            <div>
              <label 
                htmlFor="name"
                className='block text-lg front-medium text-gray-200'>Name</label>
              <input type="text"
                {...register('name')}
                id='name'
                className='block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus-border-gray-200 ' />
            </div>
            <div>
              <label 
                htmlFor="email"
                className='block text-lg front-medium text-gray-200'>Email</label>
              <input type="email"
                {...register('email')}
                id='email'
                className='block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus-border-gray-200 ' />
            </div>
            <div>
              <label 
                htmlFor="password"
                className='block text-lg front-medium text-gray-200'>Password</label>
              <input type="password"
                {...register('password')}
                id='password'
                className='block appearance-none w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-gray-200 focus-border-gray-200 ' />
            </div>
            <Button size='large'>{loading ? 'loading' : 'Sign Up'}</Button>
          </form>
          <ToastContainer/>
        </div>
      </div>
    </div>
  )
}

export default Signup