import { useState } from "react";

export const useQuizData = () => {
    // Stock les params pour requêter le quizz 
    // {difficulty: int, category: string}
    const [quizOptions, setQuizOptions] = useState();

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

    const reset = () => {
        setQuizData()
        setQuizOptions()
    }

    return {
        quizData,
        setQuizData,
        quizOptions,
        setQuizOptions,
        reset
    }
}