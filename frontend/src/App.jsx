import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import AboutPage from './AboutPage';
import JoinRoom from './JoinRoom';
import CreateRoom from './CreateRoom';
import LoginScreen from './LoginScreen';
import HomePage from './HomePage';
import ProfilePage from './ProfilePage';
import UserSets from './UserSets';
import GameRunning from './GameRunning';
import CreateUser from './CreateUser';
import NewQuestionSet from './NewQuestionSet'
import './styles/App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [routeSelected, setRouteSelected] = useState(false);
  const [profileID, setProfileID] = useState(null)

  useEffect(() => {
    console.log('checking session')
    fetch(`api/check_session`).then((res) => {
        if (res.ok) {
            res.json().then((user) => {
              setLoggedIn(true)
              setUser(user)
              console.log('yesssss')
        });
        } else {
          setLoggedIn(false)
          setUser(null)
          console.log('nooooo')
        }
    });
  }, []);

  useEffect(() => {
    if (profileID) {
      getProfileDetails()
    }
  }, [profileID]);

  console.log(user)

  const selectRoute = () => {
    setRouteSelected(true);
  }

  const handleLogin = (login, data) => {
    setLoggedIn(login);
    setUser(data);
  }

  const getProfileDetails = () => {
    fetch(`api/user/${profileID}`)
    .then(res => res.json())
    .then(data => {
      setUser(data)
      console.log(data)
      setLoggedIn(true)
    })
    .catch(error => {
      console.log('Error:', error)
    })
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
    previousGames: [
      {
        roomName: 'Room1',
        date: '01/01/2021',
        winner: 'Ryan Boy',
        players: ['John Doe', 'Jane Doe', 'Hamburgler', 'Ronald', 'Stevie'],
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
    ],
    savedSets: [
      {
        name: 'donkeydonkeydon keydonkeydonk eydonkeydonkeyd onkeydonkeydo nkeydonkeydonkey',
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
            question: 'Why do I need to write something so long to do this and do that and I am writing a long question here hmm, interesting, I am interesting am I?',
            answer: 'Answer5',
            wrongAnswers: ['Wrong13', 'Wrong14', 'Wrong15'],
            tags: ['Tag13', 'Tag14', 'Tag15']
          },
          {
            question: 'WHy am I writing a long question that may not be as long as the one I just wrote?',
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

  const submitLogin = async (username, password) => {
    console.log('logging in')
    const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
            'username': username,
            'password': password
        }),
    });
    if (response.ok) {
        const data = await response.json();
        setProfileID(data.id)
        setLoggedIn(true)
    } else {
        const errorData = await response.json().catch(() => null);
        console.log('Error:', errorData)
        setLoggedIn(false)
    }
  }

  const handleLogout = async () => {
    const response = await fetch('/api/logout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    if (response.ok) {
      const data = await response.json();
      setLoggedIn(false)
      setUser(null)
      setProfileID(null)
    } else {
      console.log('Logout failed');
    }
  };
  

  return (
    <>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<HomePage loggedIn={loggedIn} selectRoute={selectRoute} routeSelected={routeSelected}/>} />
            <Route path="/HomePage" element={<HomePage loggedIn={loggedIn} selectRoute={selectRoute} routeSelected={routeSelected} handleLogout={handleLogout}/>} />
            <Route path="/AboutPage" element={<AboutPage />} />
            <Route path="/JoinRoom" element={<JoinRoom loggedIn={loggedIn}/>} />
            <Route path="/CreateRoom" element={<CreateRoom profileSets={profileInformation.savedSets}/>} />
            <Route path="/LoginScreen" element={<LoginScreen submitLogin={submitLogin} loggedIn={loggedIn}/>} />
            <Route path="/ProfilePage" element={<ProfilePage profileInformation={profileInformation}/>} />
            <Route path="/UserSets" element={<UserSets profileSets={profileInformation.savedSets}/>} />
            <Route path="/GameRunning" element={<GameRunning /> }/>
            <Route path="/CreateUser" element={<CreateUser />}/>
            <Route path="/NewQuestionSet" element={<NewQuestionSet loggedIn={loggedIn} user={user}/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
