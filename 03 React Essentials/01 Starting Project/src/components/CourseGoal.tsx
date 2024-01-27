

import React, { type PropsWithChildren, ReactNode, FC } from 'react'

//=======> 1st appproach <===============
interface CourseGoalProps{
    id:number;
    title:string;
    description:string;
    children:ReactNode;
    onDelete:(id:number) => void;
} 
// ================> 2n Approach <=================
// type CourseGoalProps = PropsWithChildren

export const CourseGoal:FC<CourseGoalProps> = ({title,description, onDelete,id}) => {
  return (
    <article>
        <div>
            <h2>
                {title}
            </h2>
            <p>
              {description}
            </p>
            
        </div>
        <button onClick={()=> onDelete(id)}>Delete</button> {/*onclick is mousevent hence declared anonymous function*/ }

    </article>
    
  )
}
