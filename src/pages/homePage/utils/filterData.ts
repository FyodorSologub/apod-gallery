import { rawApiData } from "../../../shared/types";

const filterImages = (data: rawApiData[], filter: boolean) => {
    switch(filter) {
      case true:
        return data.filter(obj => obj.media_type === 'image');
      case false:
        return data.filter(obj => obj.media_type !== 'image');
    }
};
  
const filterVideos = (data: rawApiData[], filter: boolean) => {
    switch(filter) {
      case true:
        return data.filter(obj => obj.media_type === 'video');
      case false:
        return data.filter(obj => obj.media_type !== 'video');
    }
};

const filterEndDate = (data: rawApiData[], filter: Date) => {
    return data.filter(obj => new Date(obj.date).getTime() <= filter.getTime());
};

const filterStartDate = (data: rawApiData[], filter: Date) => {
    return data.filter(obj => new Date(obj.date).getTime() >= filter.getTime());
};

export const getFiltered = (data: rawApiData[], filterI: boolean, filterV: boolean, filterEnd : Date, filterStart : Date) => {
    const imagesFiltered = filterImages(data, filterI);
    const videosFiltered = filterVideos(data, filterV);
    const endDateFiltered = filterEndDate(data, filterEnd);
    const startDateFiltered = filterStartDate(data, filterStart);
    return [...imagesFiltered, ...videosFiltered, ...endDateFiltered, ...startDateFiltered];
};