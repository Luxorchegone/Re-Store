import React from 'react';
import icon from './error-indicator.png';
import './error-indicator.css';

const ErrorIndicator = () => { //Индикатор ошибки
    return (
        <div className="error-indicator">
            <img src={icon} 
                 alt="error-indicator-icon"
                 className="error-indicator__icon"/>
            <span className="error-indicator__label">Something went wrong!</span>
        </div>
    );
} 
export default ErrorIndicator;