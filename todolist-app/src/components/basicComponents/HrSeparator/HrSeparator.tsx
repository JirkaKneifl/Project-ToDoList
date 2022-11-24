import "./HrSeparator.css";

type HrSeparatorProps = {
    width: "80%" |  "70%" | "60%" | "50%" | "40%" | "30%" | "20%" | "10%";
}

function HrSeparator(props: HrSeparatorProps){
    return (
        <>
            <hr className={"hrSeparator"} style={
                {
                    width: props.width
                }
            }/>
        </>
    )
}

export default HrSeparator;

