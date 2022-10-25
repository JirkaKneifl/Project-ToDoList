import Button from "../Button/Button.tsx";

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