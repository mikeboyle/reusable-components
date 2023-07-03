import './App.css';
import './Components/Button/Button.css';
import Button from './Components/Button/Button';

function App() {
  const isControl = Math.random() > 0.5;
  return (
    <div className="App">
      <h1>Some buttons</h1>
      <h2>Default button</h2>
      <Button />
      <h2>Disabled button</h2>
      <Button disabled={true} />
      <h2>Button with hover styling</h2>
      <Button className="Button--hover" />
      <h2>Button with varying text</h2>
      <Button text={isControl ? 'control text' : 'exp text'} />
      <h2>Button with callback</h2>
      <Button
        onClick={async () => {
          const res = await fetch('https://icanhazdadjoke.com/', {
            headers: { Accept: 'application/json' },
          });
          const { joke } = await res.json();
          alert(joke);
        }}
        text="Click for a joke"
      />
    </div>
  );
}

export default App;
