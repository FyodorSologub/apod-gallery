import { CardExpanded, CardExpandedLoading } from '../components';
import { useGetCardData } from '../hooks';

export const CardExpandedContainer = () => {
    const { data, isLoading } = useGetCardData();
    return (
        <main className='h-full p-5 flex justify-center bg-slate-10'>
            <section className='h-full snap-y snap-mandatory max-h-full w-4/5 max-w-[1000px] flex justify-center items-center gap-5 py-3 lg:py-5'>
                { isLoading && <CardExpandedLoading /> }
                { data && <CardExpanded url={data.url} title={data.title} explanation={data.explanation} copyright={data.copyright}  />}
            </section>
        </main>
    )
};
