import { ArrowRight } from "phosphor-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ModalComponent from "../modal/ModalComponent";
import imgHero from "../../../public/img/hero.jpg"





export default function OfertasFormativasSection() {
    const [open, setOpen] = useState(false);
    return (
        <div className="card-bg">
            <div className="container-max py-12 max-w-7xl mx-auto px-4 lg:px-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-6 mb-12 items-center">

                    <div className="h-full">
                        <h2 className="text-2xl lg:text-[32px]  font-bold text-secondary mb-4 text-start">
                            Ofertas <span className="text-primary">Formativas</span>
                        </h2>
                        <p className="text-base text-normal text-secondary mb-6">
                            A Oferta Formativa do eQuadros reúne programas de capacitação e desenvolvimento profissional orientados para as necessidades estratégicas da Administração Pública e do sector produtivo.
                        </p>

                        <Link to="/ofertas_formativas" className="btn-primary w-full py-3  max-w-[170px] h-full max-h-[50px] flex items-center justify-center text-white  rounded-full hover:bg-[#1A8BCA]">
                            Ver todas
                        </Link>
                    </div>
                    

                    <div className="cursor-pointer flex flex-col justify-between h-[18rem]  px-4 gap-4 border-[1px] border-[#ddd] rounded-lg p-4 hover:bg-[#DFE8EA]">
                        <h5 className="text-sm font-bold text-secondary mb-2 uppercase flex flex-col gap-1">
                            <span>Liderança Pública</span>
                            <span className="w-full h-[1px] bg-primary"></span>
                        </h5>
                        <p className="text-base text-normal text-secondary">
                            Programa voltado para o desenvolvimento de competências de liderança no sector público, capacitando...
                        </p>
                        <button onClick={()=>{setOpen(true)}}  className="flex items-center text-primary font-semibold mt-2">
                            <span>saber mais</span> <ArrowRight className="inline-block w-4 h-4 ml-1" />
                        </button>
                    </div>
                    <div className="cursor-pointer flex flex-col justify-between h-[18rem]  px-6 gap-4 border-[1px] border-[#ddd] rounded-lg p-4 hover:bg-[#DFE8EA]">
                        <h5 className="text-sm font-bold text-secondary mb-2 uppercase flex flex-col gap-1">
                            <span>Análise de Dados</span>
                            <span className="w-full h-[1px] bg-primary"></span>
                        </h5>
                        <p className="text-base text-normal text-secondary">
                            Formação centrada na utilização de dados para apoiar decisões estratégicas, desenvolvendo compe...
                        </p>
                        <button onClick={()=>{setOpen(true)}} className="flex items-center text-primary font-semibold mt-2">
                            <span>saber mais</span> <ArrowRight className="inline-block w-4 h-4 ml-1" />
                        </button>
                    </div>
                    <div className="cursor-pointer flex flex-col justify-between h-[18rem]  px-6 gap-4 border-[1px] border-[#ddd] rounded-lg p-4 hover:bg-[#DFE8EA]">
                        <h5 className="text-sm font-bold text-secondary mb-2 uppercase flex flex-col gap-1">
                            <span>Gestão Estratégica</span>
                            <span className="w-full h-[1px] bg-primary"></span>
                        </h5>
                        <p className="text-base text-normal text-secondary">
                            Formação orientada para o planeamento, gestão e implementação de estratégias institucionais, fortalecendo a capac...
                        </p>
                        <button onClick={()=>{setOpen(true)}}  className="flex items-center text-primary font-semibold mt-2">
                            <span>saber mais</span> <ArrowRight className="inline-block w-4 h-4 ml-1" />
                        </button>
                    </div>

                </div>
            </div>

            <ModalComponent 
                open={open}
                onClose={()=>setOpen(false)}
                image={imgHero}
                title="LIDERANÇA PúBLICA"
                paragraph1="O eQuadros é a plataforma tecnológica nacional para registro, gestão e valorização do capital humano em Angola"
                paragraph2="Através de inteligência de dados e integração instituicional, o sistema permite indentificar competências, apoiar decisões estratégicas e fortalecer a gestão de quadros no sector público e privado."
            />
        </div>

    );
}