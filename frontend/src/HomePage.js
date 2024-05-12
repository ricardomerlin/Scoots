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
          {loggedIn ?
          <Link className='link-button' to='/Profile'>Profile</Link>
          :
          null
          }
        </div>
        <div className='home-top-bar-right'>
          {loggedIn ?
          <Link to='/HomePage'>Logout</Link>
          :
          <Link to='/LoginScreen'>Login</Link>
          }
        </div>
      </div>
    </div>
  );
}

export default HomePage;