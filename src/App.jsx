import React from "react";
import { Route, Routes } from "react-router";
import ErrorBoundary from 'Components/ErrorBoundary'
import "leaflet/dist/leaflet.css";
import Home from "Pages/Home";

const App = () => {
    return (
        <ErrorBoundary>
            <Routes>
                <Route exact path={'/'} element={<Home />}></Route>
            </Routes>
        </ErrorBoundary>
    )
};

export default App;