import PropTypes from 'prop-types';

/**
 * Composant bloc question-reponse interactif, passe la fonction de mise à jour des données
 * @param {object} questionAnswers objet question-reponse complet 
 * @param {func} onSelected fonction à executer
 * @returns 
 */
export const InteractiveQuestion = ({questionAnswers, onSelected}) => {
    const {question, answers} = questionAnswers
    return (
        <>
            <p>{question}</p>
            {
                answers.map((a) => <button 
                    key={a.key} 
                    onClick={(e) => onSelected(e, a.key)} 
                    className={a.isSelected ? 'green' : ''}>
                        {a.answer}
                    </button>)
            }
        </>
    )
}

InteractiveQuestion.propTypes = {
    questionAnswers: PropTypes.object,
    onSelected: PropTypes.func
}