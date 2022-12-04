import React from 'react';
import SideBar from "./SideBar/SideBar";
import css from './DoctorPage.module.sass'
import Content from "./Content/Content";

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
                    <></>
            }
        </div>
    );
};

export default DoctorPage;