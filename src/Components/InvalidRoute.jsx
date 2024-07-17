import { Link } from "react-router-dom"
import { BASE_URL } from "../Router"

export const InvalidRoute = () => {
    return (
        <>
            <h1>404 - Not Found</h1>
            <p>Oups! Looks like something is wrong, did you try to modify the url manually ? </p>
            <p>Let me help you : <Link to={BASE_URL}>go back</Link></p>
        </>
    )
}