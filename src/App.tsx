import React from 'react';
import Button from './components/Button/Button';
import TextInput from './components/TextInput/TextInput';

const App: React.FC = () => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <div>
      <h1>UI Library Demo</h1>

      <TextInput
        id="example-input"
        placeholder="Enter your text here"
        onChange={handleInputChange}
      />
      <Button onClick={() => alert('Button clicked!')}>Click me!</Button>
    </div>
  );
};

export default App;