
import React, { ComponentPropsWithoutRef } from 'react'


//===================> Easy Method <========================
// type ButtonProps = 
// {
//     el:'button'
// } & ComponentPropsWithoutRef<'button'>

// type AnchorProps = 
// {
//     el:'anchor'
// } & ComponentPropsWithoutRef<'a'>


// type ButtProps = ButtonProps | AnchorProps;



// export const Button = (props:ButtProps) => {
//     if (props.el==='button') {
//         return<button className='button' {...props}>
            
//             </button>
        
//         }
//     return <a className='button' {...props}></a>
// }



//========================> Type Predicate METHOD <=========================



type ButtonProps = ComponentPropsWithoutRef<'button'> &{
    href?:never;
};
type AnchorProps = ComponentPropsWithoutRef<'a'> &{
    href:string
};

type ButtProps = ButtonProps | AnchorProps;


// type predicate function giving a specific return 
function isAnchor(props:ButtProps): props is AnchorProps{
    return 'href' in props;
}



export const Button = (props:ButtProps) => {

    if (isAnchor(props)) {
        return (
            <a className='button' {...props}></a>
          )
        
    }
    return<button className='button' {...props}></button>
  
}


