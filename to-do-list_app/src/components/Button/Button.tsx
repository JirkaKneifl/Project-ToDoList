import "./Button.css";

type ButtonProps = {
    onClick: () => void
    label: string
}

function Button(props: ButtonProps){
    return <button className="button" onClick={props.onClick}>
        {props.label}
    </button>
}

export default Button;