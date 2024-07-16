import './App.css'
import { RouterProvider } from 'react-router-dom'
import { memoryRouter } from './Router'


function App() {

  return (
    <>
      <h1>APP</h1>
      <RouterProvider router={memoryRouter}/>
    </>
  )
}

export default App
