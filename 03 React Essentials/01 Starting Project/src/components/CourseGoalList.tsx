import React, { PropsWithChildren } from 'react'
import { type Goal } from '../App'
import { CourseGoal } from './CourseGoal';


type CourseGoalListProps = PropsWithChildren<{
  goals:Goal[],
  onDeleteGoal: (id:number)=> void; //passing function to component , prop drilling
}> 
const CourseGoalList = ({goals, onDeleteGoal}:CourseGoalListProps) => {
  return (
    <ul>
      {goals.map((goal)=>(<li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} description={goal.description} onDelete={onDeleteGoal} children >
        
          </CourseGoal>
        </li>
        ))}
      </ul>
  )
}

export default CourseGoalList