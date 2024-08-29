import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Title from './Components/Title';
import Description from './Components/Description';
import Image from './Components/Image';
import Card from './Components/Card';
import Products from './Components/Products';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Title />
    <Description />
    <Card/>
    <Image/>

  </React.StrictMode>
);


reportWebVitals();
