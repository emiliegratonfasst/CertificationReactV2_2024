import PropTypes from 'prop-types';

/**
 * Composant bloc question-reponse fixe, sans interactivité
 * @param {object} questionAnswers objet question-reponse complet 
 * @returns 
 */
export const FixedQuestion = ({questionAnswers}) => {
    const {question, answers} = questionAnswers
    return (
        <>
            <p>{question}</p>
            {
                answers.map((a) => <button 
                    key={a.key} 
                    disabled={true} 
                    className={a.isCorrect ? 'green' : (a.isSelected ? 'red' : '')}>
                        {a.answer}
                    </button>)
            }
        </>
    )
}

FixedQuestion.propTypes = {
    questionAnswers: PropTypes.object
}