

import React, { type PropsWithChildren, ReactNode } from 'react'

//=======> 1st appproach <===============
interface CourseGoalProps{
    title:string;
    description:string;
    children:ReactNode;
} 
// ================> 2n Approach <=================
// type CourseGoalProps = PropsWithChildren

export const CourseGoal = ({title,description}:CourseGoalProps) => {
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
        <button>Delete</button>

    </article>
    
  )
}
