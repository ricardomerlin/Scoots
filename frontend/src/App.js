import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';

function App() {
  return (
    <Router>
      <div className="NavBar">
        <nav>
            <Link to='/HomePage'>Home</Link>
            <Link to='/AboutPage'>About</Link>
        </nav>
        <Routes>
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;