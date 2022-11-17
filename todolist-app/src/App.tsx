import './App.css';
import { Route ,Routes} from "react-router-dom";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Main from "./pages/Main/Main"
import Logout from "./pages/Logout";

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


}
export default App;
