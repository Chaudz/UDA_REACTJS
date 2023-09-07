import { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';

function App() {
  const [fullName, setFullName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  return (
    <div className="App">
      FirstName:
      <input
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      ></input>
      <br />
      LastName:
      <input
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      ></input>
      <br />
      <button
        onClick={() => {
          setFullName(`${firstName} ${lastName}`);
        }}
      >
        ShowFullName
      </button>
      <br />
      FullName: {fullName}
    </div>
  );
}

export default App;
