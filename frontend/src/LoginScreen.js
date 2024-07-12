import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import './styles/LoginScreen.css';

function LoginScreen ({ submitLogin, loggedIn }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [profile, setProfile] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        if (loggedIn === true) {
            navigate('/HomePage')
        }
    }, [loggedIn])


    const handleLoginSubmit = (e) => {
        e.preventDefault();
        submitLogin(username, password)
    }

    return (
        <div className='component-container'>
            <Link to='/' className='back-home-button'>← Back Home</Link>
            <div className='login-container'>
            <form onSubmit={handleLoginSubmit}>
                <h1>Username:</h1><input type='text' className='username-input' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <h1>Password:</h1><input type='password' className='password-input' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button className='login-button'type='submit'>Login</button>
            </form>
            <h1>Don't have an account? <a href='#' className='create-account-button'>Create one here!</a></h1>
            </div>
        </div>
    )
}

export default LoginScreen