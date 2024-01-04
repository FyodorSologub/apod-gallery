import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { Home, CardDetailes, Error } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={ <Home /> } />
      <Route path='/' element={ <Home /> } />
      <Route path='card' element={ <CardDetailes /> } />
      <Route path='*' element={ <Error /> } />
    </>
  )
);

export const App = () => {
  return (
    <RouterProvider router={router} />
  )
};