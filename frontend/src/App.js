import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AboutPage from './AboutPage';
import JoinRoom from './JoinRoom';
import CreateRoom from './CreateRoom';
import LoginScreen from './LoginScreen';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import UserSets from './UserSets';
import './styles/App.css';

function App() {
  const [data, setData] = useState(null);
  const [loggedIn, setLoggedIn] = useState(true);
  const [routeSelected, setRouteSelected] = useState(false);

  const selectRoute = () => {
    setRouteSelected(true);
  }

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage loggedIn={loggedIn} selectRoute={selectRoute} routeSelected={routeSelected}/>} />
          <Route path="/HomePage" element={<HomePage loggedIn={loggedIn} selectRoute={selectRoute} routeSelected={routeSelected}/>} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/JoinRoom" element={<JoinRoom loggedIn={loggedIn}/>} />
          <Route path="/CreateRoom" element={<CreateRoom />} />
          <Route path="/LoginScreen" element={<LoginScreen />} />
          <Route path="/ProfilePage" element={<ProfilePage />} />
          <Route path="/UserSets" element={<UserSets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;