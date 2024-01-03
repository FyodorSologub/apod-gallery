export const CardLoading = () : JSX.Element => {
  return (
    <article className="border border-slate-900 shadow-lg bg-white rounded-md w-full h-24 px-5 py-3 flex gap-x-3 animate-pulse">
        <p className="w-16 h-16 aspect-square rounded-full bg-slate-200"></p>
        <div className="flex flex-col w-full gap-2">
            <h2 className="w-full h-10 bg-slate-200 rounded-sm"></h2>
            <small className="w-full h-full bg-slate-200 rounded-sm"></small>
        </div>
    </article>
  );
};
