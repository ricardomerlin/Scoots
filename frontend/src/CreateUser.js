import { Link } from 'react-router-dom';
import { useState } from 'react'
import './styles/CreateUser.css'

function CreateUser() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <Link to='/' className='back-home-button'>← Back Home</Link>
            <div className="component-container">
            <form className='create-user-form'>
                        <h1>Sign up for Scoots</h1>
                        <label className='first-name-input'>
                            First Name:
                            <input type="text" name="firstName" onChange={(e) => setFirstName(e.target.value)}/>
                        </label>
                        <label className='last-name-input'>
                            Last Name:
                            <input type="text" name="lastName" onChange={(e) => setLastName(e.target.value)}/>
                        </label>
                        <label className='username-input'>
                            Username:
                            <input type="text" name="username" onChange={(e) => setUsername(e.target.value)}/>
                        </label>
                        <label className='password-input'>
                            Password:
                            <input type="text" name="password" onChange={(e) => setPassword(e.target.value)}/>
                        </label>
            </form>
            </div>
        </>
    )
}

export default CreateUser