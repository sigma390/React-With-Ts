import React, { ElementType } from 'react'


type ContainerProps = {
     as:ElementType
}


const Container = ({as}:ContainerProps) => {
    const Comp = as;
  return <Comp/>
}

export default Container