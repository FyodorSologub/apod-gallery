import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom";
import { HomePage } from './pages/homePage';
import { CardDetailsPage } from './pages/cardDetailsPage';
import { ErrorPage } from './pages/errorPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route index element={ <HomePage /> } />
      <Route path='/' element={ <HomePage /> } />
      <Route path='card' element={ <CardDetailsPage /> } />
      <Route path='*' element={ <ErrorPage /> } />
    </>
  )
);

export const App = () => {
  return (
    <RouterProvider router={router} />
  )
};