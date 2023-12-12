import logo from './logo.svg';
import './App.css';
import FormInput from './components/FormInput';
import { useState } from 'react';

function App() {

const [username,setUsername]=useState('')

console.log(username);

console.log("re-rendered");
  return (
    <div className='app'>
  <form>
    <FormInput placeholder="Username" setUsername={setUsername}/>
    <FormInput placeholder="Email"/>
    <FormInput
    placeholder="Password"/>
    <FormInput
    placeholder="sth else"
    />
    <button>Submit</button>
  </form>
    </div>
  );
  }
export default App;
