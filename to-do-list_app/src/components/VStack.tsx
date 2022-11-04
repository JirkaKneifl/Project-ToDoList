type VStackProps = {
    children: any;
    alignItems: string;
    justifyContent: string;
    gap: string | number;
}

function VStack(props: VStackProps){
    return <div style={
        {
            display: "flex",
            flexDirection: "column",
            alignItems: props.alignItems,
            justifyContent: props.justifyContent,
            gap: props.gap
        }
    }>
        {props.children}
    </div>
}

export default VStack;