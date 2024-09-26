import React from 'react'
import { Link } from 'react-router-dom'

export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center my-7 font-semibold '>Sign up</h1>
      <form className='flex flex-col gap-4'>
        <input type="text" placeholder='username'
        className='border p-3 rounded-lg'
        id='username'/>
        <input type="email" placeholder='email-id'
        className='border p-3 rounded-lg'
        id='email'/>
        <input type="password" placeholder='password'
        className='border p-3 rounded-lg'
        id='password'/>
        <button className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-90 disabled:opacity-80'>sign-up</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Have an Account?</p>
        <Link to='/sign-in' className='text-blue-700'>
        <span>sign-in</span>
        </Link>
        
      </div>

    </div>
  )
}
