import CourseGoal from './CourseGoal.tsx';
import { type CourseGoal as CGoal } from '../App.tsx';

import  {InfoBox}  from './InfoBox.tsx';
import {type ReactNode} from 'react';
type CourseGoalListProps = {
  goals: CGoal[];
  onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({
  goals,
  onDeleteGoal,
}: CourseGoalListProps) {
  //check based on goals

  if (goals.length== 0) {
   <InfoBox mode='hint' >
    You have no Course Goals Add some!!!!

   </InfoBox>
    
  }

  let warningBox:ReactNode;

  if (goals.length>=4) {
    warningBox = <InfoBox mode='warning' severity='medium'>Too 
    Much Goals</InfoBox>
  }

  return (
    <>

    {warningBox}


    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
            <p>{goal.description}</p>
          </CourseGoal>
        </li>
      ))}
    </ul>
    
    
    
    </>
    
  );
}
