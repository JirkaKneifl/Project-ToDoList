import RegisterForm from "../../components/structureComponents/RegisterForm/RegisterForm";
import "./Register.css"
import Text from "../../components/basicComponents/Text/Text";
import VStack from "../../components/basicComponents/VStack";

function Register() {
    return(
        <>
            <VStack gap={1} alignItems={"center"}>
                <Text type={"title"} children={"ToDo App"}></Text>
                <RegisterForm></RegisterForm>
            </VStack>
        </>
    )
}

export default Register;