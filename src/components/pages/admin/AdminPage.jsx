import React from 'react';
import AdminNavbar from "../../elements/AdminNavbar/AdminNavbar";
import {Route, Routes} from "react-router-dom";
import AdminDoctorsListPage from "./AdminDoctorsListPage/AdminDoctorsListPage";
import AdminCreateDoctorPage from "./AdminCreateDoctorPage/AdminCreateDoctorPage";
import AdminEditDoctorPage from "./AdminEditDoctorPage/AdminEditDoctorPage";
import AdminLoginPage from "./AdminLoginPage/AdminLoginPage";
import AdminMedRecordsListPage from "./AdminMedRecordsList/AdminMedRecordsList";
import AdminCreateMedRecordPage from "./AdminCreateMedRecordPage/AdminCreateMedRecordPage";

const AdminPage = () => {
    return (
        <>
            {
                window.location.pathname === '/admin/doctorsList' ||
                window.location.pathname === '/admin/createDoctor' ||
                window.location.pathname === '/admin/editDoctor' ||
                window.location.pathname === '/admin/medRecordsList' ||
                window.location.pathname === '/admin/createMedRecord' ||
                window.location.pathname === '/admin/allDocs'
                    ? <AdminNavbar/> : <></>
            }

            <main className='admin-container'>
                <Routes>
                    <Route path="/admin/doctorsList" element={<AdminDoctorsListPage/>}/>
                    <Route path="/admin/createDoctor" element={<AdminCreateDoctorPage/>}/>
                    <Route path="/admin/editDoctor" element={<AdminEditDoctorPage/>}/>
                    <Route path="/admin/medRecordsList" element={<AdminMedRecordsListPage/>}/>
                    <Route path="/admin/createMedRecord" element={<AdminCreateMedRecordPage/>}/>
                    <Route path="/admin/login" element={<AdminLoginPage/>}/>
                </Routes>
            </main>
        </>
    );
};

export default AdminPage;