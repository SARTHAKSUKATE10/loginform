import logo from './logo.svg';
import './App.css';
import FormInput from './components/FormInput';
import { useState } from 'react';

function App() {

const [values,setValues]=useState({
  username:"",
  email:"",
  birthday:"",
  password:"",
  confirmPassword:""
})

const inputs = [
  {
    id:1,
    name:"username",
    type:"text",
    placeholder:"Username",
    errorMessage:"Username should be 3-16 character and shouldn't include any special character",
    label:"Username"
  },
  {
    id:2,
    name:"email",
    type:"text",
    placeholder:"Email",
    errorMessage:"It should be a valid email address",
    label:"Email"
  },
  {
    id:3,
    name:"birthday",
    type:"date",
    placeholder:"Birthday",
    errorMessage:"",
    label:"Birthday"
  },
  {
    id:4,
    name:"password",
    type:"text",
    placeholder:"Password",
    errorMessage:"Password should be 8-12 character and include 1 letter,1 number and 1 special character ",
    label:"Password"
  },
  {
    id:5,
    name:"confirmPassword",
    type:"text",
    placeholder:"Confirm Password",
    errorMessage:"Password don't match",
    label:"Confirm Password"
  }
]

const onChange =(e)=>{
  setValues({...values,[e.target.name]:e.target.value})
}

const handleSubmit=(e)=>{
  e.preventDefault()
}

console.log("re-rendered");
  return (
    <div className='app'>
  <form onSubmit={handleSubmit}>
    <h1>Register</h1>
    {inputs.map((input) =>(<FormInput 
    key={input.id} 
    {...input}
    value={values[input.name]}
    onChange={onChange}
    />))}
    <button>Submit</button>
  </form>
    </div>
  );
  }
export default App;
