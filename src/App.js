import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Button, ButtonGroup, createTheme, ThemeProvider} from "@mui/material";
import './app.css'
import AdminLoginPage from "./components/pages/admin/AdminLoginPage/AdminLoginPage";
import StartPage from "./components/pages/StartPage/AdminHomePage";
import AdminNavbar from "./components/elements/AdminNavbar/AdminNavbar";
import DoctorNavbar from "./components/elements/DoctorNavbar/DoctorNavbar";
import AdminDoctorsListPage from "./components/pages/admin/AdminDoctorsListPage/AdminDoctorsListPage";
import AdminCreateDoctorPage from "./components/pages/admin/AdminCreateDoctorPage/AdminCreateDoctorPage";
import AdminEditDoctorPage from "./components/pages/admin/AdminEditDoctorPage/AdminEditDoctorPage";
import AdminPage from "./components/pages/admin/AdminPage";

const theme = createTheme({
    palette: {
        secondary: {
            main: '#E33E7F'
        }
    }
});

function App() {
    return (
        <BrowserRouter>
            <AdminPage/>
                {/*doctor page*/}
                {/*<Route path="/doctor/" element={<HomePage/>}/>*/}
                {/*<Route path="/doctor/login" element={<AdminLoginPage/>}/>*/}

        </BrowserRouter>
    );
}

export default App;
