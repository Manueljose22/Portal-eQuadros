import { useState } from "react";
import { DesenvolvimentoDestaque, NegociosDestaque, newsData, newsVideos } from "../constants/news";
import NewsFilter from "../components/news/components/NewsFilter";
import FeaturedNews from "../components/news/components/FeaturedNews";
import NewsListItem from "../components/news/components/NewsListItem";
import NewsCard from "../components/news/components/NewsCard";
import { HeroComponent } from "../components/hero/HeroComponent";
import NewsVideoCard from "../components/news/components/NewsVideoCard";








export default function NewsPage() {
    const [activeCategory, setActiveCategory] = useState("Todas as categorias");

    const filtered = activeCategory === "Todas as categorias" ? newsData : newsData.filter((n) => n.category === activeCategory);
    const featured = filtered[0];

    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-12 py-10">
            <HeroComponent
                title="Notícias e atualizações"
                description="Lorem ipsum neque vitae malesuada sit nec in sagittis mauris diam nec mattis mattis integer id justo varius rhoncus dignissim semper urna malesuada tempor at sit lectus amet."
            />

            <NewsFilter
                active={activeCategory}
                setActive={setActiveCategory}
            />

            <div className="container mt-15">
                <h2 className="text-2xl lg:text-[36px] font-extrabold text-secondary mb-10 leading-snug mt-4 flex gap-2">
                    <span className="flex gap-2 items-center">Destaque  <div className="w-[0.3rem] h-[2rem] bg-primary"></div>
                    </span>  <span className="text-primary font-normal">Recentes</span>
                </h2>
            </div>

            {/* destaque */}
            <div className="grid lg:grid-cols-3 gap-6 mt-8">
                <div className="lg:col-span-2">
                    {featured && <FeaturedNews news={featured} />}
                </div>

                <div className="space-y-4">
                    {filtered.slice(1, 6).map((item) => (
                        <NewsListItem key={item.id} news={item} />
                    ))}
                </div>

            </div>

            {/*Negocios */}
            <div className="max-w-7xl mx-auto px-4 lg:px-12 py-10 m-8">
                <div className="w-full lg:max-w-sm">
                    <h2 className="text-[32px] lg:text-[36px] font-extrabold text-secondary mb-3 leading-snug mt-4 flex gap-2">
                        Lorem <span className="text-primary font-normal">Negócios</span>
                    </h2>
                    <p className="text-base text-secondary">
                        Lorem ipsum phasellus sem et lacus aliquet urna eu sapien lobortis mauris enim viverra.
                    </p>
                </div>


                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {NegociosDestaque.map((item) => (
                        <NewsCard key={item.id} news={item} />
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 lg:px-12py-10 m-8">
                <div className="grid lg:grid-cols-3 gap-6 mt-8 items-center">
                    <div className="flex flex-col gap-2">
                        <h4 className="text-[15px] text-green-600 font-medium leading-tight flex items-center gap-1">
                            <div className={`w-[0.3rem] h-[1rem] bg-[#20E644]`}></div>
                            Finanças
                        </h4>

                        <div className="flex flex-col gap-3 items-center">
                            <h2 className="text-lg text-secondary font-bold">
                                Lorem ipsum in vulputate amet  interdum  in vulputate ame
                            </h2>
                            <p className="text-sm text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <h2 className="text-lg text-secondary font-bold">
                                Lorem ipsum in vulputate amet  interdum  in vulputate ame
                            </h2>
                            <p className="text-sm text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            </p>
                        </div>
                        <div className="flex flex-col gap-3 items-center">
                            <h2 className="text-lg text-secondary font-bold">
                                Lorem ipsum in vulputate amet  interdum  in vulputate ame
                            </h2>
                            <p className="text-sm text-secondary">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-2">
                        {featured && <FeaturedNews news={featured} />}
                    </div>
                </div>
            </div>

            
            <div className="max-w-7xl mx-auto px-4 lg:px-12 py-10 m-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                    {DesenvolvimentoDestaque.map((item) => (
                        <NewsCard key={item.id} news={item} />
                    ))}
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6  py-10 m-8">
                <div className="w-full lg:max-w-sm">
                    <h2 className="text-2xl lg:text-[36px] font-extrabold text-secondary mb-3 leading-snug mt-4 flex gap-2">
                        Lorem <span className="text-primary font-normal">Negócios</span>
                    </h2>
                    <p className="text-base text-secondary">
                        Lorem ipsum phasellus sem et lacus aliquet urna eu sapien lobortis mauris enim viverra.
                    </p>
                </div>
                <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
                    { newsVideos.map((item)=>(
                        <NewsVideoCard key={item.id} title={item.title} video={item.video} />
                    ))

                    }
                </div>
            </div>


        </div>
    );
}