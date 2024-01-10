import { imageProps } from "../types/imageProps";

export const Image : React.FC<imageProps> = ({ url, setIsModalOpen }) => {
  return (
    <img 
        className='h-full w-full aspect-square rounded-md object-cover hover:cursor-pointer' 
        src={ url } 
        onClick={() => setIsModalOpen(true)} />
  )
};
