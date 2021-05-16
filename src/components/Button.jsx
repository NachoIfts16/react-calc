import React from 'react';
import './Button.css';

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
}

//SI NO ES UN NUMERO VA EN NARANJA
export const Button = props => (
    <div className={`button-wrapper ${
        isOperator(props.children) ? null : "operator"
    }`}
    onClick={() => props.handleClick(props.children)}
    >
        {props.children}
    </div>
)