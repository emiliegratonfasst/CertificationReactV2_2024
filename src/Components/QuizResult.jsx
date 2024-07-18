import { Link } from "react-router-dom"
import { BASE_URL } from "../Common/Router"
import { useContext } from "react";
import { DataContext } from "../App";

export const QuizResult = () => {
    const data = useContext(DataContext);
    console.log('QuizResult, context', data)

    return (
        <>
            <h1>RESULTS</h1>
            <button><Link to={BASE_URL}>Create a new quiz</Link></button>
        </>
    )
}