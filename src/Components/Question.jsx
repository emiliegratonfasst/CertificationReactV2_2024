import PropTypes from 'prop-types';

export const Question = ({questionAnswers, onSelected}) => {
    const {question, answers, isAnswer} = questionAnswers
    return (
        <>
            <p>{question}</p>
            {
                answers.map((a) => <button disabled={(isAnswer && !a.isSelected)} key={a.key} onClick={(e) => onSelected(e, a.key)} className={a.isSelected && 'selected'}>{a.answer}</button>)
            }
        </>
    )
}

Question.propTypes = {
    questionAnswers: PropTypes.object,
    setQuizData: PropTypes.func
}