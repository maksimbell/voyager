import React from "react";
import { Route, Routes } from "react-router";
import ErrorBoundary from 'Components/ErrorBoundary'
import "leaflet/dist/leaflet.css";
import Home from "Pages/Home";

const App = () => {
    return (
        <ErrorBoundary>
            <div>
                <Routes>
                    <Route exact path={'/'} element={<Home />}></Route>
                </Routes>
            </div>
        </ErrorBoundary>
    )
};

export default App;