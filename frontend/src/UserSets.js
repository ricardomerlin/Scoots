import { Link } from 'react-router-dom';
import { useState } from 'react';
import './styles/UserSets.css';

function UserSets ({ profileSets }) {
    
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedSet, setSelectedSet] = useState(null);

    const shortenName = (name) => {
        if (name.length > 30) {
            return name.slice(0, 30) + '...';
        }
        return name;
    }

    const convertDate = (date) => {
        const dateArray = date.split('/');
        const newDate = new Date(`${dateArray[2]}-${dateArray[0]}-${dateArray[1]}`);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return newDate.toLocaleDateString('en-US', options);
    }

    const mappedSets = profileSets.map((set) => {
        return (
            <div className='set-card' key={set.id} onClick={() => {setSelectedSet(set); setModalOpen(true);}}>
                <p className='user-set-name'>{shortenName(set.name)}</p>
                <p className='user-set-date-made'>{set.createdAt}</p>
            </div>
        )
    })

    return (
        <div className="component-container">
            <Link to='/' className='back-home-button'>← Back Home</Link>
            <div className='user-sets-container'>
                <h1>Your Question Sets</h1>
                <div className='set-list'>
                    {mappedSets}
                </div>
            </div>
            {modalOpen && selectedSet && 
            <div className='user-set-modal'>
                <a href='#' className='user-set-modal-close' onClick={() => setModalOpen(false)}></a>
                <h2 className='user-set-modal-name'>{selectedSet.name}</h2>
                <p className='user-set-modal-date-made'>Created on {convertDate(selectedSet.createdAt)}</p>
                <div className='user-set-questions'>
                    {selectedSet.questions && selectedSet.questions.map((question, index) => {
                        return (
                            <div key={index} className='user-set-question'>
                                <p>{question.question}</p>
                                <p>{question.answer}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
            }
        </div>
    )
}

export default UserSets;