import * as React from "react";
import { Link } from "react-router-dom";
import Button from "../../basicComponents/Button/Button";

function LoginForm(){
    const handleLoginSubmit =  {

    }

    return (
        <>
            <form>
            <h1>This is Login form</h1>
            <br/>
            <label>Email: </label><input type={"email"}/><br/>
            <label>Password: </label><input type={"password"}/><br/>
            <Button onClick={handleLoginSubmit} label={"Login"}></Button><br/>
            <Link to={"/register"}>Register</Link>
            </form>
        </>
    )
}

export default LoginForm;