import { useEffect, useState } from "react"
import request from './dataTest.json'

/**
 * Hook de récupération du quiz
 * @param {object} param 
 * @param {func} setQuizData setter du state quizData
 * @returns 
 */
export const useFetchQuiz = (param, setQuizData) => {
    
    const [loadedState, setLoadedState] = useState({isLoaded:false, isError:false})
    
    /**
     * Init Data
     */
    // Transpose la liste de réponses sous une nouvelle structure
    const getFormattedAnswer = (listAnswers, isCorrect=false) => {
        return listAnswers.map((l) => ({
                answer: l,
                isCorrect: isCorrect,
                isSelected: false
        }))
    }

    // Retourne la liste complète
    const setAnswers = (rightAnswers, wrongAnswers, idQuestion) =>{
        const rightAnswerFormated = getFormattedAnswer([rightAnswers], true)
        const wrongAnswersFormated = getFormattedAnswer(wrongAnswers, false)

        // Mélange la liste et assigne une clé selon leur nouvel ordre
        let shuffleList = [...rightAnswerFormated, ...wrongAnswersFormated].sort(() => Math.random() -0.5) 
        return shuffleList.map((s, index) => ({
            ...s,
            key: idQuestion+'-A'+index
        }))

    }

    const fetchQuizz = async (param) => {
        // Effet de bord condition initial
        if (param === null || param === undefined){
            setLoadedState({isLoaded:false, isError:false})
            return null;
        }

        try{
            const url = 'https://opentdb.com/api.php?amount=5&category='+param.category+'&difficulty='+param.difficulty+'&type=multiple'
            //const request = await fetch(url).then((data) => data.json())
            let tmpData = request.results.map((r, index) => {
                const key = 'Q'+index
                return {
                    key: key,
                    question: r.question,
                    isAnswer: false,
                    answers: setAnswers(r.correct_answer, r.incorrect_answers, key)
                }
            })
            setQuizData(tmpData)
            setLoadedState({isLoaded:true, isError:false})

        }catch(e){
            setLoadedState({isLoaded:true, isError:true, msg: e.message})
        }
    }

    useEffect(() => {
        fetchQuizz(param)
        return () => {setLoadedState({isLoaded:false, isError:false})}
    }, [param])

    return{
        loadedState
    }
}