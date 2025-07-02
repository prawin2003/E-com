import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new URLSearchParams();
        formData.append('username', username);
        formData.append('password', password);
        console.log('Submitting login form:', { username, password });
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData,
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
            <form className='login-form' onSubmit={(e) => handleSubmit(e)} >
                <input type="text" placeholder="Username" className='row ' value={username} onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="Password" className='row ' value={password} onChange={(e) => setPassword(e.target.value)} />
                <Link to={'/forgot-password'} className ='row ps-4 '>Forgot-password</Link>
                <button className='btn btn-primary my-3 py-2 px-4 ' type="submit">Login</button>
            </form>
            <p>Don't have an account? <Link to={'/register'}>Register</Link></p>
        </div>
    )
}

export default LoginForm