import {Link} from "react-router-dom";
import "./AboutNavBar.css";

function AboutNavBar(){
    return (
        <>
            <div className={"aboutNavBar"}>
                <Link className={"navLink"} to={"/login"}>Login</Link>
                <Link className={"navLink"} to={"/register"}>Register</Link>
            </div>
            <div className={"headlineAbout"}>
                <h1>About my ToDo list app.</h1>
            </div>
            <div className={""}>
                <code>content...</code>
            </div>
        </>
    )
}

export default AboutNavBar