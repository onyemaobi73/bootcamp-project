import { createBrowserRouter } from "react-router-dom"
import Layout from "../components/common/Layout"
import HomeScreen from "../pages/HomeScreen"

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element:<HomeScreen />,
            }
        ]
    }
])