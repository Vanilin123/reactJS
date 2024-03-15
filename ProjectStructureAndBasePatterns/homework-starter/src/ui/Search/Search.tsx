import { useState } from 'react';
import './Search.css'

type TProps = {
    onChangeCallback: (e:React.ChangeEvent<HTMLInputElement>) => void;
}

export const  Search = ({ onChangeCallback}:TProps) => {
  const [value,setValue] =useState()

  const handleChange = ( e:React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    setValue(inputValue)
    onChangeCallback && onChangeCallback(inputValue)
  }

  return (
    <input
    className="search"
      type="text"
      value={value}
      onChange={handleChange}
      placeholder='Найти ресторан'
    />
  )
}