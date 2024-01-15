import { useState, useEffect } from "react";
import { rawApiData } from "../../../shared/types";
//import { getNDaysBack, getDaysDiff, stringifyDate } from "../utils";
//import { setInSession, getFromSession, checkInSessionByDate } from "../../../shared/utils";
import { getApodData } from "../../../shared/api";
import { useGetFilters } from ".";

export const useRenderCards = ( isInViewport : boolean ) => {
    const [ data, setData ] = useState<rawApiData[]>([]);
    const { dataFiltered, endDateFilter, setEndDateFilter, startDateFilter, setStartDateFilter, isInitializingQuery, isChangingQuery } = useGetFilters(data);
    const [ page, setPage ] = useState<number>(1);
    const [ isLoading, setLoading ] = useState<boolean>(true);

    useEffect(() => {
      if(isInitializingQuery) return;

      setLoading(true);

      //const sessionData = getFromSession();
      //const isInSession = sessionData ? checkInSessionByDate(endDateFilter, sessionData) : false;
      const sessionData = 1 > 2;
      const isInSession = 1 > 2;

      /*
      if(isInSession && sessionData !== null) { 
        const daysDiff = getDaysDiff(startDateFilter, endDateFilter);
        setData(sessionData.slice(0,daysDiff)); 
        setInSession(sessionData.slice(0,daysDiff));
        setLoading(false); 
      }
      */

      if(!isInSession || sessionData === null) {
        getApodData(startDateFilter, endDateFilter)
        .then(json => { setData(json); /*setInSession(json);*/ setLoading(false); });
      }
    }, [ isInitializingQuery ]);
    
    /*
    useEffect(() => {
      if(isInitializingQuery || isChangingQuery) return;


    }, [ endDateFilter, startDateFilter ])
    */

    /*
    useEffect(() => {
      if(isLoading || !isInViewport) return;
  
      setLoading(true);
  
      const initialDate = new Date();
      const endDate = getNDaysBack(initialDate, 23 * page);
      const startDate = getNDaysBack(endDate, 23);
    
      const startDateAsString = `${startDate.getUTCFullYear()}-${startDate.getUTCMonth() + 1 >= 10 ? startDate.getUTCMonth() + 1 : '0' + String(startDate.getUTCMonth() + 1)}-${startDate.getUTCDate() >= 10 ? startDate.getUTCDate() : '0' + String(startDate.getUTCDate())}`;

      getApodData(startDate, endDate)
      .then(json => { setData(prev => [...prev, ...json]); setInSession([...data, ...json]); setSearchParams({ endDate : endSearchParamVal, startDate : startDateAsString, showImages: String(showImagesFilter), showVideos: String(showVideosFilter) }); setLoading(false); });
    }, [data, page, isLoading, isInViewport, endSearchParamVal, setSearchParams, showImagesFilter, showVideosFilter]);
  
    useEffect(() => {
      if(isLoading || !isInViewport) return;
      setPage(page => page + 1);
    }, [isLoading, isInViewport]);
    */ 

    return { dataFiltered, isLoading };
};
