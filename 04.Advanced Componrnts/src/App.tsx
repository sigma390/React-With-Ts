import { Input } from './Components/Input';
import { Button } from './Components/Button';
import Container from './Components/Container';
function App() {

  const handleClick = ()=>{
    alert("Hii clicked here!!!!")
  }



  return (<main>

    <Input label='Enter name' id='name' type='text' />

    <Input label='Enter age' id='age'/>

    

    <p>
      <Button >A button</Button>  
    </p>
    <p>
      <Button href='https://github.com/'>A Link</Button>
    </p>


    <Container as={Button} onClick={handleClick}>Click me and test</Container>






  </main>)
}

export default App;
