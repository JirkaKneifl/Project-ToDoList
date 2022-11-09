import AboutNavBar from "../components/AboutNavBar/AboutNavBar.tsx";
import VStack from "../components/VStack.tsx";


function About () {
    return (
        <>

            <AboutNavBar></AboutNavBar>
            <VStack alignItems={"center"}>
                    <h1>About ToDo App</h1>
                <p>This is simple ToDO app which can helps you manage your time. :D</p>
            </VStack>
        </>
    )
}

export default About;