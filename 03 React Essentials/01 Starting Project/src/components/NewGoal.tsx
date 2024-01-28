
import React, { useRef, type FormEvent } from 'react'
import { Goal } from '../App';

type NewGoalProps = {
  onAddGoal:(goal:string,summary:string)=>void;
}
 
const NewGoal = ({onAddGoal}:NewGoalProps) => {
  // refs 
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);



  function handleSubmit(e:FormEvent <HTMLFormElement>){
    e.preventDefault();
    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    onAddGoal(enteredGoal,enteredSummary);
  }
  return (
    <form onSubmit={handleSubmit} >
      <p>
        <label htmlFor='goal'>
          Your Goal
        </label>
        <input type='text' id='goal' ref = {goal}/>
        
      </p>
      <p>
        <label htmlFor='summary'>
          Description
        </label>
        <input type='text' id='summary' ref={summary}/>
        
      </p>

      <p>
        <button>Add goal</button>
      </p>

    </form>
  )
}

export default NewGoal