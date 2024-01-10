import { imagePreviewProps } from "../types/imagePreviewProps";

export const ImagePreview : React.FC<imagePreviewProps>= ({ url, title }) => {
  return (
    <img 
        className="w-16 h-16 aspect-square rounded-full group-hover:blur-[1px]" 
        src={ url } 
        alt={`An image with title: ${ title }`} 
    />
  )
};