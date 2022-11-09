import {Link} from "react-router-dom";
import "./NavBar.css";
import HStack from "../HStack.tsx";
import { FiLogOut, FiSettings } from 'react-icons/fi';

function AboutNavBar(){
    return (
        <>
            <div className={"aboutNavBar"}>
                <HStack alignItems={"baseline"}  gap={"85rem"}>
                    <h2 className={"toDoLogo"}>ToDo App</h2>
                    <HStack gap={"2rem"} >
                        <Link className={"navLink"} to={"/settings"}><FiSettings className={"navLinkIcon"}></FiSettings></Link>
                        <Link className={"navLink"} to={"/logout"}><FiLogOut className={"navLinkIcon"}></FiLogOut></Link>
                    </HStack>
                </HStack>
            </div>
        </>
    )
}

export default AboutNavBar