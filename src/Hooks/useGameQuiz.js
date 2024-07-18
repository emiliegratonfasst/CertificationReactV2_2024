export const useGameQuiz = (setQuizData) => {

    const majAnswers = (answers, key) => {
        return answers.map((a) => a.key === key ? {...a, isSelected: !a.isSelected } : a)
    }

    /**
     * Action boutons
     */
    const onSelected = (e, key) => {
        e.preventDefault()
        const questionKey = key.split('-')[0]
        setQuizData(state => state.map((s) => s.key === questionKey
            ? {
                ...s,
                isAnswer : !s.isAnswer, 
                answers: majAnswers(s.answers, key)
            }
            : s
        ))        
    }

    return{
        onSelected
    }
}