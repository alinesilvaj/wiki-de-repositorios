import React from 'react'
import { InputContainer } from './styles';

function Input({value, onChange}) {
    return (
        <InputContainer value={value} onChange={onChange} placeholder='username/repository' >
          
        </InputContainer>
    )
}

export default Input