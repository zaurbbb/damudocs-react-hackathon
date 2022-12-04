import React, {useState} from 'react';
import css from './SideBar.module.sass';
import logo from './images/logo.svg';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png';
import icon5 from './images/icon5.png';
import icon6 from './images/icon6.png';
import icon7 from './images/icon7.png';
import {NavLink} from "react-router-dom";
import {Button, Fade, Paper, Popper, Typography} from "@mui/material";

const SideBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [open, setOpen] = useState(false);
    const [placement, setPlacement] = useState();

    const handleClick = (newPlacement) => (event) => {
        setAnchorEl(event.currentTarget);
        setOpen((prev) => placement !== newPlacement || !prev);
        setPlacement(newPlacement);
    };
    return (
        <aside className={css.Container}>
            <div>
                <div>
                    DU
                    <br/>
                    DC
                </div>
            </div>
            <div>
                <NavLink
                    to="/doctor/dashboard"
                    className={navData => navData.isActive ? css.activeLink : css.inActiveLink}
                >
                    <img src={icon1} alt="icon"/>
                </NavLink>
                <NavLink
                    to="/doctor/login"
                    className={navData => navData.isActive ? css.activeLink : css.inActiveLink}
                >
                    <img src={icon2} alt="icon"/>
                </NavLink>
                <Button onClick={handleClick('right')}
                >
                    <img src={icon3} alt="icon"/>
                </Button>
                <Button onClick={handleClick('right')}>
                    <img src={icon4} alt="icon"/>
                </Button>
                <Button onClick={handleClick('right')}>
                    <img src={icon5} alt="icon"/>
                </Button>
            </div>
            <div>
                <Button onClick={handleClick('right')}>
                    <img src={icon6} alt="icon"/>
                </Button>
                <Button onClick={handleClick('right')}>
                    <img src={icon7} alt="icon"/>
                </Button>
            </div>
            <Popper open={open} anchorEl={anchorEl} placement={placement} transition>
                {({TransitionProps}) => (
                    <Fade {...TransitionProps} timeout={350}>
                        <Paper>
                            <Typography sx={{p: 3}}>Страница недоступна.</Typography>
                        </Paper>
                    </Fade>
                )}
            </Popper>
        </aside>
    );
};

export default SideBar;