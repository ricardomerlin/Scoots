import './styles/JoinRoom.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function JoinRoom({ loggedIn }) {

    const [roomID, setRoomID] = useState('');        

    return (
        <div className="join-room-container">
            <Link to='/' className='back-home-button'>← Back Home</Link>
            <h1>Join Room</h1>
            <p>Enter the ID of the room you are trying to join, or {loggedIn ? 'create a new room.' : 'log in to create a new room.'}</p>
            <form>
                <label>
                Room ID:
                <input type="text" name="roomID" onChange={(e) => setRoomID(e.target.value)}/>
                </label>
                <button type="submit">Join Room</button>
            </form>
        </div>
    );
}

export default JoinRoom;