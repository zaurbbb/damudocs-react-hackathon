import {Button, ButtonGroup} from "@mui/material";

const DoctorNavbar = () => {
    return (
        <nav>
            <h2>Добро пожаловать, ДОКТОР!</h2>
            <ButtonGroup
                variant="contained"
                aria-label="outlined primary button group"
            >
                <Button href="/admin/doctors">doctor pon</Button>
            </ButtonGroup>
        </nav>
    );
};

export default DoctorNavbar;