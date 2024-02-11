import { useState } from 'react';
import investment from './assets/logo.png';
import UserInput from './components/UserInput';
import Results from './components/Results';

const INITIAL_VALUE = {
  initialInvestment: 1000,
  annualInvestment: 500,
  expectedReturn: 4,
  duration: 1,
};

function App() {
  const [userInputValue, setUserInputValue] = useState(INITIAL_VALUE);
  function handleChangeValue(inputIdentifier, newValue) {
    setUserInputValue((prevValue) => {
      const updatedValue = { ...prevValue, [inputIdentifier]: +newValue };
      return updatedValue;
    });
  }
  return (
    <div>
      <header id="header">
        <img src={investment} alt="Investment" />
        <h1>Investment Calculator</h1>
      </header>
      <main>
        <UserInput
          onInputChange={handleChangeValue}
          initialInputValue={userInputValue}
        />
        <Results userInput={userInputValue} />
      </main>
    </div>
  );
}

export default App;
