import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styles from "./styles.scss";
import "./styles.scss";
import Header from "./components/Header";
import Main from "./pages/Main";
import Customer from "./pages/Customer";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='b2c' element={<Customer />} />
        </Routes>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default App;
