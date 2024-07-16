import { useEffect, useState } from "react"

export const useQuizSelection = () => {

    /**
     * Utils state
     */
    const [categoryList, setCategoryList] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    /**
     * Init Data
     */
    const fetchCategory = async() => {
        try{
            const request = await fetch('https://opentdb.com/api_category.php').then((data) => data.json())
            setCategoryList(request.trivia_categories)
            setIsLoaded(true)
        }catch(e){
            setCategoryList([])
            setIsLoaded(false)

        }
        
    }

    useEffect(() => {
        fetchCategory()
        return () => {
            setCategoryList([])
            setIsLoaded(false)
        }
    }, [])

    
    /**
     * Actions components
     */

    const onCreation = (e) => {
        e.preventDefault()
        console.log("onCreation", e.target)
        console.log("difficulty", e.target.difficulty.value)
        console.log("category", e.target.category.value)
    }


    return {
        categoryList,
        isLoaded,
        onCreation
    }
}