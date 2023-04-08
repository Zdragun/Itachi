import React,{ChangeEvent, useState} from 'react';
import './css/App.css'
import Environment from './components/Environment';
import Itachi from './components/Itachi';



function App() {
    const [issue, setIssue] = useState<string>('') 
    const onClickValue = (event:ChangeEvent<HTMLInputElement>) =>
    {
        setIssue(event.target.value)
    }
  return (
    <div className="App" >
      <Environment name={'Nazar'} age={21} qualityCool={false} />
      <input onChange={onClickValue}         />
      <p>Some Value from Input : <span>{issue}</span></p>
      <Itachi/>
    </div>
  );
}

export default App;
