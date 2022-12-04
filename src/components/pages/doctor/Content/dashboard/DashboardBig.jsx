import React, {useEffect, useState} from 'react';
import css from './DashboardStyles.module.sass'
import {
    Box,
    Button,
    FormControl,
    IconButton,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {styled, alpha} from "@mui/material/styles";
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import {NavLink} from "react-router-dom";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Api from "../../../../../api";

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: '10rem',
    width: '50%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    marginLeft: '10rem',
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));


const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    marginLeft: '10rem',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));


const DashboardBig = () => {
    const [records, setRecords] = useState([]);

    useEffect(() => {
        async function fetch() {
            try {
                const res = await Api.get('/med/getAllForms');
                setRecords(res.data);
            } catch (e) {
                console.log(e)
            }
        }

        fetch().then();
    }, [records]);

    return (
        <div>
            <div className={css.HistoriesContainer}>
                <div>
                    <p className="p-h1">История записей</p>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Поиск"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </Search>
                </div>
                <div>
                    <List>
                        {records.map((record) => (
                            <ListItem
                                key={record.id}
                                secondaryAction={
                                    <Box sx={{ml: 50}}>
                                        <IconButton edge="end" aria-label="pdf">
                                            <PictureAsPdfIcon onClick={() => window.location.href = record.pdf_url}/>
                                        </IconButton>
                                    </Box>

                                }
                            >
                                    <ListItemText
                                        sx={{mr: 14}}
                                        style={{overflowX: 'scroll', whiteSpace: 'nowrap'}}
                                        primary={`#${record.id}. ${record.form_type}. Доктор: ${record.doctor.name}. Пациент: ...`}
                                    />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </div>
            <div
                className={css.FormContainer}
            >
                <div>
                    <p className="p-h1">Создать запись</p>
                    <FormControl>
                        <Select defaultValue={'ru'}>
                            <MenuItem value={'ru'}>
                                <div>
                                    Новый пациент
                                </div>
                            </MenuItem>
                            <MenuItem value={'kz'}>
                                <div>
                                    Знакомый пациент
                                </div>
                            </MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <p className='p-h2'>Информация</p>
                    <article>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            placeholder="Имя и Фамилия пациента"
                            // id="IIN"
                            // name="IIN"
                            // value={IIN}
                            // onChange={handleIIN}
                            // autoComplete="IIN"
                            autoFocus
                        />


                        <TextField
                            required
                            fullWidth
                            type='date'
                            placeholder="Имя и Фамилия пациента"
                            // id="IIN"
                            // name="IIN"
                            // value={IIN}
                            // onChange={handleIIN}
                            // autoComplete="IIN"
                            autoFocus
                        />
                        <FormControl>
                            <Select defaultValue={'ru'}>
                                <MenuItem value={'ru'}>
                                    <div>
                                        Мужской
                                    </div>
                                </MenuItem>
                                <MenuItem value={'kz'}>
                                    <div>
                                        Женский
                                    </div>
                                </MenuItem>
                            </Select>
                        </FormControl>
                    </article>
                </div>
                <div>
                    <p className='p-h2'>Контакты</p>
                    <article>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            placeholder="Адрес проживание пациента"
                            // id="IIN"
                            // name="IIN"
                            // value={IIN}
                            // onChange={handleIIN}
                            // autoComplete="IIN"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            placeholder="Номер пациента"
                            // id="IIN"
                            // name="IIN"
                            // value={IIN}
                            // onChange={handleIIN}
                            // autoComplete="IIN"
                            autoFocus
                        />

                        <TextField
                            required
                            fullWidth
                            type="number"
                            placeholder="ИИН"
                            // id="IIN"
                            // name="IIN"
                            // value={IIN}
                            // onChange={handleIIN}
                            // autoComplete="IIN"
                            autoFocus
                        />
                    </article>
                </div>
                <div>
                    <p className='p-h2'>Мед. книжка</p>
                    <article>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            placeholder="Аллергии и противопаказание"
                            // id="IIN"
                            // name="IIN"
                            // value={IIN}
                            // onChange={handleIIN}
                            // autoComplete="IIN"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            placeholder="Хронические болезни"
                            // id="IIN"
                            // name="IIN"
                            // value={IIN}
                            // onChange={handleIIN}
                            // autoComplete="IIN"
                            autoFocus
                        />
                        <TextField
                            required
                            fullWidth
                            type="number"
                            placeholder="ID"
                            // id="IIN"
                            // name="IIN"
                            // value={IIN}
                            // onChange={handleIIN}
                            // autoComplete="IIN"
                            autoFocus
                        />
                    </article>
                </div>
                <div>
                    <p className='p-h2'>Здоровье</p>
                    <article>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            placeholder="Диагноз"
                            // id="IIN"
                            // name="IIN"
                            // value={IIN}
                            // onChange={handleIIN}
                            // autoComplete="IIN"
                            autoFocus
                        />
                        <div>
                            <FormControl>
                                <Select defaultValue={'ru'}>
                                    <MenuItem value={'ru'}>
                                        <div>
                                            Анализ
                                        </div>
                                    </MenuItem>
                                    <MenuItem value={'kz'}>
                                        <div>
                                            Анализ
                                        </div>
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <Select defaultValue={'ru'}>
                                    <MenuItem value={'ru'}>
                                        <div>
                                            Анализ
                                        </div>
                                    </MenuItem>
                                    <MenuItem value={'kz'}>
                                        <div>
                                            Анализ
                                        </div>
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <Select defaultValue={'ru'}>
                                    <MenuItem value={'ru'}>
                                        <div>
                                            Анализ
                                        </div>
                                    </MenuItem>
                                    <MenuItem value={'kz'}>
                                        <div>
                                            Анализ
                                        </div>
                                    </MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <Select defaultValue={'ru'}>
                                    <MenuItem value={'ru'}>
                                        <div>
                                            Мужской
                                        </div>
                                    </MenuItem>
                                    <MenuItem value={'kz'}>
                                        <div>
                                            Женский
                                        </div>
                                    </MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <TextField
                                required
                                fullWidth
                                type="number"
                                placeholder="Результаты анализа"
                                // id="IIN"
                                // name="IIN"
                                // value={IIN}
                                // onChange={handleIIN}
                                // autoComplete="IIN"
                                autoFocus
                            />
                            <TextField
                                required
                                fullWidth
                                placeholder="Результаты анализа"
                                // id="IIN"
                                // name="IIN"
                                // value={IIN}
                                // onChange={handleIIN}
                                // autoComplete="IIN"
                                autoFocus
                            />
                            <TextField
                                required
                                fullWidth
                                placeholder="Результаты анализа"
                                // id="IIN"
                                // name="IIN"
                                // value={IIN}
                                // onChange={handleIIN}
                                // autoComplete="IIN"
                                autoFocus
                            />
                            <TextField
                                required
                                fullWidth
                                placeholder="Результаты анализа"
                                // id="IIN"
                                // name="IIN"
                                // value={IIN}
                                // onChange={handleIIN}
                                // autoComplete="IIN"
                                autoFocus
                            />
                        </div>
                    </article>
                </div>
                <div>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        placeholder="Диета и рекомандаций"
                        // id="IIN"
                        // name="IIN"
                        // value={IIN}
                        // onChange={handleIIN}
                        // autoComplete="IIN"
                        autoFocus
                    />
                </div>
                <div>
                    <Button
                        type="submit"
                        value="Сохранить данные"
                        variant="contained"
                        fullWidth
                        endIcon={<ArrowForwardIcon/>}
                    >
                        Submit
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default DashboardBig;