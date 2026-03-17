import Header from "../layout/Header"
import imgHero from "../../../public/img/hero2.jpg";
import { BiSearch } from "react-icons/bi";


interface heroProps {
    title: string;
    description: string;
    searchShow?: boolean
}




export const HeroComponent = ({ searchShow = true,description, title }: heroProps) => {
    return (
        <>
            <Header />
            <div className="h-screen max-h-[75vh]  w-full mb-12">
                <img
                    src={imgHero}
                    alt="Imagem de destaque"
                    className="absolute inset-0 w-full h-full object-cover max-h-[75vh]"
                />

                <div className="absolute inset-0 bg-black/50 max-h-[75vh]"></div>

                <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-center px-4 md:px-20">
                    <div className="max-w-2xl w-full mt-20">
                        <h1 className="text-2xl md:text-1xl lg:text-[42px] font-bold text-white mb-4 text-center">
                            {title}
                        </h1>
                        <p className="text-lg md:text-xl lg:text-base text-white mb-8  text-center">
                            {description}
                        </p>
                        {searchShow && (
                            <div className="rounded-full bg-white/30  border-0 flex justify-between border-1 border-white">
                                <input
                                    className="placeholder:text-white/70 text-white w-[90%] focus:outline-none focus:ring-0 py-2 px-4"
                                    type="text"
                                    placeholder="Procurar eventos"
                                />
                                <button className="bg-white text-gray-400 rounded-full w-12 flex items-center justify-center">
                                    <BiSearch size={25} />
                                </button>
                            </div>
                        )

                        }
                    </div>
                </div>
            </div>
        </>
    )
}
