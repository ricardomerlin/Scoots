import './styles/NewQuestionSet.css'
import { useState, useEffect } from 'react';

function NewQuestionSet() {

    const [numberOfQuestions, setNumberOfQuestions] = useState(1)
    const [questions, setQuestions] = useState([])
    
    const addQuestion = (e) => {
        e.preventDefault()
        console.log('Hello')
        
    }

    const question = (questionNumber) => {
        return (
            <label className='question-input'>
            {questionNumber}
                <input type="text" name="firstName" />
            </label>
        )
    }

    const renderedQuestionInput = () => {
    }

    return (
        <div className="component-container">
            <div className="new-question-set-container">
                <h1>Hello</h1>
                <form className='create-question-set-form' onSubmit={addQuestion}>
                    <h1>New Question Set</h1>
                    <label className='first-name-input'>
                        1:
                        <input type="text" name="firstName" />
                    </label>
                    <button type="submit">Create</button>
                </form>
            </div>
        </div>
    );
}

export default NewQuestionSet;