import {useState} from "react";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import {Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from "@mui/material";

const AdminCreateDoctorPage = () => {
    const [doctorFullName, setDoctorFullName] = useState("");
    const [doctorIIN, setDoctorIIN] = useState("");
    const [doctorID, setDoctorID] = useState("");
    const [password, setPassword] = useState("");

    // States for checking the errors
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    // Handling the name change
    const handleFullName = (e) => {
        setDoctorFullName(e.target.value);
        setSubmitted(false);
    };

    // Handling the IIN change
    const handleIIN = (e) => {
        setDoctorIIN(e.target.value);
        setSubmitted(false);
    };

    // Handling the ID change
    const handleID = (e) => {
        setDoctorID(e.target.value);
        setSubmitted(false);
    };

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setSubmitted(false);
    };

    // Handling the form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        if (doctorFullName === '' || doctorIIN === '' || doctorID === '' || password === '') {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
    };

    // Showing success message
    const successMessage = () => {
        return (
            <div
                className="success"
                style={{
                    display: submitted ? '' : 'none',
                    fontSize: '0.5rem',
                }}>
                <h1>Doctor {doctorFullName} successfully registered!!</h1>
            </div>
        );
    };

    // Showing error message if error is true
    const errorMessage = () => {
        return (
            <div
                className="error"
                style={{
                    display: error ? '' : 'none',
                    fontSize: '0.5rem',
                }}>
                <h1>Please enter all the fields</h1>
            </div>
        );
    };

    //choose profession
    const [role, setRole] = useState('');

    const handleChange = (event) => {
        setRole(event.target.value);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <Grid
                    container
                    spacing={3}
                    sx={{
                        my: 4,
                        padding: '0 12rem',

                    }}
                >
                    <Grid item xs={6}>
                        <TextField
                            style={{width: '100%'}}
                            label="Введите ФИО"
                            variant="outlined"
                            type="text"
                            name="doctorFullName"
                            value={doctorFullName}
                            onChange={handleFullName}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            style={{width: '100%'}}
                            label="Введите ИИН"
                            variant="outlined"
                            type="text"
                            name="doctorIIN"
                            value={doctorIIN}
                            onChange={handleIIN}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            style={{width: '100%'}}
                            label="Введите ID"
                            variant="outlined"
                            type="text"
                            name="doctorID"
                            value={doctorID}
                            onChange={handleID}
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            style={{width: '100%'}}
                            label="Введите пароль"
                            variant="outlined"
                            type="password"
                            name="doctorPassword"
                            value={password}
                            onChange={handlePassword}
                        />
                    </Grid>
                    <Grid item xs={12} >
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Определите роль</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={role}
                                label="Определите роль"
                                onChange={handleChange}
                                sx={{textAlign: 'left'}}
                            >
                                <MenuItem value={10}>Терапевт</MenuItem>
                                <MenuItem value={20}>Окулист</MenuItem>
                                <MenuItem value={30}>Кардиолог</MenuItem>
                                <MenuItem value={40}>Онколог</MenuItem>
                                <MenuItem value={50}>Уролог</MenuItem>
                                <MenuItem value={60}>Педиатр</MenuItem>
                                <MenuItem value={70}>Психиатр</MenuItem>
                            </Select>
                        </FormControl>
                    </Grid>
                </Grid>
                <div className="messages">
                    {errorMessage()}
                    {successMessage()}
                </div>
                <Button
                    type="submit"
                    value="Submit"
                    variant="contained"
                    endIcon={<ArrowForwardIcon/>}
                    onClick={handleSubmit}
                >
                    Submit
                </Button>
            </form>
        </>
    );
};

export default AdminCreateDoctorPage;