import { useState, useEffect } from "react";

export const useIntersection = (element : React.RefObject<HTMLElement>, rootMargin : string) => {
    const [isVisible, setState] = useState(false);
  
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
            setState(entry.isIntersecting);
            }, { rootMargin }
        );
        element.current && observer.observe(element.current);
      
        const curr = element.current;
  
        return () => { curr ? observer.unobserve(curr) : () => {} };
    });
    
    return isVisible;
};