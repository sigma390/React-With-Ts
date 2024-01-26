import { CourseGoal } from "./components/CourseGoal.tsx";
import { Header } from "./components/Header.tsx";
import goalsImg from './assets/goals.jpg'
export default function App() {
  return (
    <main>
      <Header image={{src: goalsImg,alt:'this is Image'}}>
        <h1>Your Course Goals</h1>
      </Header>
      
      <CourseGoal title="Gym" description="Fron 4 to 5" children />
      


    </main>
    
  )
}
