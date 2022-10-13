import "./ToDoAdder.css";

type ToDoAdderProps = {
    onClick: () => void
    label: string
    onSubmit: any
}

function ToDoAdder(props: ToDoAdderProps){
    return  <div>
                <form className={"addForm"} action={props.onSubmit}>
                    <div className="">
                        <input className="addInput" />
                    </div>
                    <button className="button" onClick={props.onClick}>
                        {props.label}
                    </button>
                </form>
            </div>
}

export default ToDoAdder;