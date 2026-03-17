

type JobCardProps = {
    type: string;
    title: string;
    description: string;
    status?: string;
};

export const JobCard = ({ type, title, description, status = "ACTIVO", }: JobCardProps) => {
    return (
        <div className="border border-slate-200 rounded-xl p-6 hover:shadow-md transition bg-white">

            <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-medium text-slate-500">
                    VAGA - {type}
                </span>
                <span className="text-xs font-semibold bg-blue-50 text-secondary px-3 py-1 rounded-full">
                    {status}
                </span>
            </div>

            <h3 className="font-semibold text-slate-800 text-lg mb-3">
                {title}
            </h3>

            <p className="text-base text-secondary leading-relaxed mb-6">
                {description}
            </p>

            <button className="text-blue-600 text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                Candidatar
                <span>→</span>
            </button>
        </div>
    );
}