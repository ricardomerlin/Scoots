import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './styles/ProfilePage.css';

function ProfilePage ({ profileInformation, user }) {

    const [nameSize, setNameSize] = useState(4)
    const [exampleName, setExampleName] = useState('LONGASSEXAMPLE OFANAMEISWHATIMWRITING')
    const [shorterExample, setShorterExample] = useState('This isShort')

    useEffect(() => {
        changeNameSize()
    }, [])

    const changeNameSize = () => {
        let newSize = 5
        for (let i = 0; i < (exampleName.length); i++) {
            newSize -= 0.075
            console.log(newSize)
        }
        setNameSize(newSize)
        // console.log(newSize)
    }

    console.log(user.firstname.length + user.lastname.length)
    console.log(user.firstname.length)


    return (
        <>
            <Link to='/' className='back-home-button'>← Back Home</Link>
            <div className="component-container">
            <img className='cover-image' src={profileInformation.coverImage} alt='Cover Image'/>
                <div className='profile-container'>
                    <div className='profile-container-left'>
                        <img className='profile-picture' src={profileInformation.profilePicture} alt='Profile Picture'/>
                        <p className='profile-first-last-name' style={{ fontSize: nameSize+'em'}}>{exampleName}</p>
                        <p className='profile-user-name'>{user.username}</p>
                        <p className='profile-role'>Role: {profileInformation.role}</p>
                        <p className='profile-email'>{profileInformation.email}</p>
                        <p className='profile-date-joined'>Date Joined: {profileInformation.dateJoined}</p>
                    </div>
                    <div className='profile-container-right'>
                        <p className='number-sets-created'>Sets Created: {profileInformation.setsCreated}</p>
                        <p className='number-questions-answered'>Total Questions Answered: {profileInformation.careerStats.questionsAnswered}</p>
                        <p className='competitive-rounds-played'>Competitive Rounds Played: {profileInformation.careerStats.competitiveRoundsPlayed}</p>
                        <p className='competitive-rounds-won'>Competitive Rounds Won: {profileInformation.careerStats.competitiveRoundsWon}</p>
                        <p className='competitive-win-percentage'>Competitive Win Percentage: {((profileInformation.careerStats.competitiveRoundsWon / profileInformation.careerStats.competitiveRoundsPlayed) * 100).toFixed(2)}%</p>
                        <p className='casual-rounds-played'>Casual Rounds Played: {profileInformation.careerStats.casualRoundsPlayed}</p>
                        <Link to='/UserSets' className='link-button'>My Sets</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfilePage;