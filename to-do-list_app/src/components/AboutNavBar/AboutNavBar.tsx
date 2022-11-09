import {Link} from "react-router-dom";
import "./AboutNavBar.css";
import HStack from "../HStack.tsx";

function AboutNavBar(){
    return (
        <>
            <div className={"aboutNavBar"}>
                <HStack alignItems={"baseline"}  gap={"85rem"}>
                    <h2 className={"toDoLogo"}>ToDo App</h2>
                    <HStack gap={"1rem"} >
                        <Link className={"aboutNavLink"} to={"/login"}>Login</Link>
                        <Link className={"aboutNavLink"} to={"/register"}>Register</Link>
                    </HStack>
                </HStack>
            </div>
        </>
    )
}

export default AboutNavBar