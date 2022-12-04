import React from 'react';
import CalendarIcon from './images/CalendarIcon.svg';
import css from './LoginStyles.module.sass';

const LoginLower = () => {
    return (
        <>
            <p className="p-h1">Прием пациентов</p>
            <p className={css.numbersGroup}>
                <div>1</div>
                <div>2</div>
                <div>3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div><img src={CalendarIcon} alt=""/></div>
            </p>
            <div className={css.CardsCollection}>
                <div className={css.Card}>
                    <div>
                        <span>ВТ</span>
                        <span>5</span>
                    </div>
                    <div>
                        <span>оффлайн</span>
                        <span>09:00 - 11:00</span>
                        <span>Имя пациента</span>
                    </div>
                </div>
                <div className={css.Card}>
                    <div>
                        <span>ВТ</span>
                        <span>5</span>
                    </div>
                    <div>
                        <span>оффлайн</span>
                        <span>09:00 - 11:00</span>
                        <span>Имя пациента</span>
                    </div>
                </div>
                <div className={css.Card}>
                    <div>
                        <span>ВТ</span>
                        <span>5</span>
                    </div>
                    <div>
                        <span>оффлайн</span>
                        <span>09:00 - 11:00</span>
                        <span>Имя пациента</span>
                    </div>
                </div>
                <div className={css.Card}>
                    <div>
                        <span>ВТ</span>
                        <span>5</span>
                    </div>
                    <div>
                        <span>оффлайн</span>
                        <span>09:00 - 11:00</span>
                        <span>Имя пациента</span>
                    </div>
                </div>
                <div className={css.Card}>
                    <div>
                        <span>ВТ</span>
                        <span>5</span>
                    </div>
                    <div>
                        <span>оффлайн</span>
                        <span>09:00 - 11:00</span>
                        <span>Имя пациента</span>
                    </div>
                </div>
                <div className={css.Card}>
                    <div>
                        <span>ВТ</span>
                        <span>5</span>
                    </div>
                    <div>
                        <span>оффлайн</span>
                        <span>09:00 - 11:00</span>
                        <span>Имя пациента</span>
                    </div>
                </div>
                <div className={css.Card}>
                    <div>
                        <span>ВТ</span>
                        <span>5</span>
                    </div>
                    <div>
                        <span>оффлайн</span>
                        <span>09:00 - 11:00</span>
                        <span>Имя пациента</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LoginLower;