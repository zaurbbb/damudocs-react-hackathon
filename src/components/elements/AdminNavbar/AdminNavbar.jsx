import {Box, Button, ButtonGroup} from "@mui/material";

const AdminNavbar = () => {
    return (
        <nav>
            <h2>Добро пожаловать, админ!</h2>
            <Box
                sx={{display: 'flex', gap: '1rem', justifyContent: 'center'}}
            >
                <Button
                    href="/admin/doctorsList"
                    variant="contained"
                >
                    Список Врачей
                </Button>
                <Button
                    color="success"
                    href="/admin/createDoctor"
                    variant="contained"
                >
                    Добавить Доктора
                </Button>
                <Button
                    href="/admin/medRecordsList"
                    variant="contained"
                >
                    Список Мед. Записей
                </Button>
                <Button
                    color="success"
                    href="/admin/createMedRecord"
                    variant="contained"
                >
                    Создать Мед. Форму
                </Button>
                <Button
                    color="error"
                    href="/"
                    variant="contained"
                >
                    Выйти из учетной записи
                </Button>
            </Box>
        </nav>

    );
};

export default AdminNavbar;