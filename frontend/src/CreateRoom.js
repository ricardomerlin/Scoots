import { Link } from 'react-router-dom';

function CreateRoom () {
    return (
        <>
            <Link to='/' className='back-home-button'>← Back Home</Link>
            <div className='component-container'>
                <h1>Hello</h1>
            </div>
        </>
    );
}

export default CreateRoom;