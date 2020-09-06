import React from 'react';

const Select = (props) => {
    return (
        <div className="form-group">
            <label htmlFor={props.name} className="control-label">{props.title}</label>
            <select className="form-control" id={props.name} name={props.name} onChange={props.handleChange}>
                <option value="">{props.placeholder}</option>
                {props.options.map(option => {
                    return (
                        <option key={option} value={option} label={option}>{option}
                        </option>
                    );
                })}
            </select>
        </div>
        )
}

export default Select;