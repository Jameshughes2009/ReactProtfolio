import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <About />
            },
            {
                path: "/Work",
                element: <Work />
            },
            {
                path: "/Contact",
                element: <Contact />
            },
            {
                path: "Resume",
                element: <Resume />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
)