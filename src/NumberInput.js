import React from 'react';

const NumberInput = (props) => {
    return (
        <div className="nes-field is-inline">
            <label>{props.label}</label><input type="number" placeholder="" className="nes-input" value={props.value} onChange={props.onChange} />
            </div>
    );
}

export default NumberInput;