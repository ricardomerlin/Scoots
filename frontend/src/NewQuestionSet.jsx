import './styles/NewQuestionSet.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function NewQuestionSet({ loggedIn, user }) {
    const [questions, setQuestions] = useState([{ question: '', correctAnswer: '', dummyAnswers: [] }]);
    const [title, setTitle] = useState('');

    const addQuestion = () => {
        setQuestions([...questions, { question: '', correctAnswer: '', dummyAnswers: [] }]);
    };

    console.log(questions)

    const removeQuestion = (index) => {
        const newQuestions = questions.filter((_, qIndex) => qIndex !== index);
        setQuestions(newQuestions);
    };

    const handleQuestionChange = (index, event) => {
        const newQuestions = [...questions];
        newQuestions[index].question = event.target.value;
        setQuestions(newQuestions);
    };

    const handleCorrectAnswerChange = (index, event) => {
        const newQuestions = [...questions];
        newQuestions[index].correctAnswer = event.target.value;
        setQuestions(newQuestions);
    };

    const handleDummyAnswerChange = (qIndex, aIndex, event) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].dummyAnswers[aIndex] = event.target.value;
        setQuestions(newQuestions);
    };

    const addDummyAnswer = (index) => {
        const newQuestions = [...questions];
        newQuestions[index].dummyAnswers.push('');
        setQuestions(newQuestions);
    };

    const removeDummyAnswer = (qIndex, aIndex) => {
        const newQuestions = [...questions];
        newQuestions[qIndex].dummyAnswers = newQuestions[qIndex].dummyAnswers.filter((_, index) => index !== aIndex);
        setQuestions(newQuestions);
    };

    const postAnswer = async (answer, questionID) => {
        try {
            const response = await fetch('api/answer', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ answer, questionID }),
            });
    
            if (!response.ok) {
                throw new Error('Failed to post answer');
            }
    
            const data = await response.json();
            console.log('Answer posted successfully:', data);
            return data;
        } catch (error) {
            console.error('Error posting answer:', error);
            return null;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Questions submitted:', questions);
        const userID = user.id;
        const questionSet = {
            title,
            userID
        };
        try {
            const response = await fetch('api/questionset', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(questionSet),
            });
    
            if (response.ok) {
                const data = await response.json();
                console.log('Response data:', data);
    
                if (data && data.id) {
                    const questionSetID = data.id;
                    console.log('Question set ID:', questionSetID);
    
                    for (let questionData of questions) {
                        const question = {
                            question: questionData.question,
                            correctAnswer: questionData.correctAnswer,
                            dummyAnswers: questionData.dummyAnswers,
                            questionSetID,
                        };
                        const questionResponse = await fetch('api/question', {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify(question),
                        });
    
                        if (questionResponse.ok) {
                            const questionData = await questionResponse.json();
                            console.log('Question posted successfully:', questionData);
                            const questionID = questionData.id;
    
                            // Post the correct answer
                            await postAnswer(question.correctAnswer, questionID);
    
                            // Post each dummy answer
                            for (let dummyAnswer of question.dummyAnswers) {
                                await postAnswer(dummyAnswer, questionID);
                            }
                        } else {
                            console.error('Failed to post question:', question);
                        }
                    }
    
                    console.log('All questions and answers posted successfully');
                } else {
                    console.error('Question set ID not found in response data');
                }
            } else {
                console.error('Failed to create question set');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
    

    return (
        <div className="component-container">
            <Link to='/' className='back-home-button'>← Back Home</Link>
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
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>
                    {questions.map((questionData, qIndex) => (
                        <div key={qIndex} className='questionInput'>
                            <label>
                                {qIndex + 1}:
                                <input
                                    type="text"
                                    value={questionData.question}
                                    onChange={(e) => handleQuestionChange(qIndex, e)}
                                />
                            </label>
                            <label>
                                Correct Answer:
                                <input
                                    type="text"
                                    value={questionData.correctAnswer}
                                    onChange={(e) => handleCorrectAnswerChange(qIndex, e)}
                                />
                            </label>
                            {questionData.dummyAnswers.map((dummyAnswer, aIndex) => (
                                <div key={aIndex} className='dummyAnswerInput'>
                                    <label>
                                        Dummy Answer {aIndex + 1}:
                                        <input
                                            type="text"
                                            value={dummyAnswer}
                                            onChange={(e) => handleDummyAnswerChange(qIndex, aIndex, e)}
                                        />
                                    </label>
                                    <button type="button" onClick={() => removeDummyAnswer(qIndex, aIndex)}>Remove</button>
                                </div>
                            ))}
                            <button type="button" onClick={() => addDummyAnswer(qIndex)}>Add Dummy Answer</button>
                            <button type="button" onClick={() => removeQuestion(qIndex)}>Remove Question</button>
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
