import { CardExpanded, CardExpandedLoading } from '../components';
import { useGetCardData } from '../hooks';

export const CardExpandedContainer = () => {
    const { data, isLoading } = useGetCardData();
    return (
        <main className='h-full px-4 py-2 md:p-5 md:py-6 flex justify-center items-center bg-slate-200'>
            <section className='h-full max-h-full w-full md:w-4/5 md:max-w-[1000px] md:max-h-[650px] flex justify-center items-center gap-5 py-3 lg:py-5'>
                { isLoading && <CardExpandedLoading /> }
                { data && <CardExpanded url={data.url} title={data.title} explanation={data.explanation} copyright={data.copyright}  />}
            </section>
        </main>
    )
};
