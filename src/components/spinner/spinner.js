import React from 'react';
import './spinner.css';

const Spinner = () => { //Индикатор загрузки
    return (
        <div className="spinner-wrapper">
            <div className="lds-hourglass">
            </div>
            <h3>loading...</h3>
        </div>
    );
}

export default Spinner;