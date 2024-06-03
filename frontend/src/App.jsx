import React from 'react';
import Home from './pages/Home/Home';
import SignUp from './pages/SignUp/SignUp';
import Login from './pages/Login/Login';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const routes = (
  <Router>
    <Routes>
      <Route path="/dashboard" exact element={<Home />} />
      <Route path="/signup" exact element={<SignUp />} />
      <Route path="/login" exact element={<Login />} />

    </Routes>
  </Router>
);
const App =() => {
  return (
    <div>
        {routes}
    </div>
  );
}

export default App;
