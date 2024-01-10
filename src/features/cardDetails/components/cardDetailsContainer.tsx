import { CardDetails, CardDetailsLoading } from './cardDetails';
import { useGetCardDetailsData } from '../hooks/useGetCardDetailsData';

export const CardDetailsContainer = () => {
    const { data, isLoading } = useGetCardDetailsData();
    return (
        <main className='h-full px-4 py-2 md:p-5 md:py-6 flex justify-center items-center bg-slate-200'>
            <section className='h-full max-h-full w-full md:w-4/5 md:max-w-[1000px] md:max-h-[650px] flex justify-center items-center gap-5 py-3 lg:py-5'>
                { isLoading && <CardDetailsLoading /> }
                { data && <CardDetails url={data.url} title={data.title} explanation={data.explanation} copyright={data.copyright} media_type={data.media_type}  />}
            </section>
        </main>
    )
};
