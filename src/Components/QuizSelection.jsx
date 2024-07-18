import { useQuizSelection } from "../Hooks/useQuizSelection";
import PropTypes from 'prop-types';

/**
 * Composant de création d'un nouveau quiz
 * @returns 
 */
export const QuizSelection = ({setParam}) => {

    const {categoryList, isLoaded, isError, onCreation} = useQuizSelection(setParam);

    return (
        <>
            { isLoaded && 
                (
                    isError 
                    ? <p>Failed to fetch quiz categories</p>
                    : <form onSubmit={onCreation}>
                        <select name="category" id="categorySelect">
                            {
                                categoryList.map((e) => <option key={e.id} value={e.id}>{e.name}</option>)
                            }
                        </select>
                        <select name="difficulty" id="difficultySelect">
                            <option value="easy">Easy</option>
                            <option value="medium">Medium</option>
                            <option value="hard">Hard</option>
                        </select>
                        <button id='createBtn' type="submit">Create</button>
                    </form>
                )
            }
        </>
    )
}

QuizSelection.propTypes = {
    setParam: PropTypes.func
}