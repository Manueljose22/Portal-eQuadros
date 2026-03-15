import { Link } from "react-router-dom";
import imgProf from "../../../public/img/about2.png";



export default function AboutSection() {

    return (
        <section className="bg-[#E7F0F3] h-full lg:h-[395px] w-full mt-12 mb-[8rem] ">
            <div className="max-w-6xl mx-auto px-8  flex flex-col lg:flex-row  items-center justify-between gap-10">
                <div className="max-w-lg">
                    <h2 className="text-[32px] lg:text-[36px] font-bold text-[#1E3A5F] mb-6 leading-snug mt-4">
                        O que é o{" "}
                        <span className="text-[#20A9E6]">eQuadros</span>
                    </h2>

                    <p className="text-gray-600 text-base mb-4 leading-relaxed">
                        O eQuadros é a plataforma tecnológica nacional para registo, gestão e
                        valorização do capital humano em Angola.
                    </p>

                    <p className="text-gray-600 text-base mb-8 leading-relaxed ">
                        Através de inteligência de dados e integração institucional, o sistema
                        permite identificar competências, apoiar decisões estratégicas e
                        fortalecer a gestão de quadros no sector público e privado.
                    </p>

                    <Link to="#"
                        className="inline-flex mb-20 items-center gap-2 font-semibold text-[#1E3A5F] text-sm hover:text-blue-600 transition-colors duration-200 group"
                    >
                        Saber mais
                        <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                            →
                        </span>
                    </Link>
                </div>
                <img
                    src={imgProf}
                    alt="Profissional eQuadros"
                    className="relative bottom-0 -top-12  w-85 h-[475px] "
                />
            </div>
        </section>
    );
}