import { useState } from "react";

export const useQuizData = () => {
    // Stock les params pour requêter le quizz 
    // {difficulty: int, category: string}
    const [quizParam, setQuizParam] = useState();

    // Stock les données du quizz pour affichage sur le jeu et correction, structure prévue
    /**
     * [{
        key: string,
        isAnswer: boolean
        question: string,
        answers : [
            {
                key: String
                answer: string,
                isCorrect: boolean,
                isSelected: boolean
            }
        ]
        }]
     */
    const [quizData, setQuizData] = useState();

    return {
        quizData,
        setQuizData,
        quizParam,
        setQuizParam
    }
}