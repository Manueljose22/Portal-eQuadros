import type { News } from "../../../constants/news";



interface Props {
    news: News;
};


export default function NewsCard({ news }: Props) {
    return (
        <div className="relative rounded-xl overflow-hidden group cursor-pointer">

            <img
                src={news.image}
                className="w-full lg:w-[401px] lg:h-[400px] object-cover group-hover:scale-105 transition"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />

            <div className="absolute bottom-0 p-4 text-white">
                <h3 className="font-bold text-lg">{news.title}</h3>
                <p className="text-sm font-normal ">{news.description}</p>

                <button className=" mt-4 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                    Ler mais
                    <span>→</span>
                </button>
            </div>

        </div>
    );
}