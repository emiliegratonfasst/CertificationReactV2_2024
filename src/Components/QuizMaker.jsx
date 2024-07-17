import { Link } from "react-router-dom"
import { RESULT_URL } from "../Router"
import { QuizSelection } from "./QuizSelection"

export const QuizMaker = () => {
    return (
        <>
            <h1>Quiz Maker</h1>
            <QuizSelection/>
            <Link to={RESULT_URL}>Link Solution</Link>
        </>
    )
}