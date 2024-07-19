import { getSelectedKeyAnswer, updataSelectedAnswers } from "../Utils/quizUtils"

export const useGameQuiz = (quizData, setQuizData) => {

    /**
     * Action bouton
     */
    const onSelected = (e, key) => {
        e.preventDefault()
        const questionKey = key.split('-')[0]
        const isDeselectedAnswers = getSelectedKeyAnswer(quizData, questionKey) === key
        setQuizData(state => state.map((s) => s.key === questionKey
            ? {
                ...s,
                isAnswer : isDeselectedAnswers ? false : true, 
                answers: updataSelectedAnswers(s.answers, key)
            }
            : s
        ))        
    }

    return{
        onSelected
    }
}