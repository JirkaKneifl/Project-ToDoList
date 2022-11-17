import * as React from "react";
import LoginForm from "../../components/structureComponents/LoginForm/LoginForm";
import Text from "../../components/basicComponents/Text/Text";
import VStack from "../../components/basicComponents/VStack";
import "./Login.css"

function Login() {
    return(
        <>
            <VStack gap={1} alignItems={"center"}>
                <Text type={"title"} children={"ToDo App"}/>
                <LoginForm></LoginForm>
            </VStack>
        </>
    )
}

export default Login;