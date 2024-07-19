import { useEffect, useState } from "react"

export const useQuizSelection = (setParam) => {

    /**
     * Utils state
     */
    const [categoryList, setCategoryList] = useState([])
    const [loadedState, setLoadedState] = useState({isLoaded:false, isError:false})
    
    /**
     * Init Data
     */
    const fetchCategory = async() => {
        try{
            const request = await fetch('https://opentdb.com/api_category.php').then((data) => data.json())
            setCategoryList(request.trivia_categories)
            setLoadedState({isLoaded:true, isError:false})
        }catch(e){
            setCategoryList([])
            setLoadedState({isLoaded:true, isError:true})
        }   
    }

    useEffect(() => {
        fetchCategory()
        return () => {
            setCategoryList([])
            setLoadedState({isLoaded:false, isError:false})
        }
    }, [])
 
    /**
     * Actions components
     */
    const onCreation = (e) => {
        e.preventDefault()
        setParam({ 
            difficulty: e.target.difficulty.value,
            category: e.target.category.value
        })
    }

    return {
        categoryList,
        isLoaded: loadedState.isLoaded,
        isError: loadedState.isError,
        onCreation
    }
}