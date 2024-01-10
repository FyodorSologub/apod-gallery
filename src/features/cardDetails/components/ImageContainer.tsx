import { Image, ImageLabel } from '../../../components/cardDetails';
import { imageContainerProps } from '../types/imageContainerProps';

export const ImageContainer : React.FC<imageContainerProps> = 
({ media_type, isExpanded, url, setIsModalOpen, copyright  }) => {
  return (
    media_type === 'image' 
    && 
    <div className={`border ${ isExpanded ? 'hidden' : 'block' } rounded-md border-slate-200 col-span-1 row-start-2 row-end-7 md:row-start-2 md:row-end-13 relative`}>
        <Image url={ url } setIsModalOpen={ setIsModalOpen }  />
        <ImageLabel copyright={ copyright } />
    </div> 
  )
};
