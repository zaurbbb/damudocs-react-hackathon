import React from 'react';
import SideBar from "./SideBar/SideBar";
import css from './DoctorPage.module.sass'
import Content from "./Content/Content";
import LoginContent from "./Content/LoginContent";

const DoctorPage = () => {
    return (
        <div className={css.Container}>
            {
                window.location.pathname === '/doctor/dashboard'
                    ?
                    <>
                        <SideBar/>
                        <Content/>
                    </>
                    :
                    window.location.pathname === '/doctor/login'
                        ?
                        <>
                            <SideBar/>
                            <LoginContent/>
                        </>
                        :
                        <></>
            }
        </div>
    );
};

export default DoctorPage;