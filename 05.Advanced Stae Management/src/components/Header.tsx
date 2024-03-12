
import Button from './UI/Button.tsx';
import { useTimersContext } from '../store/timers-context';

export default function Header() {

  // consume that context
  // const timerctx = useContext(TimersContext)!; one way
  //other way to avoid Null 
  const timerCtx = useTimersContext();
  return (
    <header>
      <h1>ReactTimer</h1>

      <Button {timerCtx.isRunning?'Stop':'Start'}>Timers</Button>
    </header>
  );
}
