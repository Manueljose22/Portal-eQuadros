






export default function FunctionalitiesSection() {

    return (
        <section className="bg-white my-8 card-bg-f">
            <div className="container mx-auto py-12 px-4 lg:px-[100px]">
                <h2 className="text-[32px] font-bold text-secondary mb-8 text-center">
                    Funcionalidades <span className="text-primary">Principais</span>
                </h2>

                <div className="flex flex-col items-center ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 justify-items-center">

                        <div className="w-full max-w-[295px] h-[160px] p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <h3 className="text-sm font-semibold mb-4 uppercase text-secondary">
                                Mapeamento de Quadros
                            </h3>
                            <p className="text-gray-700 text-base">
                                Identificação de competências em toda a Administração Pública.
                            </p>
                        </div>

                        <div className="w-full max-w-[295px] h-[160px] p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <h3 className="text-sm font-semibold mb-4 uppercase text-secondary">
                                Verificação Automática
                            </h3>
                            <p className="text-gray-700 text-base">
                                Validação digital de requisitos legais e académicos.
                            </p>
                        </div>

                        <div className="w-full max-w-[295px] h-[160px] p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <h3 className="text-sm font-semibold mb-4 uppercase text-secondary">
                                Inventário Nacional
                            </h3>
                            <p className="text-gray-700 text-base">
                                Base de dados centralizada de capital humano.
                            </p>
                        </div>

                        <div className="w-full max-w-[295px] h-[160px] p-6 rounded-lg shadow-md hover:shadow-lg transition">
                            <h3 className="text-sm font-semibold mb-4 uppercase text-secondary">
                                Políticas de Formação
                            </h3>
                            <p className="text-gray-700 text-base">
                                Planeamento estratégico de qualificação profissional.
                            </p>
                        </div>

                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 justify-items-center">

                        <div className="w-full max-w-[295px] h-[160px] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-sm font-semibold mb-4 uppercase text-secondary">Mobilidade de Quadros</h3>
                            <p className="text-gray-700 font-regular text-base">Facilita a mobilidade interinstitucional.</p>
                        </div>

                        <div className="w-full max-w-[295px] h-[160px] p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
                            <h3 className="text-sm font-semibold mb-4 uppercase text-secondary">Verificação Automática</h3>
                            <p className="text-gray-700 font-regular text-base">Validação digital de requisitos legais e académicos.</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}