import './styles/HomePage.css';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function HomePage({ loggedIn, selectRoute, routeSelected }) {

  const selectRouteFromApp = () => {
    selectRoute();
  }

  return (
    <div className="component-container">
      <h1>Scoots</h1>
      <p>Welcome to Scoots!</p>
      <nav>
          {routeSelected ?
          null
          :
          <>
              <Link onClick={selectRouteFromApp} to='/AboutPage'>About</Link>
              <Link onClick={selectRouteFromApp} to='/JoinRoom'>Join Room</Link>
          </>
          }
          <>
            {loggedIn ?
            <Link to='/HomePage'>Logout</Link>
            :
            <Link to='/LoginScreen'>Login</Link>
            }
          </>
        </nav>
    </div>
  );
}

export default HomePage;