import { useQuizSelection } from "../Hooks/useQuizSelection";

/**
 * Options to create a new Game
 * @returns 
 */
export const QuizSelection = () => {

    const {categoryList, isLoaded, onCreation} = useQuizSelection();

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