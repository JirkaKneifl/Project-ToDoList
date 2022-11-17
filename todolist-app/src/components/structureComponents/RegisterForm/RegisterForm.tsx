import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../../basicComponents/Button/Button";
import VStack from "../../basicComponents/VStack";
import Text from "../../basicComponents/Text/Text";
import HStack from "../../basicComponents/HStack";
import "./RegisterForm.css"

function RegisterForm(){
    const handleRegisterSubmit = {

    }

    return (
        <>
            <div className={"registerForm"}>
                <form>
                    <VStack gap={1}>
                        <Text type={"title"} children={"Login"}></Text>
                        <VStack gap={1} justifyContent={"flex-start"}>
                            <Text type={"body"}>First name: </Text>
                            <input type={"text"}/>
                            <Text type={"body"}>Last name: </Text>
                            <input type={"text"}/>
                            <Text type={"body"}>Email: </Text>
                            <input type={"email"}/>
                            <Text type={"body"}>Password: </Text>
                            <input type={"password"}/>
                            <Text type={"body"}>Confirm password: </Text>
                            <input type={"password"}/>
                        </VStack>
                        <VStack gap={1} justifyContent={"flex-start"} alignItems={"center"}>
                            <Button onClick={handleRegisterSubmit} label={"Register"}></Button>
                        </VStack>
                        <HStack gap={1} alignItems={"baseline"}>
                            <Text type={"small-body"} children={"Are you already registered?"}></Text><Link to={"/login"}>Login</Link>
                        </HStack>
                    </VStack>
                </form>
            </div>
        </>
    )
}

export default RegisterForm;