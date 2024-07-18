import PropTypes from 'prop-types';
import { useFetchQuiz } from '../Hooks/useFetchQuiz';
import { useGameQuiz } from '../Hooks/useGameQuiz';
import { Link } from 'react-router-dom';
import { RESULT_URL } from '../Common/Router';
import { InteractiveQuestion } from './InteractiveQuestion';

/**
 * Composant en charge du chargement et de l'affichage du quizz
 * @param {object} param {difficulty, category} paramètre de requête du quiz
 * @param {array} quizData structure de donnée du quiz
 * @param {func} setQuizData setter du state quizData
 * @returns 
 */
export const QuizGame = ({param, quizData, setQuizData}) => {

    const {loadedState} = useFetchQuiz(param, setQuizData, quizData)
    const {onSelected} = useGameQuiz(setQuizData)

    // Controle que toutes les questions ont étées répondues
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
                            quizData.map((q) => <InteractiveQuestion 
                                key={q.key} 
                                questionAnswers={q} 
                                onSelected={onSelected}/>)                             
                        }
                        <div className={'submitQuiz'}>
                            {isFinish && <button id='ValidateBtn' type='submit'><Link to={RESULT_URL}>Link Solution</Link></button>}
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