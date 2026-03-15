import imgCite from "../../../public/img/cidade.jpg"





export default function SystembenefitsSection() {
    return (
        <section className="bg-white mb-12">
            <div className=" mx-auto ">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12  ">
                    <div>
                        <img src={imgCite} alt="Eficiência Operacional" className=" w-full max-w-[809px] h-[400px] mb-4 rounded-r-lg" />
                    </div>

                    <div className="w-full flex flex-col  px-6 gap-1">
                        <h2 className="text-[36px] w-full lg:w-5/6 font-bold text-secondary mb-4">
                            Como o sistema <span className="text-primary">bebeficia Angola</span>
                        </h2>
                        <div className="space-y-4">
                            <div className="flex gap-4 mb-10">
                                <div className="w-[0.2rem] bg-primary rounded-full"></div>
                                <div>
                                    <h3 className="font-bold text-secondary text-[18px]">Profissionais</h3>
                                    <p className="text-sm text-foreground/60">Maior visibilidade de competências e oportunidades.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 mb-10">
                                <div className="w-[0.2rem] bg-primary rounded-full"></div>
                                <div>
                                    <h3 className="font-bold text-secondary text-[18px]">Instituições</h3>
                                    <p className="text-sm text-foreground/60">Ferramentas modernas de gestão de quadros.</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="w-[0.2rem] bg-primary rounded-full"></div>
                                <div>
                                    <h3 className="font-bold text-secondary text-[18px]">Estado</h3>
                                    <p className="text-sm text-foreground/60">Tomada de decisões baseada em dados.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )

}