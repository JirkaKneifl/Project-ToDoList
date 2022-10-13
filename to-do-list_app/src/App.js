import './App.css';
import ToDoAdder from "./components/ToDoAdder/ToDoAdder.tsx";

function App() {

  const handleClick = () => {
    console.log("nothing happen just click")
  }

  return (
      <div className="App">
        <div>Hallo world</div>
        <ToDoAdder onClick={handleClick} label="Add ToDo"></ToDoAdder>
      </div>
  )
}
export default App;
