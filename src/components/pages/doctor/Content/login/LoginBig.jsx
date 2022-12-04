import React, {useState, useEffect} from 'react';
import {Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography} from "@mui/material";
import {Copyright} from "@mui/icons-material";
import {useAppDispatch, useAppSelector} from "../../../../../redux/hooks";
import {login} from "../../../../../redux/slices/auth";


const LoginBig = () => {
    const [password, setPassword] = useState(null);
    const [IIN, setIIN] = useState(null);
    const [error, setError] = useState('');

    const dispatch = useAppDispatch();
    const {isSuccess, isError, message} = useAppSelector(
        (state) => state.auth
    );

    // Handling the password change
    const handlePassword = (e) => {
        setPassword(e.target.value);
        // setSubmitted(false);
    };

    // Handling the IIN change
    const handleIIN = (e) => {
        setIIN(e.target.value);
        // setSubmitted(false);
    };

    useEffect(() => {
        if (isSuccess) {
            window.location.href = '/doctor/dashboard';
        }
        if (isError) {
            setError(message);
        }
    }, [isSuccess, isError]);

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(login({IIN, password}));
    };

    return (
        <div>
            <div>
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                my: 8,
                                mx: 4,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}
                        >
                            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Авторизация
                            </Typography>
                            <p style={{color: 'red'}}> {error ? message : null} </p>
                            <Box component="form" noValidate sx={{mt: 1}}>
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    id="IIN"
                                    label="ИИН"
                                    name="IIN"
                                    value={IIN}
                                    onChange={handleIIN}
                                    autoComplete="IIN"
                                    autoFocus
                                />
                                <TextField
                                    margin="normal"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Пароль"
                                    type="password"
                                    value={password}
                                    onChange={handlePassword}
                                    id="password"
                                    autoComplete="current-password"
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary"/>}
                                    label="Запомнить меня"
                                />
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    onClick={handleSubmit}
                                    sx={{mt: 3, mb: 2}}
                                >
                                    Войти
                                </Button>
                                <Copyright sx={{mt: 5}}/>
                            </Box>
                        </Box>
                    </Grid>
            </div>
        </div>
    );
};

export default LoginBig;