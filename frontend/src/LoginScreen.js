import { useState, useEffect } from 'react';

function LoginScreen () {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div>
            <h1>Login Screen</h1>
        </div>
    )
}

export default LoginScreen