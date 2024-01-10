export const getNDaysBack = (startDate : Date, daysBack : number) : Date => {
    const previous = new Date(startDate.getTime());
    previous.setDate(startDate.getDate() - daysBack);
    return previous;
};