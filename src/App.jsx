import React from "react";
import { Route, Routes } from "react-router";
import ErrorBoundary from 'Components/ErrorBoundary'
import Map from 'Components/Map'

const App = () => {
    return (
        <ErrorBoundary>
            <div>
                <Routes>
                    <Route exact path={'/'} element={<>Hello</>}></Route>
                </Routes>
            </div>
        </ErrorBoundary>
    )
};

export default App;