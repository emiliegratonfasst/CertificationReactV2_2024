import { useQuizSelection } from "../Hooks/useQuizSelection";
import PropTypes from 'prop-types';

/**
 * Options to create a new Game
 * @returns 
 */
export const QuizSelection = ({setParam}) => {

    const {categoryList, isLoaded, onCreation} = useQuizSelection(setParam);

    return (
        <>
            { isLoaded && 
                (<form onSubmit={onCreation}>
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
                </form>)
            }
        </>
    )
}

QuizSelection.propTypes = {
    setParam: PropTypes.func
}