import React from 'react'
import ReactDOM from 'react-dom/client'

import { FistApp} from './FistApp';
//import { HelloWorld } from './HelloWorld';
//import { CounterApp } from './CounterApp';

import './styles.css';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <CounterApp value = {10} /> */}
    {/* <HelloWorld /> */}
    <FistApp title="Hola, soy Vegeta" />
  </React.StrictMode>
)