import { useSearchParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import { rawApiData } from "../../../shared/types";
import { getNDaysBack, getFiltered, stringifyDate } from '../utils';

export const useGetFilters = ( data : rawApiData[] ) => {
    const [ searchParams, setSearchParams ] = useSearchParams();
    const [ imagesFilter, setImagesFilter ] = useState<boolean>(true);
    const [ videosFilter, setVideosFilter ] = useState<boolean>(true);
    const [ endDateFilter, setEndDateFilter ] = useState<Date>(new Date());
    const [ startDateFilter, setStartDateFilter ] = useState<Date>(new Date());
    const [ dataFiltered, setDataFiltered ] = useState<rawApiData[]>([]);
    const [ isInitializingQuery, setIsInitializing ] = useState<boolean>(true);
    const [ isChangingQuery, setIsChangingQuery ] = useState<boolean>(false);

    useEffect(() => {
        setIsInitializing(true);

        const endDateParam = searchParams.get('endDate');
        const startDateParam = searchParams.get('startDate');
        const showImagesParam = searchParams.get('showImages');
        const showVideosParam = searchParams.get('showVideos');

        let endDate : Date;
        let startDate : Date;
        let showImages : boolean;
        let showVideos : boolean;

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

        if(showImagesParam) {
            showImages = showImagesParam === 'true' ? true : false;
        } else { showImages = true }
    
        if(showVideosParam) {
            showVideos = showVideosParam === 'true' ? true : false;
        } else { showVideos = true }

        setImagesFilter(showImages);
        setVideosFilter(showVideos);
        setEndDateFilter(endDate);
        setStartDateFilter(startDate);

        const endDateAsString = stringifyDate(endDate);
        const startDateAsString = stringifyDate(startDate);
        const showImagesAsString = String(showImages);
        const showVideosAsString = String(showVideos);

        setSearchParams({ 
              endDate : endDateAsString, startDate : startDateAsString, 
              showImages : showImagesAsString, showVideos: showVideosAsString 
        });

        setIsInitializing(false);
    }, []);

    useEffect(() => {
        if(isInitializingQuery) return;

        setIsChangingQuery(true);

        const endDateAsString = stringifyDate(endDateFilter);
        const startDateAsString = stringifyDate(startDateFilter);
        const showImagesAsString = String(imagesFilter);
        const showVideosAsString = String(videosFilter);

        setSearchParams({ 
              endDate : endDateAsString, startDate : startDateAsString, 
              showImages : showImagesAsString, showVideos: showVideosAsString 
        });

        setIsChangingQuery(false);
    }, [endDateFilter, startDateFilter, imagesFilter, videosFilter]);

    useEffect(() => {
        if(!data || isInitializingQuery || isChangingQuery) return;
        const result = getFiltered(data, imagesFilter, videosFilter, endDateFilter, startDateFilter);
        setDataFiltered(result);
    }, [ data, endDateFilter, imagesFilter, startDateFilter, videosFilter ]);

    return { dataFiltered, endDateFilter, setEndDateFilter, startDateFilter, setStartDateFilter, isInitializingQuery, isChangingQuery };
};