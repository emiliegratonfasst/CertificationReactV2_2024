import {createBrowserRouter, createMemoryRouter} from "react-router-dom";
import { InvalidRoute } from "./Components/InvalidRoute"
import { QuizMaker } from "./Components/QuizMaker"
import { QuizResult } from "./Components/QuizResult"

export const BASE_URL = '/';
export const RESULT_URL = '/Solution';
export const memoryRouter = createMemoryRouter([
    {
        path: BASE_URL,
        element: <QuizMaker/>
    },
    {
        path: RESULT_URL,
        element: <QuizResult/>
    },
    {
        path: '*',
        element: <InvalidRoute/>
    }
]);