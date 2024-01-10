type imageModalProps = {
    readonly setIsModalOpen : React.Dispatch<React.SetStateAction<boolean>>,
    readonly isModalOpen : boolean,
    readonly title : string,
    readonly url : string,
};

export const ImageModal : React.FC<imageModalProps> = ({ setIsModalOpen, isModalOpen, title, url }) => {
  return (
    <div onClick={() => setIsModalOpen(false)} className={`${isModalOpen ? 'flex' : 'hidden'} fixed mt-20 left-0 w-full h-full flex-col gap-y-5 items-center bg-slate-100 p-10 hover:cursor-pointer`}>
        <h2 className='w-auto h-auto text-center rounded-md text-sm md:text-xl antialiased font-extralight shrink-0'>{ title }</h2>
        <img className='rounded-md max-w-full md:max-w-[75%] max-h-full md:max-h-[75%]' src={ url } />
    </div>
  )
};
