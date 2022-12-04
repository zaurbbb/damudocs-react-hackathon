import {Route, Routes} from "react-router-dom";
import React from "react";
import css from './Content.module.sass'
import DashboardUpper from "./dashboard/DashboardUpper";
import DashboardLower from "./dashboard/DashboardLower";
import DashboardBig from "./dashboard/DashboardBig";

const Content = () => {
    return (
        <main className={css.Container}>
            <div className={css.GreenBlocks}>
                <div className={css.UpperGreenBlock}>
                    <Routes>
                        <Route path="/doctor/dashboard" element={<DashboardUpper/>}/>
                    </Routes>
                </div>
                <div className={css.LowerGreenBlock}>
                    <Routes>
                        <Route path="/doctor/dashboard" element={<DashboardLower/>}/>
                    </Routes>
                </div>
            </div>
            <div className={css.BigBlock}>
                <Routes>
                    <Route path="/doctor/dashboard" element={<DashboardBig/>}/>
                </Routes>
            </div>

        </main>
    );
};

export default Content;
