export type videoContanerProps = {
    readonly media_type : 'image' | 'video',
    readonly reference : React.RefObject<HTMLDivElement>,
    readonly isExpanded : boolean,
    readonly url : string,
    readonly videoWidth : number,
    readonly videoHeight : number,
};