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
    firstName: 'John',
    lastName: 'Doe',
    username: 'User123',
    email: 'r@gmaill.com',
    password: 'password',
    dateJoined: '01/01/2021',
    role: 'Teacher',
    profilePicture: 'https://m.media-amazon.com/images/I/71ZE-ISEadL._AC_UF1000,1000_QL80_.jpg',
    coverImage: 'https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?cs=srgb&dl=pexels-pixabay-206359.jpg&fm=jpg',
    careerStats: {
    setsCreated: 5,
      questionsAnswered: 10,
      competitiveRoundsPlayed: 7,
      competitiveRoundsWon: 3,
      casualRoundsPlayed: 10,
      quizzesCreated: 5,
      questionsAnswered: 10,
    },
    sets: [
      {
        name: 'donkeydonkeydonkeydonkeydonkeydonkeydonkeydonkeydonkeydonkeydonkeydonkey',
        createdAt: '01/01/2021',
        questions: [
          {
            question: 'Question1',
            answer: 'Answer1',
            wrongAnswers: ['Wrong1', 'Wrong2', 'Wrong3'],
            tags: ['Tag1', 'Tag2', 'Tag3']
          },
          {
            question: 'Question2',
            answer: 'Answer2',
            wrongAnswers: ['Wrong4', 'Wrong5', 'Wrong6'],
            tags: ['Tag4', 'Tag5', 'Tag6']
          },
          {
            question: 'Question3',
            answer: 'Answer3',
            wrongAnswers: ['Wrong7', 'Wrong8', 'Wrong9'],
            tags: ['Tag7', 'Tag8', 'Tag9']
          },
          {
            question: 'Question4',
            answer: 'Answer4',
            wrongAnswers: ['Wrong10', 'Wrong11', 'Wrong12'],
            tags: ['Tag10', 'Tag11', 'Tag12']
          }
        ]
      },
      {
        name: 'Set2',
        createdAt: '01/01/2021',
        questions: [
          {
            question: 'Question5',
            answer: 'Answer5',
            wrongAnswers: ['Wrong13', 'Wrong14', 'Wrong15'],
            tags: ['Tag13', 'Tag14', 'Tag15']
          },
          {
            question: 'Question6',
            answer: 'Answer6',
            wrongAnswers: ['Wrong16', 'Wrong17', 'Wrong18'],
            tags: ['Tag16', 'Tag17', 'Tag18']
          },
          {
            question: 'Question7',
            answer: 'Answer7',
            wrongAnswers: ['Wrong19', 'Wrong20', 'Wrong21'],
            tags: ['Tag19', 'Tag20', 'Tag21']
          },
          {
            question: 'Question8',
            answer: 'Answer8',
            wrongAnswers: ['Wrong22', 'Wrong23', 'Wrong24'],
            tags: ['Tag22', 'Tag23', 'Tag24']
          }
        ]
      },
      {
        name: 'Set3',
      },
      {
        name: 'Set4',
      },
      {
        name: 'Set5',
      },
      {
        name: 'Set6',
      },
      {
        name: 'Set7',
      },
      {
        name: 'Set8',
      },
      {
        name: 'Set9',
      },
      {
        name: 'Set10',
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
          <Route path="/ProfilePage" element={<ProfilePage profileInformation={profileInformation}/>} />
          <Route path="/UserSets" element={<UserSets profileSets={profileInformation.sets}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;