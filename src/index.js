import React from 'react';
import ReactDOM from 'react-dom/client';
import TitleBar from './TitleBar';
import RandomFactHolder from './RandomFactHolder';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <TitleBar />
    <RandomFactHolder />
  </>
);
