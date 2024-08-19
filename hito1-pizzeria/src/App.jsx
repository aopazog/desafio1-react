
import React from 'react';
import Navbar from './components/NavbarComponent';
import Home from './components/Home';
import Footer from './components/Footer';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './components/Cart';

const App = () => {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      {/* <LoginPage /> */}
      {/* <RegisterPage /> */}
      <Cart />
      <Footer />
    </div>
  );
};
export default App;