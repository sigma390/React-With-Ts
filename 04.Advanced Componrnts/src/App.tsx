import { Input } from './Components/Input';
import { Button } from './Components/Button';
function App() {
  return (<main>

    <Input label='Enter name' id='name' type='text' />

    <Input label='Enter age' id='age'/>

    <p>
      <Button el='button'>A button</Button>  
    </p>
    <p>
      <Button el='anchor' href='https://github.com/'>A Link</Button>
    </p>





  </main>)
}

export default App;
