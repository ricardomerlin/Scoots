import { Link } from 'react-router-dom';
import './styles/ProfilePage.css';

function ProfilePage ({ profileInformation }) {

    return (
        <>
            <Link to='/' className='back-home-button'>← Back Home</Link>
            <div className="component-container">
            <img className='cover-image' src={profileInformation.coverImage} alt='Cover Image'/>
                <div className='profile-container'>
                    <div className='profile-container-left'>
                        <img className='profile-picture' src={profileInformation.profilePicture} alt='Profile Picture'/>
                        <p className='profile-first-last-name'>{profileInformation.firstName} {profileInformation.lastName}</p>
                        <p className='profile-user-name'>{profileInformation.username}</p>
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