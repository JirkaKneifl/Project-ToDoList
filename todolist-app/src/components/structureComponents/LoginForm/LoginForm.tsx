import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../../basicComponents/Button/Button";
import Text from "../../basicComponents/Text/Text";
import HStack from "../../basicComponents/HStack";
import VStack from "../../basicComponents/VStack";
import "./LoginForm.css"


function LoginForm(){
    const handleLoginSubmit =  {

    }

    return (
        <>
            <div className={"loginForm"}>
                <form>
                    <VStack gap={1}>
                        <Text type={"title"} children={"Login"}></Text>
                        <VStack gap={1} justifyContent={"flex-start"}>
                            <Text type={"body"}>Email: </Text>
                            <input type={"email"}/>
                            <Text type={"body"}>Password: </Text>
                            <input type={"password"}/>
                        </VStack>
                        <VStack gap={1} justifyContent={"flex-start"} alignItems={"center"}>
                            <Button onClick={handleLoginSubmit} label={"Login"}></Button>
                        </VStack>
                        <HStack gap={1} alignItems={"baseline"}>
                            <Text type={"small-body"} children={"Don't have an account yet?"}></Text><Link to={"/register"}>Register</Link>
                        </HStack>
                    </VStack>
                </form>
            </div>
        </>
    )
}

export default LoginForm;