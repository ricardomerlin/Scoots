import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NewSetForm from './CreateRoomComponents/NewSetForm.js'; 
import QuestionSetList from './CreateRoomComponents/QuestionSetList.js';

function CreateRoom() {
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
                            <input type="text" name="roomName" onChange={(e) => setRoomName(e.target.value)} />
                        </label>
                        <button type="submit">Create Room</button>
                        <label>
                            Select a previously created question set, or create a new set below.
                            <input type='checkbox' name='questionSet' onChange={openNewSet} />
                        </label>
                        {newSet ? (
                            <QuestionSetList 
                                setQuestionSet={setQuestionSet} 
                                setTopics={setTopics} 
                                setCompetitive={setCompetitive}
                            />
                        ) : (
                            <NewSetForm 
                                setQuestionSet={setQuestionSet} 
                                setTopics={setTopics} 
                                setCompetitive={setCompetitive}
                            />
                        )}
                    </form>
                </div>
            </div>
        </>
    );
}

export default CreateRoom;