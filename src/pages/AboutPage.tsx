import imgLogoGov from "../../public/img/logo-gov.png";
import imgMapa from "../../public/img/angola-mapa.png";
import AboutSection from "../components/about/AboutSection";
import { CardItem } from "../components/card/CardItem";
import EcosystemSection from "../components/EcosystemSection/EcosystemSection";
import { HeroComponent } from "../components/hero/HeroComponent";






export default function AboutPage() {
    const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

    return (
        <div className="min-h-screen flex flex-col">
            <HeroComponent 
                title="Sobre a eQuadros"
                description="Lorem ipsum neque vitae malesuada sit nec in sagittis mauris diam nec mattis mattis integer id justo varius rhoncus dignissim semper urna malesuada tempor at sit lectus amet."
                searchShow={false}
            />
            <AboutSection type="page" />

            <div className="container-max bg-white px-4 lg:px-12">
                <h2 className="text-2xl lg:text-[36px] font-bold text-secondary mb-10 leading-snug mt-4">
                    Principais <span className="text-primary">Finalidades</span>
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 justify-between gap-12">
                    <div className=" grid grid-cols-1 lg:grid-cols-2 gap-8 w-full">
                        <CardItem
                            title="Registo Nacional de Quadros"
                            description="Criar uma base de dados estruturada e actualizada com informações sobre os profissionais e as suas competências."
                        />
                        <CardItem
                            title="Gestão e Monitorização do Capital Humano"
                            description="Permitir às instituições acompanhar o perfil, a evolução e a disponibilidade dos quadros."
                        />
                        <CardItem
                            title="Apoio à Tomada de Decisão"
                            description="Fornecer dados e análises que ajudem os decisores a planear políticas e estratégias de desenvolvimento de recursos humanos."
                        />
                        <CardItem
                            title="Identificação de Competências e Talentos"
                            description="Facilitar a identificação de profissionais qualificados para diferentes sectores e projectos nacionais."
                        />
                        <CardItem
                            title="Identificação de Competências e Talentos"
                            description="Facilitar a identificação de profissionais qualificados para diferentes sectores e projectos nacionais."
                        />
                        <CardItem
                            title="Promoção da Valorização Profissional"
                            description="Contribuir para o reconhecimento e melhor aproveitamento das capacidades dos profissionais angolanos."
                        />
                    </div>

                    <div className="mt-8 lg:mt-0">
                        <img 
                            src={imgMapa} alt="Imagem do mapa de Angola com pin" 
                            className="relative -top-12 -right-0 lg:-right-25 bg-blue-500"
                        />
                    </div>
                </div>
            </div>

            {/* Missão */}
            <div className="px-4 lg:px-12 my-20">
                <h2 className="text-2xl lg:text-[36px] text-center font-bold text-secondary mb-10 leading-snug mt-4">
                    Missão, Valores e <span className="text-primary">Visão</span>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-12">
                    <CardItem
                        title="Missão"
                        description="Ser a principal plataforma nacional de referência na gestão, valorização e desenvolvimento do capital humano em Angola, contribuindo para a construção de uma sociedade baseada no conhecimento, na competência e na inovação, capaz de impulsionar o crescimento sustentável do país."
                        bgColor="bg-primary p-4"
                        classTitle="text-white text-xl"
                        classDescription="text-[16px] text-white"
                    />

                    <CardItem
                        title="Visão"
                        description="Ser a principal plataforma nacional de referência na gestão, valorização e desenvolvimento do capital humano em Angola, contribuindo para a construção de uma sociedade baseada no conhecimento, na competência e na inovação, capaz de impulsionar o crescimento sustentável do país."
                        bgColor="bg-primary p-4"
                        classTitle="text-white text-xl"
                        classDescription="text-[16px] text-white"
                    />

                    <CardItem

                        title="Valores"
                        description="A plataforma destina-se a diferentes actores envolvidos na gestão e desenvolvimento do capital humano em Angola, nomeadamente:
                        
                        Instituições públicas
                        Empresas e organizações privadas
                        Universidades e instituições de ensino
                        Profissionais e quadros nacionais
                        Organizações de planeamento e desenvolvimento"
                        bgColor="bg-primary p-4"
                        classTitle="text-white text-xl"
                        classDescription="text-[16px] text-white"
                    />
                </div>
            </div>

            {/* Nossos Poios */}
            <div className="bg-primary px-4 lg:pl-12 lg:pr-9 py-20 mt-10 h-full ">
                <div className="relative grid grid-cols-1 lg:grid-cols-2 justify-between gap-12 items-center">
                    <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 w-full mb-8">
                        {items.map((item) => (
                            <img
                                key={item}
                                src={imgLogoGov}
                                alt="Logo apoiantes"
                                className="h-[43.44px] w-[160.23px]"
                            />
                        ))}
                    </div>

                    <div className="flex flex-col justify-between relative -top-13 ">
                        <h2 className="text-[32px] lg:text-[36px] font-bold text-white mb-12 leading-snug mt-4">
                            Nossos <span className="text-primary">Apoios</span>
                        </h2>

                        <div>
                            <p className="text-base text-white leading-relaxed mb-4">
                                Programa voltado para o desenvolvimento de competências de liderança no sector público, capacitando gestores e quadros técnicos a conduzirem equipas com eficácia, ética e visão
                            </p>
                            <p className="text-base text-white leading-relaxed">
                                estratégica. A formação aborda temas como liderança transformacional, gestão de pessoas, comunicação institucional, tomada de decisão e resolução de conflitos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Ecosistema */}
            <EcosystemSection bgColor="bg-white" showBtn={false} />
        </div>
    )
}