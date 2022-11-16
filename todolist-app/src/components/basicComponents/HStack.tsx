import getSize from "../../utils/getSize";

type HStackProps = {
    children: any;
    alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline" | "first baseline" | "last baseline" | "start" | "end"| "self-start" | "self-end";
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "start" | "end" | "left" | "right" ;
    gap: number;
}

function HStack(props: HStackProps) {
    return (
    <div style={
        {
            display: "flex",
            flexDirection: "row",
            alignItems: props.alignItems,
            justifyContent: props.justifyContent,
            gap: getSize(props.gap)
        }
    }>
        {props.children}
    </div>
    )
}

export default HStack