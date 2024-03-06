import React, { ComponentPropsWithoutRef } from 'react'



//its an wrapper Comnponent hence we Initiate Props
type FormProps = ComponentPropsWithoutRef <'form'>;


const Form = ({...props}:FormProps) => {
  return (
    <form {...props}>
        {props.children}
    </form>
  )
}

export default Form