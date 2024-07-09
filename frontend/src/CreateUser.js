import { Link } from 'react-router-dom';
import { useState } from 'react'
import './styles/CreateUser.css'

function CreateUser() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [birthday, setBirthday] = useState('')

    const submitUser = async (e) => {
        e.preventDefault();
        if (firstName && lastName && username && password) {
            const user = {
                firstName,
                lastName,
                username,
                password,
                birthday,
            };
            const response = await fetch('http://127.0.0.1:5555/api/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(user),
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log('User created successfully:', data);
            } else {
                console.error('Failed to create user');
            }
        } else {
            console.log('Fill all fields')
        }
    }

    return (
        <>
            <Link to='/' className='back-home-button'>← Back Home</Link>
            <div className="component-container">
                <form className='create-user-form' onSubmit={submitUser}>
                    <h1>Sign up for Scoots</h1>
                    <label className='first-name-input'>
                        First Name:
                        <input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)} />
                    </label>
                    <label className='last-name-input'>
                        Last Name:
                        <input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)} />
                    </label>
                    <label className='username-input'>
                        Username:
                        <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label className='password-input'>
                        Password:
                        <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </>
    )
}

export default CreateUser
