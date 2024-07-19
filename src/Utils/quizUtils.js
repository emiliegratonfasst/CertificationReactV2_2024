/**
 * Sert à l'initialisation
 * Met en forme la liste de réponse reçue du service de donnée
 * @param {array} listAnswers liste de réponse au format brut
 * @param {boolean} isCorrect type de réponses reçues
 * @returns la liste de réponses mis en forme
 */
export const getFormattedAnswer = (listAnswers, isCorrect=false) => {
    return listAnswers.map((l) => ({
            answer: l,
            isCorrect: isCorrect,
            isSelected: false
    }))
}

/**
 * Sert à l'initialisation
 * Regroupe et met en forme les deux types de réponses reçues, les mélanges et leur assigne une clé
 * @param {string} rightAnswers correcte reponses
 * @param {array} wrongAnswers listes de mauvaises réponses
 * @param {string} idQuestion clé de la question concerné, permet l'init d'une clé unique réprésentative
 * @returns l'ensemble des reponses mise en forme
 */
export const setAnswers = (rightAnswers, wrongAnswers, idQuestion) =>{
    const rightAnswerFormated = getFormattedAnswer([rightAnswers], true)
    const wrongAnswersFormated = getFormattedAnswer(wrongAnswers, false)

    // Mélange la liste et assigne une clé selon leur nouvel ordre
    let shuffleList = [...rightAnswerFormated, ...wrongAnswersFormated].sort(() => Math.random() -0.5) 
    return shuffleList.map((s, index) => ({
        ...s,
        key: idQuestion+'-A'+index
    }))
}

/**
 * Pour une question spécifique parmis une liste, retourne la clé de la réponse sélectionnée si existante
 * @param {string} questionKey 
 * @returns clé de la réponse sélectionnée ou ''
 */
export const getSelectedKeyAnswer = (quizData, questionKey) => {
    const currentQuestion = quizData.filter(q => q.key === questionKey)[0]
    const selectedAnswer = currentQuestion.answers.filter((a) => a.isSelected === true)[0]
    return selectedAnswer!= null ? selectedAnswer.key : ''
}

/**
     * Met à jour une liste de réponse donnée
     * La réponse ciblée est inversée, permet de sélectionnée ou désélectionnée un choix
     * Le reste est réintialisé à false, en cas de choix précédemment effectué
     * @param {array} answers liste des réponses à traiter
     * @param {string} key réponse ciblée par la modification
     * @returns liste des réponses à jour
     */
export const updataSelectedAnswers = (answers, key) => {
    return answers.map((a) => a.key === key 
        ? {...a, isSelected: !a.isSelected } 
        : {...a, isSelected: false }) // Force à false, en cas de réponse précédemment sélectionnée
}