import { textContentPreviewProps } from "../types/textContentPreviewProps";

export const TextContentPreview : React.FC<textContentPreviewProps> = ({ title, explanation }) => {
  return (
    <div className="flex flex-col w-full gap-0 overflow-hidden">
        <h2 className="w-full max-h-10 rounded-sm text-lg antialiased font-thin truncate shrink-0 group-hover:blur-[1px]">{ title }</h2>
        <small className="w-full h-full max-h-full rounded-sm text-sm antialiased font-thin group-hover:blur-[1px] line-clamp-2">{ explanation }</small>
    </div>
  )
};
