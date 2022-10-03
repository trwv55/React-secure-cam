import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import styles from "./styles.scss";
import "./styles.scss";
import Header from "./components/Header";
import Main from "./pages/main";

const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className='content'>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
