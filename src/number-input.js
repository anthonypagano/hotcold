import React from 'react';

export default function NumberInput(props) {
    return (
        <input onChange={e => props.onChange(e.target.value)} value={props.value} />
    );
}
