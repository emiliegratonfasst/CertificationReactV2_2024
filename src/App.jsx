import './App.css'
import { RouterProvider } from 'react-router-dom'
import { memoryRouter } from './Common/Router'
import { useQuizData } from './Hooks/useQuizData'
import { createContext } from 'react'

export const DataContext = createContext()

function App() {
  const {quizData, setQuizData, quizOptions, setQuizOptions, reset} = useQuizData()

  return (
    <>
        <DataContext.Provider value={{quizData, setQuizData, quizOptions, setQuizOptions, reset}}>
          <RouterProvider router={memoryRouter}/>
        </DataContext.Provider>
    </>
  )
}

export default App
