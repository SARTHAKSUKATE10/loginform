import logo from './logo.svg';
import './App.css';
import FormInput from './components/FormInput';

function App() {
  return (
    <div className='app'>
  <form>
    <FormInput placeholder="Username"/>
    <FormInput placeholder="Email"/>
    <FormInput
    placeholder="Password"/>
    <FormInput
    placeholder="sth else"
    />
  </form>
    </div>
  );
  }
export default App;
