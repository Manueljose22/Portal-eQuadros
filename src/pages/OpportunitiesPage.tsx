import { useState } from "react";
import { JobCard } from "../components/card/JobCard";
import { HeroComponent } from "../components/hero/HeroComponent";



type JobType = "REMOTO" | "PRESENCIAL" | "ESTAGIO" | "MEIO_PERIODO";
type FilterType = JobType | "ALL";



export default function OpportunitiesPage() {
    const [activeFilter, setActiveFilter] = useState<FilterType>("ALL");
    const filters = [
        { label: "Todas as categorias", value: "ALL" },
        { label: "Presencial", value: "PRESENCIAL" },
        { label: "Remoto", value: "REMOTO" },
        { label: "Estágio", value: "ESTAGIO" },
        { label: "Meio período", value: "MEIO_PERIODO" },
    ];

    const jobs = [
        {
            type: "REMOTO" as JobType,
            title: "DESENVOLVEDOR WEG",
            description:
                "Formação orientada para o planeamento, gestão e implementação de estratégias institucionais, fortalecendo a capacidade organizacional.",
        },
        {
            type: "PRESENCIAL" as JobType,
            title: "ENFERMEIRO",
            description:
                "Formação orientada para o planeamento, gestão e implementação de estratégias institucionais, fortalecendo a capacidade organizacional.",
        },
        {
            type: "REMOTO" as JobType,
            title: "WEB DESIGN",
            description:
                "Formação orientada para o planeamento, gestão e implementação de estratégias institucionais, fortalecendo a capacidade organizacional.",
        },
        {
            type: "PRESENCIAL" as JobType,
            title: "TÉCNICO DE FRIO",
            description:
                "Formação orientada para o planeamento, gestão e implementação de estratégias institucionais, fortalecendo a capacidade organizacional.",
        },
        {
            type: "PRESENCIAL" as JobType,
            title: "ENFERMEIRO",
            description:
                "Formação orientada para o planeamento, gestão e implementação de estratégias institucionais, fortalecendo a capacidade organizacional.",
        },
        {
            type: "REMOTO" as JobType,
            title: "DESENVOLVEDOR WEG",
            description:
                "Formação orientada para o planeamento, gestão e implementação de estratégias institucionais, fortalecendo a capacidade organizacional.",
        },
        {
            type: "REMOTO" as JobType,
            title: "WEB DESIGN",
            description:
                "Formação orientada para o planeamento, gestão e implementação de estratégias institucionais, fortalecendo a capacidade organizacional.",
        },
        {
            type: "REMOTO" as JobType,
            title: "WEB DESIGN",
            description:
                "Formação orientada para o planeamento, gestão e implementação de estratégias institucionais, fortalecendo a capacidade organizacional.",
        }
    ];

    const filteredJobs = activeFilter === "ALL" ? jobs : jobs.filter((job) => job.type === activeFilter);


    return (
        <div className="min-h-screen">
            <HeroComponent
                title="Oportunidades de emprego"
                description="Lorem ipsum neque vitae malesuada sit nec in sagittis mauris diam nec mattis mattis integer id justo varius rhoncus dignissim semper urna malesuada tempor at sit lectus amet."
                searchShow={true}
            />

            <div className="max-w-7xl mx-auto px-4 lg:px-12 py-16">
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-10">

                    <div className="flex overflow-x-auto no-scrollbar gap-2 bg-slate-100 p-1 rounded-full w-full lg:w-auto">

                        {filters.map((filter) => (
                            <button
                                key={filter.value}
                                onClick={() => setActiveFilter(filter.value as FilterType)}
                                className={`whitespace-nowrap px-4 py-2 text-sm rounded-full transition ${activeFilter === filter.value ? "bg-black text-white" : "text-secondary hover:text-slate-900"}`}
                            >
                                {filter.label}
                            </button>
                        ))}

                    </div>

                    <button className="border text-secondary border-slate-300 px-5 py-2 rounded-full text-sm hover:bg-slate-50 w-full lg:w-auto">
                        Minhas candidaturas
                    </button>

                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredJobs.map((job, index) => (
                        <JobCard
                            key={index}
                            type={job.type}
                            title={job.title}
                            description={job.description}
                        />
                    ))}
                </div>


                {filteredJobs.length === 0 && (
                    <p className="text-center text-slate-400 mt-10">
                        Nenhuma vaga encontrada.
                    </p>
                )}
            </div>
        </div>

    )
}