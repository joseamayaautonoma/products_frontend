import { createBrowserRouter } from "react-router-dom";
import { MyApp } from "../MyApp";
import { ErrorPage } from "../pages/shared/ErrorPage";
import { ProductList } from "../pages/products/ProductList";
import { ProductForm } from "../pages/products/ProductForm";

export const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <MyApp />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'products',
                element: <ProductList />
            },
            {
                path: 'products/create',
                element: <ProductForm />
            },
            
        ]
    }
])