import React, { ComponentPropsWithoutRef, FormEvent, useRef } from 'react'
//its an wrapper Comnponent hence we Initiate Props

type FormProps = ComponentPropsWithoutRef <'form'>&{
    onSave:(value:unknown)=>void;
};

// for useImperative we need to make a Type just to export Methods
const Form = ({onSave,children,...otherprops}:FormProps) => {

    const form = useRef<HTMLFormElement>(null);

    function handleSubmit(event:FormEvent<HTMLFormElement>){
        //prevent the default behavior of that submit
        event.preventDefault();
        const formData = new FormData(event.currentTarget); //inbuild JS FormData()
        console.log(formData)
        const data = Object.fromEntries(formData) // to extract Based upon {id};
        console.log(data)
        onSave(data);
        form.current?.reset();
    }
  return (
    <form onSubmit={handleSubmit} {...otherprops} ref={form}>
        {children}
    </form>
  )
}

export default Form