import "./ToDoAdder.css";
import Button from "../../basicComponents/Button/Button";

const handleOnclick = {


}

/*type toDoAdderProps = {

}*/


function ToDoAdder(){
    return  <div className={"toDoAdder"}>
                <form className={"addForm"} >
                    <div className="">
                        <label>Add something you want to do...</label>
                        <input className="addInput" />
                    </div>
                    <Button onClick={handleOnclick} label={"Add ToDo"}></Button>
                </form>
            </div>
}

export default ToDoAdder;