import './styles/NewQuestionSet.css';
import { useState } from 'react';

function NewQuestionSet({ loggedIn, user }) {
    const [questions, setQuestions] = useState(['']);
    const [title, setTitle] = useState('')

    console.log(questions)
    console.log(user)
    console.log(title)

    const postQuestionSet = () => {
        console.log('posting')
    }

    console.log(user)

    const addQuestion = () => {
        setQuestions([...questions, '']);
    }

    const removeQuestion = (index) => {
        const newQuestions = questions.filter((_, qIndex) => qIndex !== index);
        setQuestions(newQuestions);
    }

    const handleQuestionChange = (index, event) => {
        const newQuestions = [...questions];
        newQuestions[index] = event.target.value;
        setQuestions(newQuestions);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Questions submitted:', questions);
        const userID = user.id
        const questionSet = {
            title,
            userID
        };
        const response = await fetch('http://127.0.0.1:5555/questionset', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(questionSet),
        });
    }

    console.log(loggedIn)

    return (
        <div className="component-container">
            <div className="new-question-set-container">
                <h1>Create a New Question Set</h1>
                {loggedIn ?
                <h1>Enter your set's name</h1>    
                :
                <h1>You are not logged in, so this set will not be saved.</h1>
            }
                <form className='create-question-set-form' onSubmit={handleSubmit}>
                    <label>
                        <input
                            type='text'
                            value={title}
                            onChangeCapture={(e) => setTitle(e.target.value)}
                        />
                    </label>
                    {questions.map((question, index) => (
                        <div key={index} className='question-input'>
                            <label>
                                {index + 1}:
                                <input
                                    type="text"
                                    value={question}
                                    onChange={(e) => handleQuestionChange(index, e)}
                                />
                            </label>
                            <button type="button" onClick={() => removeQuestion(index)}>Remove</button>
                        </div>
                    ))}
                    <button type="button" onClick={addQuestion}>Add Question</button>
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    );
}

export default NewQuestionSet;
