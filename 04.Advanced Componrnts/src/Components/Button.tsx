
import React, { ComponentPropsWithoutRef } from 'react'



type ButtonProps = 
{
    el:'button'
} & ComponentPropsWithoutRef<'button'>

type AnchorProps = 
{
    el:'anchor'
} & ComponentPropsWithoutRef<'a'>



type ButtProps = ButtonProps | AnchorProps;



export const Button = (props:ButtProps) => {
    if (props.el==='button') {
        return<button className='button' {...props}>
            
            </button>
        
        }
    return <a className='button' {...props}></a>
}
