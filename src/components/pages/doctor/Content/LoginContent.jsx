import {Route, Routes} from "react-router-dom";
import React from "react";
import css from './LoginContent.module.sass'
import LoginUpper from "./login/LoginUpper";
import LoginLower from "./login/LoginLower";
import LoginBig from "./login/LoginBig";


const LoginContent = () => {
    return (
        <main className={css.Container}>
            <div className={css.GreenBlocks}>
                <div className={css.UpperGreenBlock}>
                    <Routes>
                        <Route path="/doctor/login" element={<LoginUpper/>}/>
                    </Routes>
                </div>
                <div className={css.LowerGreenBlock}>
                    <Routes>
                        <Route path="/doctor/login" element={<LoginLower/>}/>
                    </Routes>
                </div>
            </div>
            <div className={css.BigBlock}>
                <Routes>
                    <Route path="/doctor/login" element={<LoginBig/>}/>
                </Routes>
            </div>

        </main>
    );
};

export default LoginContent;
