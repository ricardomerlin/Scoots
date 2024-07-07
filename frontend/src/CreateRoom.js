import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import NewSetForm from './CreateRoomComponents/NewSetForm.js'; 
import QuestionSetList from './CreateRoomComponents/QuestionSetList.js';
import './styles/CreateRoom.css';


function CreateRoom({ profileSets }) {
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
                    <h1>Create Game Room</h1>
                    <p>Enter the name of the room you are trying to create.</p>
                    <form className='create-room-form'>
                        <label className='room-name'>
                            Room Name:
                            <input type="text" name="roomName" onChange={(e) => setRoomName(e.target.value)} />
                        </label>
                        <label className='new-or-old-question'>
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
                        <label>
                            Is this a competitive room?
                            <input type="checkbox" name="competitive" onChange={(e) => setCompetitive(e.target.checked)} />
                        </label>
                        <button type="submit">Create Room</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CreateRoom;