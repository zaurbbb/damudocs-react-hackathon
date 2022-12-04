import {Route, Routes} from "react-router-dom";
import React from "react";
import css from './Content.module.sass'
import DashboardUpper from "./dashboard/DashboardUpper";
import DashboardLower from "./dashboard/DashboardLower";
import DashboardBig from "./dashboard/DashboardBig";
import LoginBig from "./login/LoginBig";
import LoginLower from "./login/LoginLower";
import LoginUpper from "./login/LoginUpper";

const Content = () => {
    return (
        <main className={css.Container}>
            <div className={css.GreenBlocks}>
                <div className={css.UpperGreenBlock}>
                    <Routes>
                        <Route path="/doctor/dashboard" element={<DashboardUpper/>}/>
                        <Route path="/doctor/login" element={<LoginUpper/>}/>
                    </Routes>
                </div>
                <div className={css.LowerGreenBlock}>
                    <Routes>
                        <Route path="/doctor/dashboard" element={<DashboardLower/>}/>
                        <Route path="/doctor/login" element={<LoginLower/>}/>
                    </Routes>
                </div>
            </div>
            <div className={css.BigBlock}>
                <Routes>
                    <Route path="/doctor/dashboard" element={<DashboardBig/>}/>
                    <Route path="/doctor/login" element={<LoginBig/>}/>
                </Routes>
            </div>

        </main>
    );
};

export default Content;
