import { useState, useEffect } from "react";
import { RawApiData } from "../types";
import { getNDaysBack } from "../utils";
import { getApodData } from "../api";
import { setInSession, getFromSession, checkInSessionByDate } from "../utils";

export const useRenderCards = ( isInViewport : boolean ) => {
    const [ data, setData ] = useState<RawApiData[]>([]);
    const [ page, setPage ] = useState<number>(1);
    const [ isLoading, setLoading ] = useState<boolean>(false);

    useEffect(() => {
      setLoading(true);
  
      const endDate = new Date();

      const isInSession = checkInSessionByDate(endDate);
      const sessionData = getFromSession();

      if(isInSession && sessionData !== null) { 
        setData(sessionData.slice(0,24)); 
        setInSession(sessionData.slice(0,24));
        setLoading(false); 
      }

      if(!isInSession || sessionData === null) {
        const startDate = getNDaysBack(endDate, 23);
  
        getApodData(startDate, endDate)
        .then(json => { setData(json); setInSession(json); setLoading(false); });
      }
    }, []);
  
    useEffect(() => {
      if(isLoading || !isInViewport) return;
  
      setLoading(true);
  
      const initialDate = new Date();
      const endDate = getNDaysBack(initialDate, 23 * page);
      const startDate = getNDaysBack(endDate, 23);
  
      getApodData(startDate, endDate)
      .then(json => { setData(prev => [...prev, ...json]); setInSession([...data, ...json]); setLoading(false); });
    }, [data, page, isLoading, isInViewport]);
  
    useEffect(() => {
      if(isLoading || !isInViewport) return;
      setPage(page => page + 1);
    }, [isLoading, isInViewport]);
  
    return { data, isLoading };
};