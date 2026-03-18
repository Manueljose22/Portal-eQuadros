import { Link } from "react-router-dom";
import imgStudent from "../../public/img/student.png";
import imgWomen from "../../public/img/women.png";
import imgSemaforo from "../../public/img/semaforo2.png";
import imgMrs from "../../public/img/mrs.png";
import imgPc from "../../public/img/pc.png";
import { Bank, Database, HouseLine, UsersThree } from "phosphor-react";
import Header from "../components/layout/Header";








export default function OfertasformativasPage() {
    return (
        <>
        <Header bgColor="bg-primary" />
        <div className="max-w-7xl mx-auto px-4 lg:px-12 lg:pt-30 pb-10 mt-12 sm:mt-20 sm:pt-20">
            <div className="grid lg:grid-cols-2 gap-6">
                <div>
                    <div>
                        <h2 className="text-2xl lg:text-[36px] font-bold text-secondary mb-10 leading-snug mt-4 flex gap-2">
                            Ofertas <span className="text-primary font-bold">Formativas</span>
                        </h2>
                    </div>

                    <div className="flex flex-col justify-between ">
                        <h5 className="text-lg font-semibold text-secondary mb-8 uppercase flex flex-col gap-1">
                            <span>Liderança Pública</span>
                            <span className="w-[11.5rem] h-[2px] bg-primary"></span>
                        </h5>

                        <p className="text-base text-secondary mb-6">
                            Programa voltado para o desenvolvimento de competências de liderança no sector público, capacitando gestores e quadros técnicos a conduzirem equipas com eficácia, ética e visão estratégica. A formação abortda temas como liderança transformacional, gestão de pessoas, comunicação institucional, tomada de decisão e resolução de conflitos.
                        </p>
                        <p className="text-base text-secondary mb-6">
                            O Objectivo é preparar profissionais capazes de promover inovação, melhorar a qualidade dos serviços públicos e liderar processos de mudança nas instituições do Estado.
                        </p>

                        <Link to={"#"} className="w-[9rem] text-sm font-bold border-1 border-black/70 rounded-lg text-secondary py-3 px-4 text-center">
                            Inscrever
                        </Link>
                    </div>
                </div>

                <div className="">
                    <img
                        src={imgStudent}
                        alt="Imagem estudante"
                        className="w-full lg:w-[600px] h-full lg:max-h-[590px]"
                    />
                </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6 py-9 mt-8">
                <div>
                    <img
                        src={imgWomen}
                        alt="Imagem de três meninas"
                    />
                </div>
                <div className="lg:col-span-2">
                    <div className="flex flex-col">
                        <h5 className="text-lg font-semibold text-secondary mb-8 uppercase flex flex-col gap-1">
                            <span>Gestão Estratégica</span>
                            <span className="w-[12.5rem] h-[2px] bg-primary"></span>
                        </h5>

                        <div className="mb-6">
                            <p className="text-base text-secondary">
                                Formação orientada para o planeamento, gestão e implementação de estratégias instituicionais, fortalecendo a capacidade das organizações para definir objectivos claros e alcançar resultados sustentáveis.
                            </p>
                            <p className="text-base text-secondary">
                                O programa aborda temas como elaboração de planos estratégicos, definição de metas e indicadores, gestão de projectos, monitorização e avaliação de políticas e programas. O foco é dotar os participantes de ferramentas que permitam melhorar o desempenho instituicional e alinhar as acções organizacionais com as priopriedades de desenvolvimento.
                            </p>
                        </div>

                        <div className="bg-[#DFEBFF] max-w-lg px-8 py-4 mb-4 flex flex-row items-center justify-center gap-5 mb-8">
                            <Bank weight="fill" className="text-secondary w-15 h-15" />
                            <p className="text-secondary">
                                Program voltado para o desenvolvimento de competências de liderança no sector público capacitando a juventude.
                            </p>
                        </div>

                        <Link to={"#"} className="w-[9rem] text-sm font-bold border-1 border-black/70 rounded-lg text-secondary py-3 px-4 text-center">
                            Inscrever
                        </Link>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 py-9 mt-8 gap-15">
                <div className="">
                    <div className="grid lg:grid-cols-2 gap-4">
                        <img
                            src={imgPc}
                            alt="Imagem de um computador portátil"
                            className="w-full object-cover"
                        />
                        <img
                            src={imgWomen}
                            alt="Imagem de três meninas"
                            className="w-full object-cover"
                        />
                        <img
                            src={imgMrs}
                            alt="Imagem de umleitor"
                            className="w-full object-cover"
                        />
                        <img
                            src={imgSemaforo}
                            alt="Imagem de uma rua"
                            className="w-full object-cover"
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <h5 className="text-lg font-semibold text-secondary mb-8 uppercase flex flex-col gap-1">
                        <span>Analise de dados</span>
                        <span className="w-[12.5rem] h-[2px] bg-primary"></span>
                    </h5>

                    <div className="mb-6">
                        <p className="text-base text-secondary mb-9">
                            Formação centrada na utilização de dados para apoiar decisões estratégicas, desenvolvendo competências em recolha, interpretação e análise de informação relevante para a gestão pública e instituicional.
                        </p>
                        <p className="text-base text-secondary">
                            Os participantes aprendem a utilizar ferramentas de análise de dados, incadores de desempenho e métodos de avaliação que permitem fundamentar decisões com base em evidências. Esta formação contribui para uma gestão mais eficiente, transparente e orientada para resultados.
                        </p>
                    </div>

                    <Link to={"#"} className="w-[9rem] text-sm font-bold border-1 border-black/70 rounded-lg text-secondary py-3 px-4 text-center">
                        Inscrever
                    </Link>
                </div>


            </div>

            <div className="grid lg:grid-cols-4 gap-6 py-9 my-18 gap-8">
                <div className="py-4 px-6 border-1 border-slate-500/70 rounded-md">
                    <UsersThree className="text-secondary w-5 h-6" weight="regular" />
                    <h4 className="text-base mb-2 text-secondary font-semibold uppercase">
                        Mobilidade de Quadros
                    </h4>
                    <p className="text-base text-secondary">
                        Facilidade a mobilidade interinstitucional.
                    </p>
                </div>

                <div className="py-4 px-6 border-1 border-slate-500/70 rounded-md">
                    <UsersThree className="text-secondary w-5 h-6" weight="regular" />
                    <h4 className="text-base mb-2 text-secondary font-semibold uppercase">
                        Mobilidade de Quadros
                    </h4>
                    <p className="text-base text-secondary ">
                        Facilidade a mobilidade interinstitucional.
                    </p>
                </div>
                <div className="py-4 px-6 border-1 border-slate-500/70 rounded-md">
                    <HouseLine className="text-secondary w-5 h-6" weight="regular" />
                    <h4 className="text-base mb-2 text-secondary font-semibold uppercase">
                        Mobilidade de Quadros
                    </h4>
                    <p className="text-base text-secondary ">
                        Facilidade a mobilidade interinstitucional.
                    </p>
                </div>
                <div className="py-4 px-6 border-1 border-slate-500/70 rounded-md">
                    <Database className="text-secondary w-5 h-6" weight="regular" />
                    <h4 className="text-base mb-2 text-secondary font-semibold uppercase">
                        Mobilidade de Quadros
                    </h4>
                    <p className="text-base text-secondary ">
                        Facilidade a mobilidade interinstitucional.
                    </p>
                </div>
            </div>


        </div>
        </>
    )
}