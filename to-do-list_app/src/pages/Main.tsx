//toto je halvni strana
// - task/todos adder
// - list tasku
// - zobrazeni uzivatele -> pripadne button na detail pro uzivatele

import ToDoAdder from "../components/ToDoAdder/ToDoAdder.tsx";
import ListToDos from "../components/ListToDos/ListToDos.tsx";
import NavBar from "../components/NavBar/NavBar.tsx";
import VStack from "../components/VStack.tsx";
import ListOfToDoLists from "../components/ListOfToDoLists/ListOfToDoLists.tsx";
import HStack from "../components/HStack.tsx";

function Main(){
    return (
        <>
            <VStack gap={"1rem"}>
                <NavBar></NavBar>
                <div className={"mainContent"}>
                    <HStack alignItems={"flex-start"} justifyContent={""} gap={"25%"}>
                        <ListOfToDoLists></ListOfToDoLists>
                        <VStack alignItems={"center"} justifyContent={"center"} gap={""}>
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