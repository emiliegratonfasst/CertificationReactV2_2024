import { Link } from "react-router-dom"
import { BASE_URL } from "../Common/Router"
import { useContext } from "react";
import { DataContext } from "../App";
import { FixedQuestion } from "./FixedQuestion";

/**
 * Page d'affichage des résultats
 */
export const QuizResult = () => {
    const {quizData, reset} = useContext(DataContext);
    
    const isCorrectAnswers = (answers) => {
        return answers.filter((a) => a.isCorrect === true && a.isSelected === true).length > 0
    }
    const nbCorrectAnswers = quizData.filter((q) => isCorrectAnswers(q.answers)).length

    const color = nbCorrectAnswers<=1 ? 'red' : nbCorrectAnswers>=4 ? 'green' : 'yellow'

    return (
        <>
            <h1>RESULTS</h1>
            {
                quizData.map((q) => <FixedQuestion key={q.key} questionAnswers={q}/>)
            }
            <p className={color}>You scored {nbCorrectAnswers} out of {quizData.length}</p>
            <button><Link onClick={() => reset()} to={BASE_URL}>Create a new quiz</Link></button>
        </>
    )
}