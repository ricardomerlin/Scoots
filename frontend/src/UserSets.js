import { Link } from 'react-router-dom';
import './styles/UserSets.css';

function UserSets ({ profileSets }) {

    const mappedSets = profileSets.map((set) => {
        return (
            <div className='set-card'>
                <h1>{set.name}</h1>
                <div className='question-list'>
                    <li>Example</li>
                </div>
            </div>
        )
    })

    console.log(mappedSets)

    return (
        <div className="component-container">
            <Link to='/' className='back-home-button'>← Back Home</Link>
            <h1>User Sets</h1>
            <div className='set-list'>
                {mappedSets}
            </div>
        </div>
    )
}

export default UserSets;