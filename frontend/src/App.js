import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import PrivacyAgreement from './components/PrivacyAgreement';

function App() {
    const [agreed, setAgreed] = useState(false);
  return (
      <Router>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/signup" element={<Signup agreed={agreed} />} />
              <Route path="/PrivacyAgreement" element={<PrivacyAgreement setAgreed={setAgreed} />} />
          </Routes>
      </Router>
  );
}

export default App;
