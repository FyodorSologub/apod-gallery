import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { Header } from '../../../features/header';

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className='h-screen overflow-hidden pt-20'>
      <Header scrolled={ 0 } hasScrollIndicator={ false } />
      <main className='h-full p-5 flex justify-center bg-slate-10'>
        <section className='h-full max-h-full w-full md:w-4/5 md:max-w-[1000px] flex justify-center items-center gap-5 py-3 lg:py-5'>
          <h2 className='text-xl lg:text-4xl antialiased font-thin'>Something went wrong!</h2>
          { isRouteErrorResponse(error) && ( error.data?.message && <p>{error.data.message}</p> ) }
        </section>
      </main>
    </div>
  )
};
