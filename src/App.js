import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {createTheme, ThemeProvider} from "@mui/material";
import './app.css'
import StartPage from "./components/pages/StartPage/StartPage";
import AdminPage from "./components/pages/admin/AdminPage";
import DoctorPage from "./components/pages/doctor/DoctorPage";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<StartPage/>}/>
            </Routes>


            <AdminPage/>
            <DoctorPage/>

        </BrowserRouter>
    );
}

export default App;
