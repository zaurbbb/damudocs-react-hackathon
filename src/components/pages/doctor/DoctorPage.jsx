import React from 'react';
import SideBar from "./SideBar/SideBar";
import {Route, Routes} from "react-router-dom";
import css from './DoctorPage.module.sass'
import AdminNavbar from "../../elements/AdminNavbar/AdminNavbar";

const DoctorPage = () => {
    return (
        <div className={css.Container}>
            {
                window.location.pathname === '/doctor/dashboard'
                    ? <SideBar/> : <></>
            }

            <main className='doctor-container'>
                <Routes>
                    <Route path="/doctor/dashboard" element={<div>dashdash</div>}/>
                </Routes>
            </main>
        </div>
    );
};

export default DoctorPage;