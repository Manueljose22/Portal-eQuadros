import type { News } from "../../../constants/news";





export default function NewsListItem({ news }: { news: News }) {

    const colors = ["#ff9800", "#20E644", "#292D30", "#0B2A5B", "#B420E6"];
    const color = colors[(news.id - 1) % colors.length];

    return (
        <div className="flex gap-3 cursor-pointer items-center">
            <img
                src={news.image}
                className="w-full lg:max-w-[109px] h-[88px] object-cover rounded-lg flex-shrink-0"
            />

            <div className="w-full">
                <h4
                    style={{ color }}
                    className="text-sm font-medium leading-tight flex items-center gap-1"
                >
                    <div className={`w-[0.3rem] h-[1rem] bg-[${color}]`}></div>
                    {news.title}
                </h4>

                <p className="text-base text-secondary">
                    {news.description}
                </p>
            </div>

        </div>
    );
}