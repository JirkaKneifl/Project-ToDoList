import {Link} from "react-router-dom";
import "./AboutNavBar.css";
import HStack from "../../basicComponents/HStack";

function AboutNavBar(){
    return (
        <>
            <div className={"aboutNavBar"}>
                <HStack alignItems={"baseline"}  gap={340}>
                    <h2 className={"toDoLogo"}>ToDo App</h2>
                    <HStack gap={4} >
                        <Link className={"aboutNavLink"} to={"/login"}>Login</Link>
                        <Link className={"aboutNavLink"} to={"/register"}>Register</Link>
                    </HStack>
                </HStack>
            </div>
        </>
    )
}

export default AboutNavBar