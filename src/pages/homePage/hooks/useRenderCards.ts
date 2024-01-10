import { useState, useEffect } from "react";
import { useSearchParams } from 'react-router-dom';
import { RawApiData } from "../../../types";
import { getNDaysBack } from "../utils";
import { setInSession, getFromSession, checkInSessionByDate } from "../../../utils";
import { getApodData } from "../../../api";


const getDaysDiff = (first : Date, second : Date) => {        
  return Math.round((second.getTime() - first.getTime()) / (1000 * 60 * 60 * 24));
};

export const useRenderCards = ( isInViewport : boolean ) => {
    const [ data, setData ] = useState<RawApiData[]>([]);
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ endSearchParamVal, setEndSearchParamVal ] = useState<string>('');
    const [ page, setPage ] = useState<number>(1);
    const [ isLoading, setLoading ] = useState<boolean>(false);

    useEffect(() => {
      setLoading(true);
      
      const endDateParam = searchParams.get('endDate');
      const startDateParam = searchParams.get('startDate');

      let endDate : Date;
      let startDate : Date;

      if(endDateParam) {
        const d = new Date(endDateParam);
        if(d) {
          endDate = new Date(endDateParam);
        } else { endDate = new Date(); }
      } else { endDate = new Date(); }

      if(startDateParam) {
        const d = new Date(startDateParam);
        if(d) {
          startDate = new Date(startDateParam);
        } else { startDate = getNDaysBack(endDate, 23); }
      } else { startDate = getNDaysBack(endDate, 23); }

      const endDateAsString = `${endDate.getUTCFullYear()}-${endDate.getUTCMonth() + 1 >= 10 ? endDate.getUTCMonth() + 1 : '0' + String(endDate.getUTCMonth() + 1)}-${endDate.getUTCDate() >= 10 ? endDate.getUTCDate() : '0' + String(endDate.getUTCDate())}`;
      const startDateAsString = `${startDate.getUTCFullYear()}-${startDate.getUTCMonth() + 1 >= 10 ? startDate.getUTCMonth() + 1 : '0' + String(startDate.getUTCMonth() + 1)}-${startDate.getUTCDate() >= 10 ? startDate.getUTCDate() : '0' + String(startDate.getUTCDate())}`;

      const isInSession = checkInSessionByDate(endDate);
      const sessionData = getFromSession();

      if(isInSession && sessionData !== null) { 
        const daysDiff = getDaysDiff(startDate, endDate);
        setData(sessionData.slice(0,daysDiff)); 
        setInSession(sessionData.slice(0,daysDiff));
        setSearchParams({ endDate : endDateAsString, startDate : startDateAsString });
        setEndSearchParamVal(endDateAsString);
        setLoading(false); 
      }

      if(!isInSession || sessionData === null) {
        getApodData(startDate, endDate)
        .then(json => { setData(json); setInSession(json); setSearchParams({ endDate : endDateAsString, startDate : startDateAsString }); setEndSearchParamVal(endDateAsString); setLoading(false); });
      }
    }, [searchParams, setSearchParams]);
  
    useEffect(() => {
      if(isLoading || !isInViewport) return;
  
      setLoading(true);
  
      const initialDate = new Date();
      const endDate = getNDaysBack(initialDate, 23 * page);
      const startDate = getNDaysBack(endDate, 23);
    
      const startDateAsString = `${startDate.getUTCFullYear()}-${startDate.getUTCMonth() + 1 >= 10 ? startDate.getUTCMonth() + 1 : '0' + String(startDate.getUTCMonth() + 1)}-${startDate.getUTCDate() >= 10 ? startDate.getUTCDate() : '0' + String(startDate.getUTCDate())}`;

      getApodData(startDate, endDate)
      .then(json => { setData(prev => [...prev, ...json]); setInSession([...data, ...json]); setSearchParams({ endDate : endSearchParamVal, startDate : startDateAsString }); setLoading(false); });
    }, [data, page, isLoading, isInViewport, endSearchParamVal, setSearchParams]);
  
    useEffect(() => {
      if(isLoading || !isInViewport) return;
      setPage(page => page + 1);
    }, [isLoading, isInViewport]);
  
    return { data, isLoading };
};