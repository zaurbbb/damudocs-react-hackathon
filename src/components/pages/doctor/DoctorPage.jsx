import React from 'react';
import SideBar from "./SideBar/SideBar";
import {Route, Routes} from "react-router-dom";
import css from './DoctorPage.module.sass'

const DoctorPage = () => {
    return (
        <div className={css.Container}>
            <SideBar/>

            <main className='doctor-container'>
                <Routes>
                    <Route path="/doctor/dashboard" element={<div>dashboard</div>}/>
                </Routes>
            </main>
        </div>
    );
};

export default DoctorPage;