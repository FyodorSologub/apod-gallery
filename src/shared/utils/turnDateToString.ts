export const turnDateToISOString = (date: Date) : string => {
    const dateAsString = date.toISOString().slice(0,10);
    return dateAsString;
};