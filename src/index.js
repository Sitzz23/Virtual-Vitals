import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.css'
import App from './App'
import { BrowserRouter } from "react-router-dom";
// import About from "./Pages/about";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
