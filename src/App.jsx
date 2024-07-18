import './App.css'
import { RouterProvider } from 'react-router-dom'
import { memoryRouter } from './Common/Router'
import { useQuizData } from './Hooks/useQuizData'
import { createContext } from 'react'

export const DataContext = createContext()

function App() {
  const {quizData, setQuizData, quizParam, setQuizParam, reset} = useQuizData()

  return (
    <>
        <DataContext.Provider value={{quizData, setQuizData, quizParam, setQuizParam, reset}}>
          <RouterProvider router={memoryRouter}/>
        </DataContext.Provider>
    </>
  )
}

export default App
