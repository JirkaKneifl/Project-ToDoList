import {Link} from "react-router-dom";

function LogOut() {
    return (
        <>
            <h1>Log Out</h1>
            <Link to={"/login"}>Login</Link>
        </>
    )
}

export default LogOut;