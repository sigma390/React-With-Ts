import React, { ComponentPropsWithoutRef, FormEvent, useImperativeHandle, useRef , forwardRef} from 'react'

//its an wrapper Comnponent hence we Initiate Props

type FormProps = ComponentPropsWithoutRef <'form'>&{
    onSave:(value:unknown)=>void;
};

// for useImperative we need to make a Type just to export Methods

export type formMethods = {
    clear:()=>void
;}


//====================> Noob <=====================

// const  Form = (
//     {onSave,children,...otherprops}:FormProps)=> {

//     const form = useRef<HTMLFormElement>(null);

    

//     function handleSubmit(event:FormEvent<HTMLFormElement>){
//         //prevent the default behavior of that submit
//         event.preventDefault();
//         const formData = new FormData(event.currentTarget); //inbuild JS FormData()
//         console.log(formData)
//         const data = Object.fromEntries(formData) // to extract Based upon {id};
//         console.log(data)
//         onSave(data);
//         form.current?.reset();
//     }
//   return (
//     <form onSubmit={handleSubmit} {...otherprops} ref={form}>
//         {children}
//     </form>
//   )
// }















//========================> Pro <=========================



const Form = forwardRef<formMethods,FormProps>(function Form(
    {onSave,children,...otherprops}, ref) {

    const form = useRef<HTMLFormElement>(null);

    //use imperative handle apply here
    useImperativeHandle(ref,()=>{
        return {clear:()=>{
            console.log("Cleared control is here !!!")
            form.current?.reset();
        }}
    })

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
)
export default Form