import React from 'react';
import Graph from './images/Graph.svg'
const DashboardUpper = () => {
    return (
        <>
            <p className='p-h1'>Добрый день!</p>
            <p className='p-h2'>Доктор - ${`{имя доктора}`} !</p>
            <p className='p-h5-right'>В лечении - 42</p>
            <img src={Graph} alt=""/>
        </>
    );
};

export default DashboardUpper;