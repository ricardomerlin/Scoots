import { useState, useEffect } from 'react';
import './styles/LoginScreen.css';

function LoginScreen ({ handleLogin }) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const submitLogin = (e) => {
        e.preventDefault();
        console.log('we are handling login')
        fetch('http://127.0.0.1:8000/api/users/')
            .then((response) => {
                console.log('hello')
                return response.json()
            })
            .then((data) => {
                console.log('Success:', data);
                for (let i = 0; i < data.length; i++) {
                    if (data[i].username === username) {
                        console.log(data[i])
                        handleLogin(true, data[i]);
                    }
            }})
            .catch((error) => {
                console.error('Error:', error);
            });
        }

    return (
        <div className='login-container'>
            <form onSubmit={submitLogin}>
                <h1>Username:</h1><input type='text' className='username-input' value={username} onChange={(e) => setUsername(e.target.value)}></input>
                <h1>Password:</h1><input type='password' className='password-input' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button className='login-button'type='submit'>Login</button>
            </form>
            <h1>Don't have an account? <a href='#' className='create-account-button'>Create one here!</a></h1>
        </div>
    )
}

export default LoginScreen