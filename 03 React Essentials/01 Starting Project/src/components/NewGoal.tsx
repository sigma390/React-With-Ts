
import React, { type FormEvent } from 'react'
import { Goal } from '../App';


 
const NewGoal = () => {

  function handleSubmit(e:FormEvent){
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} >
      <p>
        <label htmlFor='goal'>
          Your Goal
        </label>
        <input type='text' id='goal'/>
        
      </p>
      <p>
        <label htmlFor='summary'>
          Description
        </label>
        <input type='text' id='summary'/>
        
      </p>

      <p>
        <button>Add goal</button>
      </p>

    </form>
  )
}

export default NewGoal