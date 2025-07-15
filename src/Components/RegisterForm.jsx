import React from 'react'
import { useForm , } from 'react-hook-form';
import { Link } from 'react-router-dom'

const RegisterForm = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        
    };

    return (
        <div id='register-form' className='container text-center '>
            <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
                <h2 className=' mb-4 '>Create Account</h2>
                <input className='row mx-auto ' type="text" placeholder="Name" {...register("name", { required: "Name is required" })} />
                <input className='row mx-auto' type="text" placeholder="Username" {...register("username", { required: "Username is required" })} />
                <input className='row mx-auto' type="email" placeholder="Email" {...register("email", { required: "Email is required" })} />
                <input className='row mx-auto' type="password" placeholder="Password" {...register("password", { required: "Password is required" })} />
                <input className='row mx-auto' type="password" placeholder="Confirm Password" />
                <button className='btn btn-primary ' type="submit">Register</button>
            </form>
            <p className='mt-3'>Already have an account? <Link to="/login">Login</Link></p>
        </div>
    )
}

export default RegisterForm