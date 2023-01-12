import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import {createBrowserRouter} from "react-router-dom"
export const router = createBrowserRouter([
    {
        path: "/",
        element: <LoginPage />,
    },
    {
        path: "/home",
        element: <HomePage />
    }
]);