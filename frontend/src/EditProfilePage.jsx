import { Link } from 'react-router-dom';
import './styles/ProfilePage.css';

function ProfilePage ({ profileInformation }) {

    return (
        <>
            <Link to='/' className='back-home-button'>← Back Home</Link>
            <div className="component-container">
                <div className='profile-container'>
                    <img className='cover-image' src={profileInformation.coverImage} alt='Cover Image'/>
                    <img className='profile-picture' src={profileInformation.profilePicture} alt='Profile Picture'/>
                    <p className='profile-first-last-name'>{profileInformation.firstName} {profileInformation.lastName}</p>
                    <p className='profile-user-name'>{profileInformation.username}</p>
                    <p className='profile-email'>{profileInformation.email}</p>
                    <Link to='/UserSets' className='link-button'>My Sets</Link>
                </div>
            </div>
        </>
    )
}

export default ProfilePage;