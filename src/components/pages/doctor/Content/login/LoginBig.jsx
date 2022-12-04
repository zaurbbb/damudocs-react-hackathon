import React, {useState, useEffect} from 'react';
import {Avatar, Box, Button, Checkbox, FormControlLabel, Grid, Paper, TextField, Typography} from "@mui/material";
import {Copyright} from "@mui/icons-material";
import {useAppDispatch, useAppSelector} from "../../../../../redux/hooks";
import {login} from "../../../../../redux/slices/auth";
import css from './LoginStyles.module.css'

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
        <div className={css.Container}>
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
                    sx={{my: 3}}
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
            </Box>
        </div>
    );
};

export default LoginBig;