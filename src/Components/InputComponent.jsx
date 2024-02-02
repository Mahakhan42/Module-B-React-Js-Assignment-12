import React from 'react'
import { TextField } from '@mui/material'

export const InputComponent = (props) => {
  const {placeholder,type,required,id,onChange} =props
  return (
      <TextField
      id={id}
      placeholder={placeholder}
      required={required}
       type={type} 
       onChange={onChange}/>
  )
}


