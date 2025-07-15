import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const {register,handleSubmit}= useForm();

    const onSubmit = (data) => {
        
        // const formData = new URLSearchParams();
        // formData.append('username', username);
        // formData.append('password', password);
        console.log('Submitting login form:', data);
        fetch('http://localhost:8080/auth/login', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
              //  'Content-Type': 'application/x-www-form-urlencoded','
            },
            body: JSON.stringify(data),
            credentials: 'include', // This is important for sending cookies
        }).then(response => {
            console.log(response);
            if (response.ok) {
                alert('Login successful!');
                window.location.href = 'http://localhost:8080/user';
            } else {
                throw new Error('Invalid username or password');
            }
        }).catch(error => {
            console.error(error);
        });
    };

    return (
        <div id='login-form' className=' container text-center border '>
            <h2 className=' mb-4 '>Login</h2>
            <form className='login-form' onSubmit={handleSubmit(onSubmit)} >
                <input type="text" placeholder="Username" className='row ' {...register("username", { required: "Username is required" })} />
                <input type="password" placeholder="Password" className='row ' {...register("password", { required: "Password is required" })} />
                <Link to={'/forgot-password'} className ='row ps-4 '>Forgot-password</Link>
                <button className='btn btn-primary my-3 py-2 px-4 ' type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to={'/register'}>Register</Link></p>
        </div>
    )
}

export default LoginForm