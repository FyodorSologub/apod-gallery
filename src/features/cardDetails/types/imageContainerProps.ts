export type imageContainerProps = {
    readonly media_type : 'image' | 'video',
    readonly isExpanded : boolean,
    readonly url : string,
    readonly setIsModalOpen : React.Dispatch<React.SetStateAction<boolean>>,
    readonly copyright? : string,
};