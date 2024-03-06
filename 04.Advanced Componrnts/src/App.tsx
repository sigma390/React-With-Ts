
import { useRef } from 'react';
import { Button } from './Components/Button';
import Container from './Components/Container';
import Input from './Components/Input';
import Form, { formMethods } from './Components/Form';
function App() {


  // forward Ref Concept

  const input = useRef<HTMLInputElement>(null);
  const handleClick = ()=>{
    alert("Hii clicked here!!!!")
  }

  // Form Wrapper Data Extraction

  function handleSubmit(data:unknown){
    const extractedData = data as {name:string,age:string};
    console.log(extractedData);
    //this function is called 
    
    formRefs.current?.clear();


  }
   // Use Imperative Concept
   const formRefs = useRef<formMethods
   
   
   
   
   
   
   
   
   
   
   >(null)



  return (<main>
{/* 
    <Input label='Enter name' id='name' type='text' />

    <Input label='Enter age' id='age'/>

    

    <p>
      <Button >A button</Button>  
    </p>
    <p>
      <Button href='https://github.com/'>A Link</Button>
    </p>


    <Container as={Button} onClick={handleClick}>Click me and test</Container>

    <Input label='text' id='test' ref={input}/> */}
   {/* custom form wrapper  */}
    {/* <Form onSave={handleSubmit}  >  */}
    <Form onSave={handleSubmit} ref={formRefs} > 
      <Input type='text' label='Name' id='name' />
      <Input type='number' label='age' id='age'/>
      <p>
        <Button >Save</Button>
      </p>
      
    </Form>






  </main>)
}

export default App;
