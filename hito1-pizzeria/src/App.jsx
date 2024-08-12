
import React from 'react';
import Navbar from './components/NavbarComponent';
import Home from './components/Home';
import Footer from './components/Footer';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      <RegisterPage />
      {/* <LoginPage /> */}
      <Footer />
    </div>
  );
};

export default App;
