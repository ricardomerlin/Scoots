import './styles/HomePage.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage({ loggedIn, selectRoute, routeSelected }) {

  const selectRouteFromApp = () => {
    selectRoute();
  }

  return (
    <div className="component-container">
      <div className='home-top-bar'>
        <div className='home-top-bar-left'>
          <h1>Scoots</h1>
          <Link className='link-button' onClick={selectRouteFromApp} to='/JoinRoom'>Join Room</Link>
          <Link className='link-button' onClick={selectRouteFromApp} to='/CreateRoom'>Create Room</Link>
          {loggedIn ? <Link className='link-button' onClick={selectRouteFromApp} to='/UserSets'>My Sets</Link> : null}
        </div>
        <div className='home-top-bar-right'>
          {loggedIn ?
          <>
            <Link className='link-button' to='/ProfilePage'>Profile</Link>
            <Link className='link-button' to='/HomePage'>Logout</Link>
          </>
          :
          <>
            <Link className='link-button' to='/LoginScreen'>Login</Link>
            <Link className='link-button' to='/CreateUser'>Sign Up</Link>
          </>
          }
        </div>
      </div>
      <div className='home-main-content'>
        <div className='home-main-content-top'>
          <div className='home-main-content-left'>
            <h1>What is Scoots?</h1>
            <p>Scoots is a web application that allows users to create and join rooms to watch videos together. Users can create a room and invite friends to join the room. Once in the room, users can watch videos together, chat, and more.</p>
          </div>
          <div className='home-main-content-right'>
            <h1>How does it work?</h1>
            <p>Users can create a room or join an existing room. Once in the room, users can watch videos together, chat, and more. Users can also create a playlist of videos to watch together. Users can also invite friends to join the room.</p>
          </div>
        </div>
        <div className='home-main-content-bottom'>
          <h1>Why use Scoots?</h1>
          <p>Scoots is a great way to watch videos with friends. Users can create a room and invite friends to join the room. Once in the room, users can watch videos together, chat, and more. Scoots is a great way to watch videos with friends.</p>
        </div>
      </div>
    </div>
  );
}

export default HomePage;