import React from 'react'
import { InputContainer } from './styles'



const SearchField = ({placeholder, onChange}) => {
  return (
    <InputContainer>
        <input placeholder={placeholder} onChange={onChange}/>
    </InputContainer>
  )
}

export default SearchField