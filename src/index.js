import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router , Routes , Route, BrowserRouter} from "react-router-dom";

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Logements from './pages/Logements';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>

      <Routes>

        <Route path='/' element={<Home/>} />
        <Route path='Home' element={<Home/>} />
        <Route path='About' element={<About/>} />
        <Route path='Logements/:id' element={<Logements/>} />
        <Route path='*' element={<Error/>} />
       
      </Routes>
      
      <Footer/>
    </Router>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
