import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import store from "./redux/store";
import {Provider} from "react-redux";
import {createTheme, ThemeProvider} from "@mui/material";

const THEME = createTheme({
    palette: {
        primary: {
            main: "#ABE0BA"
        },
        secondary: {
            main: "#FC4D4D"
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides:

                `
                @font-face{
                    font-family: 'CascadiaCodePLRegular'
                    src: url('./fonts/CascadiaCodePL/CascadiaCodePL-Regular.otf') format('truetype')
                 }
                 
                 
                 @font-face{
                    font-family: 'CascadiaCodePLLight'
                    src: url('fonts/CascadiaCodePL/CascadiaCodePL-Light.otf') format('truetype')4
                 }
              `,
        },
        MuiOutlinedInput: {
            variants: [
                {
                    props: {color: 'primary'},
                    style: {
                        display: 'flex',
                        flexDirection: 'row',
                        gap: '0.6rem',
                        borderRadius: '5px',
                        padding: '0 10px',
                        fontFamily: 'CascadiaCodePLLight, sans-serif',
                        backgroundColor: `white`,
                        fontWeight: 700,
                        outline: 'none',
                        border: 'none',
                        color: '#484848',
                        "div": {
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                            gap: '0.2rem',
                            marginLeft: '-0.1rem',
                            outline: 'none',
                            border: 'none',
                        },
                        "&:hover": {
                            border: 'none',
                            outline: 'none',
                        }

                    },
                },

            ],
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    display: 'flex',
                    flexDirection: 'row',
                    gap: '0.5rem',
                    height: '50px',
                    backgroundColor: `white`,
                    fontSize: '1rem',
                    color: '#484848',
                    '&:hover': {
                        border: 'none',
                    },
                    "div": {
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                        gap: '0.2rem',
                        marginLeft: '-0.2rem',
                    },
                },
            },
        },
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: `white`,
                    borderRadius: '5px',
                    color: 'white',
                    "div": {
                        alignItems: 'center',
                    },
                },
            },
        },
        MuiFormControl: {
            styleOverrides: {
                root: {
                    margin: 0,
                    color: '#484848',
                },
            }
        },
        MuiButtonBase: {
            styleOverrides: {
                root: {
                    color: 'white',
                    fontSize: '1rem'
                },
            }
        }
    },
    typography: {
        "fontFamily": `CascadiaCodePLRegular, sans-serif`,
        "fontSize": '0.5rem'
    },

});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <ThemeProvider theme={THEME}>
        <App/>
        </ThemeProvider>
    </Provider>
);

