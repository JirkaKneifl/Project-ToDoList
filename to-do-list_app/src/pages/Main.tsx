//toto je halvni strana
// - task/todos adder
// - list tasku
// - zobrazeni uzivatele -> pripadne button na detail pro uzivatele

import ToDoAdder from "../components/ToDoAdder/ToDoAdder.tsx";
import ListToDos from "../components/ListToDos/ListToDos.tsx";

function Main(){
    return (
        <>
            <h1>Hallo world this is <code>main page</code></h1>
            <br/>
            <ToDoAdder></ToDoAdder>
            <br/>
            <ListToDos></ListToDos>
        </>
    );
}

export default Main;