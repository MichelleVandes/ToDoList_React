import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Footer from './components/Footer';
import Title from "./components/Title";
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <Title/>
  <App/>
  <Footer/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
