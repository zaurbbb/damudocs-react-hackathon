import React from 'react';
import AdminNavbar from "../../elements/AdminNavbar/AdminNavbar";
import DoctorNavbar from "../../elements/DoctorNavbar/DoctorNavbar";
import {Route, Routes} from "react-router-dom";
import StartPage from "../StartPage/AdminHomePage";
import AdminDoctorsListPage from "./AdminDoctorsListPage/AdminDoctorsListPage";
import AdminCreateDoctorPage from "./AdminCreateDoctorPage/AdminCreateDoctorPage";
import AdminEditDoctorPage from "./AdminEditDoctorPage/AdminEditDoctorPage";
import AdminLoginPage from "./AdminLoginPage/AdminLoginPage";

const AdminPage = () => {
    return (
        <>
            {window.location.pathname === '/' ?? <> </> }
            {
                window.location.pathname === '/admin/doctorsList' ||
                window.location.pathname === '/admin/createDoctor' ||
                window.location.pathname === '/admin/editDoctor' ||
                window.location.pathname === '/admin/allDocs'
                    ? <AdminNavbar/> : <></>}
            {window.location.pathname === '/doctor' && <DoctorNavbar/> }


            {/*admin*/}
            <Routes>
                {/*start page*/}
                <Route path="/" element={<StartPage/>}/>

                {/*admin page*/}
                <Route path="/admin/doctorsList" element={<AdminDoctorsListPage/>}/>
                <Route path="/admin/createDoctor" element={<AdminCreateDoctorPage/>}/>
                <Route path="/admin/editDoctor" element={<AdminEditDoctorPage/>}/>
                <Route path="/admin/login" element={<AdminLoginPage/>}/>

            </Routes>
        </>
    );
};

export default AdminPage;