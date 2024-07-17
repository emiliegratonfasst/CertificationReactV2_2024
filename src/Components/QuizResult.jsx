import { Link } from "react-router-dom"
import { BASE_URL } from "../Router"

export const QuizResult = () => {
    return (
        <>
            <h1>Quiz Result</h1>
            <p>Go back : <Link to={BASE_URL}>go back</Link></p>
        </>
    )
}