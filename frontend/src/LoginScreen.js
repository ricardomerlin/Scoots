import { useState, useEffect } from 'react';
import './styles/LoginScreen.css';

function LoginScreen () {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className='login-container'>
            <h1>Username:</h1><input type='text' className='username-input' value={username} onChange={(e) => setUsername(e.target.value)}></input>
            <h1>Password:</h1><input type='password' className='password-input' value={password} onChange={(e) => setPassword(e.target.value)}></input>
            <button className='login-button'>Login</button>
            <h1>Don't have an account? <a href='#' className='create-account-button'>Create one here!</a></h1>
        </div>
    )
}

export default LoginScreen