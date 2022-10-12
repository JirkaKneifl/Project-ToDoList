import './App.css';
import Button from "./components/Button/Button.tsx";

function App() {

  const handleClick = () => {
    console.log("nothing happen just click")
  }

  return (
      <div className="App">
        <div>Hallo world</div>
        <Button onClick={handleClick} label={"Clickme"}></Button>
      </div>
  )
}
export default App;
