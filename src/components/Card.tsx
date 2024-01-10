import { CardProps } from '../types/index';
import { Link } from 'react-router-dom';

import { ImagePreview, VideoPreview, TextContentPreview } from './cardShort';

export const Card : React.FC<CardProps> = ({ explanation, title, url, reference, date, media_type, }) => {
    return (
        <article ref={reference} className="border border-slate-900 shadow-lg bg-white rounded-md w-full h-24 px-5 py-3 flex gap-x-3 relative group items-center transition-all snap-always snap-center">
            { media_type === 'image' && <ImagePreview url={ url } title={ title } /> }
            { media_type === 'video' && <VideoPreview /> }
            <TextContentPreview title={ title } explanation={ explanation } />
            <Link to={`/card/?date=${ date }`} className="absolute w-full h-full top-0 left-0 text-md antialiased font-light rounded-md justify-center items-center bg-slate-50 text-slate-900 opacity-90 hidden group-hover:flex transition-all">see more</Link>
        </article>
    );
};