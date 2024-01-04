import { createBrowserRouter } from "react-router-dom";
import { App } from './App';

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
            path: 'card',
            element: <h1>Hello!</h1>
        },
      ],
    },
]);