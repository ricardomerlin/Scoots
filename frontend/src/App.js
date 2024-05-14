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

  const profileInformation = {
    username: 'User123',
    email: 'r@gmaill.com',
    password: 'password',
    sets: [
      {
        name: 'Set1',
        questions: [
          {
            question: 'Question1',
            answer: 'Answer1',
            wrongAnswers: ['Wrong1', 'Wrong2', 'Wrong3']
          },
          {
            question: 'Question2',
            answer: 'Answer2',
            wrongAnswers: ['Wrong4', 'Wrong5', 'Wrong6']
          },
          {
            question: 'Question3',
            answer: 'Answer3',
            wrongAnswers: ['Wrong7', 'Wrong8', 'Wrong9']
          },
          {
            question: 'Question4',
            answer: 'Answer4',
            wrongAnswers: ['Wrong10', 'Wrong11', 'Wrong12']
          }
        ]
      },
      {
        name: 'Set2',
        questions: [
          {
            question: 'Question5',
            answer: 'Answer5',
            wrongAnswers: ['Wrong13', 'Wrong14', 'Wrong15']
          },
          {
            question: 'Question6',
            answer: 'Answer6',
            wrongAnswers: ['Wrong16', 'Wrong17', 'Wrong18']
          },
          {
            question: 'Question7',
            answer: 'Answer7',
            wrongAnswers: ['Wrong19', 'Wrong20', 'Wrong21']
          },
          {
            question: 'Question8',
            answer: 'Answer8',
            wrongAnswers: ['Wrong22', 'Wrong23', 'Wrong24']
          }
        ]
      }
    ]
  }
  
  console.log(profileInformation)

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
          <Route path="/UserSets" element={<UserSets profileSets={profileInformation.sets}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;