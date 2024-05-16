import { Link } from 'react-router-dom';
import './styles/UserSets.css';

function UserSets ({ profileSets }) {

    console.log(profileSets)

    console.log(profileSets[0].questions[0].tags);
    
    

    const mappedSets = profileSets.map((set) => {
        return (
            <div className='set-card'>
                <h1>{set.name}</h1>
            </div>
        )
    })

    return (
        <div className="component-container">
            <Link to='/' className='back-home-button'>← Back Home</Link>
            <div className='user-sets-container'>
                <h1>User Sets</h1>
                <div className='set-list'>
                    {mappedSets}
                </div>
            </div>
        </div>
    )
}

export default UserSets;