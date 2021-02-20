import React from 'react'

const Input = (props) => {
    return (
        <input type='text' value={props.state.inputValue}
            onChange={props.changeValue} />
    )
}

export default Input