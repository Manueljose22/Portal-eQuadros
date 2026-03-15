import StatCard from "./statCard";




export default function StatsSection() {
    return (
        <section className="bg-white h-full py-16 lg:px-24">
            <div className="container w-full lg:w-2/3   mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
                <StatCard value={50000} sinal="+" label="Quadros Registrados" />
                <StatCard value={100} sinal="%" label="Plataforma Digital" />
                <StatCard value={24} sinal="/7" label="Disponibilidade" />
                <StatCard value={200} sinal="+" label="Instituições Ligadas" />
            </div>
        </section>
    );
}