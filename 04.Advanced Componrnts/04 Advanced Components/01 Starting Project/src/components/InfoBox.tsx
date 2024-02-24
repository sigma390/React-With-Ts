

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

export const InfoBox:FC<InfoboxProps> = ({mode,children}) => {
  if (mode==='hint') {
    return (
      <aside className='infobox infobox-hint'>
        <p>{children}</p>


      </aside>
    )
  }
  return(
    <aside className='infobox infobox-warning warning-medium '>
      <h2>Warning</h2>
        <p>{children}</p>
      </aside>
  )
    
  }
  
