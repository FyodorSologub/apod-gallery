export type CardProps = {
    readonly explanation: string,
    readonly title: string,
    readonly url: string,
    readonly reference? : React.RefObject<HTMLElement>,
    readonly date: string,
    readonly media_type : 'image' | 'video',
};