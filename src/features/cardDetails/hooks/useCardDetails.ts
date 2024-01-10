import { useEffect, useRef, useState } from 'react';

export const useCardDetails = () => {
    const [ isExpanded, setExpanded ] = useState<boolean>(false);
    const [ videoWidth, setVideoWidth ] = useState<number>(0);
    const [ videoHeight, setVideoHeight ] = useState<number>(0);
    const [ windowHeight, setWindowHeight ] = useState<number>(0);
    const [ isModalOpen, setIsModalOpen ] = useState<boolean>(false);
    const videoContainer = useRef<HTMLDivElement>(null);
    
    const handleWindowResize = ( event : Event ) => {
        const target = event.target as typeof window;
        setWindowHeight(target.innerWidth);
    };

    useEffect(() => {
      window.addEventListener('resize', handleWindowResize);
      return () => {
          window.removeEventListener('resize', handleWindowResize);
      };
    }, []);
  
    useEffect(() => {
      if(!videoContainer.current) return;
      setVideoWidth(videoContainer.current.clientWidth);
      setVideoHeight(videoContainer.current.clientHeight);
    }, [ videoContainer, windowHeight ]);

    return { isExpanded, setExpanded, videoWidth, videoHeight, isModalOpen, setIsModalOpen, videoContainer };
};