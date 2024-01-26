import React from 'react'
import { type Goal } from '../App'
import { CourseGoal } from './CourseGoal';


type CourseGoalListProps = {
    goals:Goal[]
}
const CourseGoalList = ({goals}:CourseGoalListProps) => {
  return (
    <ul>
      {goals.map((goal)=>(<li key={goal.id}>
          <CourseGoal title={goal.title} description={goal.description} children />
        </li>
        ))}
      </ul>
  )
}

export default CourseGoalList