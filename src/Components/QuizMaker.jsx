import { QuizSelection } from "./QuizSelection"
import { QuizGame } from "./QuizGame"
import { useContext } from "react"
import { DataContext } from "../App"

/**
 * Page de création de quiz
 *  
 */
export const QuizMaker = () => {
    const data = useContext(DataContext)

    return (
        <>
            <h1>Quiz Maker</h1>
            <QuizSelection setParam={data.setQuizParam}/>
            <QuizGame 
                param={data.quizParam}
                quizData= {data.quizData}
                setQuizData= {data.setQuizData}/>
        </>
    )
}