//toto je halvni strana
// - task/todos adder
// - list tasku
// - zobrazeni uzivatele -> pripadne button na detail pro uzivatele

import ToDoAdder from "../../components/structureComponents/ToDoAdder/ToDoAdder";
import ListToDos from "../../components/structureComponents/ListToDos/ListToDos";
import NavBar from "../../components/structureComponents/NavBar/NavBar";
import VStack from "../../components/basicComponents/VStack";
import ListOfToDoLists from "../../components/structureComponents/ListOfToDoLists/ListOfToDoLists";
import HStack from "../../components/basicComponents/HStack";
import "./Main.css"

function Main(){
    return (
        <>
            <VStack gap={4}>
                <NavBar></NavBar>
                <div className={"mainContent"}>
                    <HStack alignItems={"flex-start"} gap={4}>
                        <ListOfToDoLists></ListOfToDoLists>
                        <VStack alignItems={"center"} justifyContent={"center"} gap={1}>
                            <h1>Work</h1>
                            <p>Something about work...</p>
                        </VStack>
                    </HStack>
                </div>
            </VStack>
        </>
    );
}

export default Main;