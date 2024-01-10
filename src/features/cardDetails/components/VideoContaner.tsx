import ReactPlayer from 'react-player/youtube';
import { videoContanerProps } from '../types/videoContanerProps';

export const VideoContaner : React.FC<videoContanerProps> = 
({ media_type, reference, isExpanded, url, videoWidth, videoHeight  }) => {
  return (
    media_type === 'video' 
    && 
    <div ref={reference} className={`${ isExpanded ? 'hidden' : 'block' } col-span-1 row-start-2 row-end-7 md:row-start-2 md:row-end-13 rounded-md`}>
      <ReactPlayer url={ url } controls={ true } muted={ true } width={ videoWidth } height={ videoHeight } />
    </div>
  )
};
