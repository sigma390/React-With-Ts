
import React from 'react'
import { Goal } from '../App';



const NewGoal = () => {
  return (
    <form >
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



    </form>
  )
}

export default NewGoal