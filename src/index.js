import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createRoot } from "react-dom/client";
import {
    BrowserRouter
} from 'react-router-dom';
import "./App.scss";

const el = document.getElementById("app");

const root = createRoot(el)

root.render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
)