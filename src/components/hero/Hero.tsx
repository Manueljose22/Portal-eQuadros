import { Link } from "react-router-dom";
import imgHero from "../../../public/img/hero.jpg";



export default function Hero() {
    return (
        <section className="relative h-screen w-full">
            <img
                src={imgHero}
                alt="Imagem de destaque"
                className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-20 container mx-auto h-full flex flex-col justify-center items-start px-4 md:px-20">
                <div className="max-w-xl w-full mt-20">
                    <h1 className="text-2xl wrap md:text-1xl lg:text-[42px] font-bold text-white mb-4">
                        Plataforma nacional de inteligência de capital humano.
                    </h1>
                    <p className="text-lg w-[20rem] md:text-xl lg:text-base text-white mb-8 ">
                        A plataforma nacional que conecta talento, dados e oportunidades para fortalecer a Administração Pública e o desenvolvimento estratégico de Angola.
                    </p>

                    <div className="flex space-x-4 gap-3">
                        <div className="flex space-x-4">
                            <button className="w-[145px] h-[53px] px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors transition-all duration-200">
                               <Link className="w-full" to="#">Entrar</Link>
                            </button>

                            <button className="w-[145px] h-[53px] px-6 py-3 border border-white text-white font-semibold rounded-full bg-transparent hover:bg-white hover:text-black transition-colors transition-all duration-200">
                                <Link className="w-full" to="#">Registrar</Link>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 mt-10">
                        {[0,1,2,3].map((i) => (
                            <button
                                key={i}
                                className={`h-2 rounded-full transition-all duration-300 cursor-pointer bg-transparent border-none p-0
                                ${i === 0 ? "w-5 btn-primary" : "w-2 bg-white/35 hover:bg-white/60"}`}
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}
