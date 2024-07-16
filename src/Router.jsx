import {createBrowserRouter, createMemoryRouter} from "react-router-dom";
import { InvalidRoute } from "./Components/InvalidRoute"
import { QuizMaker } from "./Components/QuizMaker"
import { QuizResult } from "./Components/QuizResult"

console.log("router")
const BASE_URL = '/CertificationReactV2_2024';
//const BASE_URL = '/';
export const memoryRouter = createBrowserRouter([
    {
        path: BASE_URL,
        element: <QuizMaker/>
    },
    {
        path: BASE_URL+'/Solution',
        element: <QuizResult/>
    },
    {
        path: '*',
        element: <InvalidRoute/>
    }
])