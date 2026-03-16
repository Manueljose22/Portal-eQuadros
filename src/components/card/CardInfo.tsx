import { Link } from "react-router-dom";





interface cardInfoProps {
    title: string;
    img: any
}




export const CardInfo = ({ title, img }: cardInfoProps) => {
    return (
        <div className="relative w-full max-h-[425px] rounded-md overflow-hidden">
            <img
                src={img}
                alt="Imagem de destaque"
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-[#0f2f4ae6]/50"></div>

            <div className="relative z-20 flex flex-col items-center justify-center text-center h-[425px] px-4">

                <h1 className="text-xl md:text-2xl lg:text-[20px] font-bold text-white mb-4">
                    {title}
                </h1>

                <Link
                    to="/"
                    className="bg-white inline-flex items-center justify-center gap-2 text-secondary w-[145px] h-[53px] px-3 rounded-full py-3 font-semibold text-sm hover:text-blue-300 transition-colors"
                >
                    Saber mais →
                </Link>

            </div>

        </div>
    )
}
