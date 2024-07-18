import PropTypes from 'prop-types';
import { useFetchQuiz } from '../Hooks/useFetchQuiz';
import { Question } from './Question';
import { useGameQuiz } from '../Hooks/useGameQuiz';
import { Link } from 'react-router-dom';
import { RESULT_URL } from '../Common/Router';

export const QuizGame = ({param, quizData, setQuizData}) => {

    const {loadedState} = useFetchQuiz(param, setQuizData, quizData)
    const {onSelected} = useGameQuiz(setQuizData)

    // Controle que tout les questions ont étées répondues
    let isFinish
    (loadedState.isLoaded && !loadedState.isError) 
    ? isFinish = quizData.filter(question => question.isAnswer).length === quizData.length
    : isFinish = false

    return (
        <div className='Game'>
            {
                loadedState.isLoaded && (
                    loadedState.isError 
                    ? <p>Une erreur à une lieu lors du chargement du quizz : {loadedState.msg}</p>
                    : (<>
                        {   
                            quizData.map((q) => <Question key={q.key} questionAnswers={q} onSelected={onSelected}/>)                             
                        }
                        <div className={'submitQuiz'}>
                            {isFinish && <button><Link to={RESULT_URL}>Link Solution</Link></button>}
                        </div>
                        </>
                    )
                )
            }   
        </div>
    )
}

QuizGame.propTypes = {
    param: PropTypes.object,
    quizData: PropTypes.array,
    setQuizData: PropTypes.func
}