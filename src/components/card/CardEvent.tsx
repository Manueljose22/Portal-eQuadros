

interface CardEventProps{
    description: string;
    img: string;
    title: string
}



export const CardEvent = ({img, description, title}: CardEventProps) => {
    return (
        <div className="flex gap-4 justify-center items-center bg-white rounded-md p-1">
            <div>
                <img
                    className="w-[150px] h-[85px] rounded-md object-cover"
                    src={img}
                    alt="Imagem modelo" />
            </div>
            <div>
                <div className="flex gap-2 mb-1 items-center">
                    <div className="w-[0.2rem] h-[.8rem] bg-blue-400 rounded-full"></div>
                    <h5 className="text-primary font-semibold text-base">{title}</h5>
                </div>
                <p className="text-sm text-secondary w-full">
                    {description}
                </p>
            </div>
        </div>
    )
}
