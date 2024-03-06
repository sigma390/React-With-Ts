import React, { ComponentPropsWithoutRef, forwardRef } from 'react'



// 1.Normal custom Component

// type InputProps = {
//     label:string,
//     id:string

// } &ComponentPropsWithoutRef<'input'>


//2. use of Forward Ref Thing!!!







// export const Input = ({label,id,...props}:InputProps) => {
//   return (
//     <p>
//         <label htmlFor={id}>{label}</label>
//         <input type="text" id={id} {...props} />




//     </p>
//   )
// }

type InputProps = {
  label:string,
  id:string

} &ComponentPropsWithoutRef<'input'>


const Input = forwardRef<HTMLInputElement, InputProps>(function Input({label,id,...props}, ref){
  return (
    <p>
        <label htmlFor={id}>{label}</label>
        <input  id={id} {...props } ref={ref} />

    </p>
  )
})

export default Input;