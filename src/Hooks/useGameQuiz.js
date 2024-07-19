export const useGameQuiz = (quizData, setQuizData) => {

    const getSelectedKeyAnswer = (questionKey) => {
        const currentQuestion = quizData.filter(q => q.key === questionKey)[0]
        const selectedAnswer = currentQuestion.answers.filter((a) => a.isSelected === true)[0]
        return selectedAnswer!= null ? selectedAnswer.key : ''
    }

    const majAnswers = (answers, key) => {
        return answers.map((a) => a.key === key 
            ? {...a, isSelected: !a.isSelected } 
            : {...a, isSelected: false }) // Force à false, en cas de réponse précédemment sélectionnée
    }

    /**
     * Action bouton
     */
    const onSelected = (e, key) => {
        e.preventDefault()
        const questionKey = key.split('-')[0]
        const isDeselectedAnswers = getSelectedKeyAnswer(questionKey) === key
        setQuizData(state => state.map((s) => s.key === questionKey
            ? {
                ...s,
                isAnswer : isDeselectedAnswers ? false : true, 
                answers: majAnswers(s.answers, key)
            }
            : s
        ))        
    }

    return{
        onSelected
    }
}