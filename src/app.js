import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styles from "./styles.scss";
import "./styles.scss";
import Header from "./components/Header";
import Main from "./pages/main";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </div>
      <div className='footer'>
        <Footer />
      </div>
    </div>
  );
};

export default App;
