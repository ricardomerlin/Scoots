import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
// import './CreateRoomComponents/'

function CreateRoom () {

    const [roomName, setRoomName] = useState('');
    const [questionSet, setQuestionSet] = useState('');
    const [topics, setTopics] = useState([]);
    const [newSet, setNewSet] = useState(false);
    const [competitive, setCompetitive] = useState(false);

    const openNewSet = () => {
        setNewSet(!newSet);
    }

    return (
        <>
            <Link to='/' className='back-home-button'>← Back Home</Link>
            <div className='component-container'>
                <div className='create-room-container'>
                    <h1>Create Room</h1>
                    <p>Enter the name of the room you are trying to create.</p>
                    <form>
                        <label>
                        Room Name:
                        <input type="text" name="roomName" onChange={(e) => setRoomName(e.target.value)}/>
                        </label>
                        <button type="submit">Create Room</button>
                        <label>
                        Select a previously created question set, or create a new set below.
                        <input type='checkbox' name='questionSet' onChange={openNewSet}/>
                        </label>
                        {newSet ?
                        <>
                            <label>
                            Choose a Question Set:
                            <ul>
                                <li>Set1</li>
                                <li>Set2</li>
                                <li>Set3</li>
                            </ul>
                            </label>
                        </>
                        :
                        <>
                            <label>
                            New Set Name:
                            <input type="text" name="questionSet" onChange={(e) => setQuestionSet(e.target.value)}/>
                            </label>
                            <label>
                            Topics:
                            <input type="text" name="topics" onChange={(e) => setTopics(e.target.value)}/>
                            </label>
                            <label>
                            Is this a competitive room?
                            <input type="checkbox" name="competitive" />
                            </label>
                            <button type="submit">Create Set</button>
                        </>
                        }
                    </form>
                </div>
            </div>
        </>
    );
}

export default CreateRoom;