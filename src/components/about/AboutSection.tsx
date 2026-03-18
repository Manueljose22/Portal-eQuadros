import { Link } from "react-router-dom";
import imgProf from "../../../public/img/about2.png";


interface AboutsectionProps {
    type?: "page" | "section";
}


export default function AboutSection({ type = "section" }: AboutsectionProps) {

    return (
        <section className={`${type === 'page' ? "lg:h-[auto]" : "lg:h-[395px]"} bg-[#E7F0F3] h-full  w-full mt-12 mb-[8rem]`}>
            <div className={`${type === "page" ? 'max-w-7xl mx-auto px-12 py-8' : 'max-w-7xl mx-auto px-12'} mx-auto   flex flex-col lg:flex-row  items-center justify-between gap-10`}>
                <div className="">
                    <h2 className="text-[32px] lg:text-[36px] font-bold text-secondary mb-6 leading-snug mt-4">
                        O que é o{" "}
                        <span className="text-primary">eQuadros</span>
                    </h2>

                    {type === "section" ?
                        (<div className="max-w-2xl">
                            <p className="text-gray-600 text-base mb-4 leading-relaxed">
                                O eQuadros é a plataforma tecnológica nacional para registo, gestão e
                                valorização do capital humano em Angola.
                            </p>

                            <p className="text-gray-600 text-base mb-4 leading-relaxed ">
                                Através de inteligência de dados e integração institucional, o sistema
                                permite identificar competências, apoiar decisões estratégicas e
                                fortalecer a gestão de quadros no sector público e privado.
                            </p>
                        </div>) :

                        (
                            <>
                                <p className="text-gray-600 text-base mb-4 leading-relaxed">
                                    O eQuadros é uma plataforma tecnológica nacional criada para registar, organizar e valorizar o capital humano em Angola, promovendo uma gestão mais eficiente e estratégica dos profissionais do país.
                                </p>
                                <p className="text-gray-600 text-base mb-4 leading-relaxed ">
                                    Através da integração de dados e tecnologias avançadas de informação, o sistema permite reunir e analisar informações relevantes sobre os quadros nacionais, incluindo formação académica, experiência profissional, competências técnicas e áreas de especialização. Esta base de dados estruturada facilita a identificação de talentos e a melhor distribuição de profissionais em diferentes sectores da sociedade.
                                    Com o apoio de inteligência de dados e análise estratégica, o eQuadros contribui para a tomada de decisões informadas por parte das instituições públicas e privadas, permitindo planear políticas de desenvolvimento de recursos humanos, identificar lacunas de competências e orientar programas de formação e capacitação.
                                </p>
                                <p className="text-gray-600 text-base mb-4 leading-relaxed ">
                                    Além disso, a plataforma promove a articulação entre diferentes instituições, fortalecendo a cooperação entre organismos governamentais, empresas e entidades académicas. Desta forma, o eQuadros ajuda a optimizar a gestão de quadros nacionais, incentivar o aproveitamento do talento angolano e apoiar o desenvolvimento sustentável do país.
                                </p>

                                <p className="text-gray-600 text-base mb-8 leading-relaxed ">
                                    Assim, o eQuadros afirma-se como uma ferramenta estratégica para a modernização da gestão do capital humano em Angola, contribuindo para uma administração mais eficiente, transparente e orientada para o futuro.
                                </p>
                            </>

                        )}

                    {type === "section" && (
                        <Link to="/sobre"
                            className="inline-flex mb-20 items-center gap-2 font-semibold text-[#1E3A5F] text-sm hover:text-blue-600 transition-colors duration-200 group"
                        >
                            Saber mais
                            <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                                →
                            </span>
                        </Link>
                    )}
                </div>
                <img
                    src={imgProf}
                    alt="Profissional eQuadros"
                    className={`${type === "page" ? "w-92 h-[35rem] -top-12" : "-top-12  w-85 h-[475px]"} relative bottom-0  `}
                />
            </div>
        </section>
    );
}