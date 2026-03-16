


interface cardProps{
    title: string;
    description: string;
    bgColor?: string;
    classTitle?: string;
    classDescription?:string;
}


export const CardItem = ({title, description, bgColor, classTitle = "text-secondary", classDescription="text-[12px] text-secondary"}: cardProps) => {
  return (
    <div className={`${bgColor} flex flex-col`}>
        <h4 className={`${classTitle} text-sm font-semibold mb-3`}>{title}</h4>
        <p className={`${classDescription} leading-relaxed`}>{description}</p>
    </div>
  )
}
