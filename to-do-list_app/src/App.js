import './App.css';
import { Route ,Routes} from "react-router-dom";
import About from "./pages/About.tsx";
import Login from "./pages/Login.tsx";
import Register from "./pages/Register.tsx";
import Main from "./pages/Main.tsx"
import Logout from "./pages/Logout.tsx";

function App() {

 /* const handleClick = () => {
    console.log("nothing happen just click")
  }*/

  return(
    <Routes>
        <Route path="/" element={<About />}/>
        <Route path={"/login"} element={<Login />}/>
        <Route path={"/logout"} element={<Logout />}/>
        <Route path={"/register"} element={<Register />}/>
        <Route path={"/main"} element={<Main />} />
    </Routes>
)

      /*<div className="App">
        <div>Hallo world</div>
        <ToDoAdder onClick={handleClick} label="Add ToDo"></ToDoAdder>
      </div>*/

}
export default App;
