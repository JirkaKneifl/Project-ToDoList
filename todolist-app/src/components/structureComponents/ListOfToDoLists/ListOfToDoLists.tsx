import VStack from "../../basicComponents/VStack";
import "./ListOfToDoLists.css";
import {Link} from "react-router-dom";
import { IoIosAddCircleOutline } from 'react-icons/io';
import HrSeparator from "../../basicComponents/HrSeparator/HrSeparator";

function ListOfLists(){
    return (
        <>
            <div className={"listOfToDoListsPanel"}>
                <VStack alignItems={"stretch"} justifyContent={"flex-start"} gap={1}>
                    <h3 className={"sidebarItem"}>Work</h3>
                    <h3 className={"sidebarItem"}>School</h3>
                    <h3 className={"sidebarItem"}>Project</h3>
                    <HrSeparator width={"80%"}></HrSeparator>
                    <Link to={""} className={"addButton"}><IoIosAddCircleOutline className={"addButtonIcon"}></IoIosAddCircleOutline>Add</Link>
                </VStack>
            </div>
        </>
    )
}

export default ListOfLists;
