import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import { Header } from '../features';

export const Error = () => {
  const error = useRouteError();

  return (
    <div className='h-screen overflow-hidden pt-20'>
      <Header scrolled={0} hasScrollIndicator={ false } />
      <main className='h-full p-5 flex justify-center bg-slate-10'>
        <section className='h-full snap-y snap-mandatory max-h-full w-4/5 max-w-[1000px] flex justify-center items-center gap-5 py-3 lg:py-5'>
          <h2 className='text-4xl antialiased font-thin'>Something went wrong!</h2>
          { isRouteErrorResponse(error) && ( error.data?.message && <p>{error.data.message}</p> ) }
        </section>
      </main>
    </div>
  )
};
