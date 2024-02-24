

import React, { FC, ReactNode } from 'react'


type Hint = {
  mode:'hint',
  children:ReactNode
}

type Warning = {
  mode:'warning',
  severity:'low'|'medium'|'high';
  children:ReactNode
}
type InfoboxProps = Hint | Warning;

export const InfoBox = 
(props:InfoboxProps) => {
  const{mode,children} = props;
  // if mode is Hint Return this
    if (mode==='hint') {
    return(
      <aside className='infobox infobox-hint'>
        <p>{children}</p>


      </aside>
    );
  }
  //else return this
  const {severity} = props;
  return(
    <aside className={`infobox infobox-warning warning--${severity}`}>
      <h2>Warning</h2>
        <p>{children}</p>
      </aside>
  )
    
  }
  
