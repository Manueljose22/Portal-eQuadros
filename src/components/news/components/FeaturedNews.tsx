import { FacebookRounded } from "@mui/icons-material";
import type { News } from "../../../constants/news";
import { InstagramLogo, LinkedinLogo,} from "phosphor-react";
import { BiWorld, BiX } from "react-icons/bi";







export default function FeaturedNews({ news }: { news: News }) {
    return (
        <div className="relative rounded-xl overflow-hidden">

            <img src={news.image} className="w-full lg:max-w-[819px] h-full lg:max-h-[513px] object-cover" />

            <div className="absolute inset-0 bg-slate-700/30" />

            <div className="absolute top-0 p-6 text-white">
                <ul className="flex flex-col items-center gap-3">
                    <li><FacebookRounded className="opacity-50" /></li>
                    <li><InstagramLogo className="opacity-50" size={20} weight="fill" /></li>
                    <li><LinkedinLogo className="opacity-50" size={20} weight="fill" /></li>
                    <li><BiX className="opacity-50" size={25} /></li>
                    <li><BiWorld className="opacity-50" size={20} /></li>
                </ul>
            </div>

            <div className="absolute bottom-0 p-6 text-white">

                <h5 className="text-base  text-white mb-4 leading-snug mt-4 flex gap-2">
                    <span className="flex gap-1 items-center"> <div className="w-[0.3rem] h-[1rem] bg-white"></div>{news.category}</span>
                </h5>

                <h2 className="text-lg font-bold">{news.title}</h2>
                <p className="text-sm ">{news.description}</p>
                <button className="text-primary mt-4 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all cursor-pointer">
                    Ler mais
                    <span>→</span>
                </button>
            </div>

        </div>
    );
}