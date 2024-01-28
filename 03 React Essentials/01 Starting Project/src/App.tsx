
import { Header } from "./components/Header.tsx";
import goalsImg from './assets/goals.jpg'
import  {CourseGoal } from './components/CourseGoal';
import { useState } from "react";
import CourseGoalList from './components/CourseGoalList';
import NewGoal from "./components/NewGoal.tsx";

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

  //delete goal
  function handleDeleteGoal(id:number){
    setGoals(prevGoals=> prevGoals.filter((goal)=> goal.id!=id))
  }
  return (
    <main>
      <Header image={{src: goalsImg,alt:'this is Image'}}>
        <h1>Your Course Goals</h1>
      </Header>
      
      <NewGoal/>
      <CourseGoalList goals = {goals} onDeleteGoal={handleDeleteGoal}/>
      
      
      
      


    </main>
    
  )
}
