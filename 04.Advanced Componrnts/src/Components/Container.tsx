import  { ComponentPropsWithoutRef, ElementType, PropsWithoutRef, ReactNode } from 'react'


// type ContainerProps<T extends ElementType> = {
//      as?:T,
//      children:ReactNode
// } & ComponentPropsWithoutRef<T>


// const Container = <C extends ElementType>({as, children , ...props}:ContainerProps<C>) => {
//     const Comp = as || 'div';
//   return <Comp {...props}  >{children}</Comp>
// }

// export default Container


type ContainerProp<T extends ElementType > = {
  as?:T,
  children:ReactNode
} & ComponentPropsWithoutRef<T>




export const Container =<C extends ElementType> ({as,children, ...props}:ContainerProp<C>) => {
  const Cont = as || 'div';
  return (
    <Cont {...props}>{children}</Cont>
    
  )
}
export default Container;