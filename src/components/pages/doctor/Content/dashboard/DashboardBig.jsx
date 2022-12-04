import React from 'react';
import css from './DashboardStyles.module.sass'
import {Button, FormControl, MenuItem, Select, TextField} from "@mui/material";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const DashboardBig = () => {
    return (
        <div>
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