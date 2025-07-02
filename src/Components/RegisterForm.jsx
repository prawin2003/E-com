import React from 'react'
import { Link } from 'react-router-dom'

const RegisterForm = () => {
    return (
        <div id='register-form' className='container text-center '>
            <form className='register-form' onSubmit={(e) => e.preventDefault()}>
                <h2 className=' mb-4 '>Create Account</h2>
                <input className='row mx-auto ' type="text" placeholder="Name" />
                <input className='row mx-auto' type="text" placeholder="Username" />
                <input className='row mx-auto' type="email" placeholder="Email" />
                <input className='row mx-auto' type="password" placeholder="Password" />
                <input className='row mx-auto' type="password" placeholder="Confirm Password" />
                <button className='btn btn-primary ' type="submit">Register</button>
            </form>
            <p className='mt-3'>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    )
}

export default RegisterForm