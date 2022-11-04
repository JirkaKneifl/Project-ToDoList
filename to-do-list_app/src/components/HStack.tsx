type HStackProps = {
    children: any;
    alignItems: string;
    justifyContent: string;
    gap: string | number;
}

function HStack(props: HStackProps) {
    return (
    <div style={
        {
            display: "flex",
            flexDirection: "row",
            alignItems: props.alignItems,
            justifyContent: props.justifyContent,
            gap: props.gap
        }
    }>
        {props.children}
    </div>
    )
}


export default HStack