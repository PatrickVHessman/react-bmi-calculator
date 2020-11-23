import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react';
import { Container, Button } from 'nes-react';
import NumberInput from './NumberInput';
import './styles/styles.css';

function App() {
  const [BMI, setBMI] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [status, setStatus] = useState('');
  const [healthStatus, setHealthStatus] = useState('neutral');

  const inputHeight = (event) => {
    setHeight(event.target.value);
  }

  const inputWeight = (event) => {
    setWeight(event.target.value);
  }

  const calcBMI = () => {
    if (height !== 0 && weight !== 0) {
      
      let newBMI = (weight * 703) / (height * height);
      newBMI = newBMI.toFixed(2);
    setBMI(newBMI);
    let bmiStatus;

      if (BMI < 15) {bmiStatus = "Very severely underweight"; setHealthStatus('unhealthy'); }
      else if (BMI <= 16) {bmiStatus = "Severely underweight"; setHealthStatus('warning'); }
      else if (BMI <= 18.5) {bmiStatus = "Underweight"; setHealthStatus('warning'); }
      else if (BMI <= 25) {bmiStatus = "Normal (healthy weight)"; setHealthStatus('healthy'); }
      else if (BMI <= 30) {bmiStatus = "Overweight"; setHealthStatus('warning'); }
      else if (BMI <= 35) {bmiStatus = "Moderately obese"; setHealthStatus('warning'); }
      else if (BMI <= 40) {bmiStatus = "Severely obese"; setHealthStatus('unhealthy'); }
      else if (BMI < 40) {bmiStatus = "Very severely obese"; setHealthStatus('unhealthy'); }
    
    const newStatus = "BMI: " + newBMI + " (" + bmiStatus + ")";
    setStatus(newStatus);
    }
  }

  return (
    <div className="App">
      <Container id="main">
        <h1>BMI Calculator</h1>
        <h3>Please enter your height and weight.</h3>

        <NumberInput
            value={height}
            label="Height (in)"
            onChange={inputHeight}
          />
          <NumberInput
            value={weight}
            label="Weight (lb)"
            onChange={inputWeight}
          />
          <Button onClick={calcBMI}>Calculate BMI</Button>
          <p className={healthStatus}>{status}</p>
          <p className="disclaimer">It is a common argument that results of the BMI formula provides are too general and do not consider the gender, build, age or ethnicity of a person. You should always speak to a Doctor or health professional for advice and guidance if you are concerned about your weight.</p>
      </Container>
      <footer className="bg-dark">
      Created by{" "}
      <a
        href="http://patrickvhessman.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Patrick Hessman
      </a>{" "}
      | View{" "}
      <a
        href="https://github.com/PatrickVHessman/react-bmi-calculator"
        target="_blank"
        rel="noopener noreferrer"
      >
        source
      </a>
    </footer>
    </div>
  );
}

export default App;
