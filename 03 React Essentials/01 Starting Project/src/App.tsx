
import { Header } from "./components/Header.tsx";
import goalsImg from './assets/goals.jpg'
import  {CourseGoal } from './components/CourseGoal';
import { useState } from "react";

export type Goal = {
    title:string;
    description:string;
    id:number;
}


export default function App() {
  const[goals,setGoals] = useState<Goal[]>([]) 
  function handleAddGoal({}){
    setGoals((prevGoals)=>{
        const newGoal:Goal={
          title:'Learn React',
          id:Math.random(),
          description:'Something'
        }
        return [...prevGoals,newGoal]
    });
  }
  return (
    <main>
      <Header image={{src: goalsImg,alt:'this is Image'}}>
        <h1>Your Course Goals</h1>
      </Header>
      
      <button onClick={handleAddGoal}>Add goal</button>
      
      
      
      


    </main>
    
  )
}
