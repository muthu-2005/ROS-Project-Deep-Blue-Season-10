import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Signin from './components/SignIn';
import Signup from './components/SignUp';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
