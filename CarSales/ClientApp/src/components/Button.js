import React from 'react';

const Button = (props) => {
    return (
        <button
            className={
                props.type === "primary" ? "btn btn-info" : "btn btn-light"
            }
            onClick={props.action}
        >
            {props.title}
        </button>
    );
};

export default Button;