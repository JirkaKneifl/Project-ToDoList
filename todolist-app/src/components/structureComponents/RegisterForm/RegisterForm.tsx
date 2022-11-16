import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../../basicComponents/Button/Button";

function RegisterForm(){
    const handleRegisterSubmit = {

    }

    return (
        <>
            <h1>This is register form</h1><br/>
            <label>First name: </label><input type={"text"}/><br/>
            <label>Last name: </label><input type={"text"}/><br/>
            <label>Email: </label><input type={"email"}/><br/>
            <label>Password: </label><input type={"password"}/><br/>
            <label>Check password: </label><input type={"password"}/><br/>
            <Button onClick={handleRegisterSubmit} label={"Register"}></Button>
            <Link to={"/login"}>Login</Link>
        </>
    )
}

export default RegisterForm;