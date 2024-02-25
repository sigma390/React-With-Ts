import React from 'react'


type InputProps = {
    label:string,
    id:string

}



export const Input = ({label,id}:InputProps) => {
  return (
    <p>
        <label htmlFor={id}>{label}</label>
        <input type="text" id={id} />




    </p>
  )
}
