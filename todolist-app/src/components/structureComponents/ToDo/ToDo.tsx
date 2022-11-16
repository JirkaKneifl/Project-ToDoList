import Button from "../../basicComponents/Button/Button";

type toDoProps ={
    toDoLabel: string
}

function ToDo(props: toDoProps) {
    return (
        <>
            <input type="checkbox"/>
            <label>{props.toDoLabel}</label>
            <Button label={"Detail"}></Button>
            <Button label={"X"}></Button>
        </>
    )
}

export default ToDo;