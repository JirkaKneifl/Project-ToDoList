import AboutNavBar from "../../components/structureComponents/AboutNavBar/AboutNavBar";
import VStack from "../../components/basicComponents/VStack";
import Text from "../../components/basicComponents/Text/Text";
import "./About.css"


function About () {
    return (
        <>

            <AboutNavBar></AboutNavBar>
            <VStack alignItems={"center"} gap={0}>
                <Text type={"title"} children={"About my todo list"}/>
                <Text type={"body"} children={"This is simple ToDO app which can helps you manage your time. :D"}/>
            </VStack>
        </>
    )
}

export default About;