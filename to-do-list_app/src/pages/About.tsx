import AboutNavBar from "../components/AboutNavBar/AboutNavBar.tsx";
import HStack from "../components/HStack.tsx";
import VStack from "../components/VStack.tsx";


function About () {
    return (
        <>
            <HStack alignItems={"center"} justifyContent={"center"} gap={"1rem"}>
                <h1>HStack</h1>
                <h1>HStack</h1>
                <h1>HStack</h1>
            </HStack>
            <VStack alignItems={"center"} justifyContent={"center"} gap={"6rem"}>
                <h1>VStack</h1>
                <h1>VStack</h1>
                <h1>VStack</h1>
            </VStack>
            <AboutNavBar></AboutNavBar>
        </>
    )
}

export default About;