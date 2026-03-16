import { HeroComponent } from "../components/hero/HeroComponent";
import imgE1 from "../../public/img/e1.jpg"
import imgE2 from "../../public/img/e2.jpg"
import imgE3 from "../../public/img/e3.jpg"
import imgPeople from "../../public/img/double-peolpe.jpg"
import { CardInfo } from "../components/card/CardInfo";
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { CardVideo } from "../components/card/CardVideo";
import v1 from "../../public/videos/video1.mp4"
import v2 from "../../public/videos/video2.mp4"
import v3 from "../../public/videos/video3.mp4"
import v4 from "../../public/videos/video4.mp4"
import img1 from "../../public/img/v1.jpg"
import img2 from "../../public/img/v2.jpg"
import img3 from "../../public/img/v3.jpg"
import img4 from "../../public/img/v4.jpg"
import img5 from "../../public/img/v5.jpg"
import imgM1 from "../../public/img/m1.jpg"
import imgM2 from "../../public/img/m2.jpg"
import imgM3 from "../../public/img/m3.jpg"
import { CardEvent } from "../components/card/CardEvent";







export default function EventsPage() {

    const videos = [
        {
            title: "Lorem ipsum amet duis commodo sollicitudin malesuada",
            src: v1,
        },
        {
            title: "Lorem ipsum amet duis commodo sollicitudin malesuada",
            src: v2,
        },
        {
            title: "Lorem ipsum amet duis commodo sollicitudin malesuada",
            src: v3,
        },
        {
            title: "Lorem ipsum amet duis commodo sollicitudin malesuada",
            src: v4,
        }
    ]

    return (
        <div className="min-h-screen flex flex-col">
            <HeroComponent
                title="Consultar Eventos"
                description="Lorem ipsum neque vitae malesuada sit nec in sagittis mauris diam nec mattis mattis integer id justo varius rhoncus dignissim semper urna malesuada tempor at sit lectus amet."
            />

            <div className="container-max px-4 lg:px-[100px] my-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 justify-between gap-10">
                    <CardInfo
                        img={imgE1}
                        title="Lorem ipsum amet duis commodo sollicitudin"
                    />
                    <CardInfo
                        img={imgE2}
                        title="Lorem ipsum amet duis commodo sollicitudin"
                    />
                    <CardInfo
                        img={imgE3}
                        title="Lorem ipsum amet duis commodo sollicitudin"
                    />
                </div>
            </div>

            <div className="bg-secondary px-4 lg:px-[100px] py-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center items-center">
                    <div>
                        <h2 className="text-[36px] font-bold text-secondary mb-14">
                            Lorem ipsum amet duis commodo sollicitudin malesuada vitae quis.
                        </h2>
                        <p className="text-secondary text-sm">Lorem ipsum vel sed dictumst semper mattis pellentesque lectus dictumst in aliquet ultrices et diam suspendisse lectus le</p>
                    </div>
                    <img
                        src={imgPeople}
                        alt="Imagem de um casal"
                        className="w-full lg:w-[610px] lg:h-[209] rounded-md"
                    />
                </div>
            </div>

            <div className="container-max px-4 lg:px-[100px] my-10">
                <div className="mb-10">
                    <h2 className="text-2xl md:text-[36px] font-bold text-secondary mb-4 leading-snug">
                        Últimos <span className="text-primary">Eventos</span>
                    </h2>
                    <p className="text-secondary text-base w-full lg:w-[25rem]">
                        Lorem ipsum phasellus sem et lacus aliquet urna eu sapien lobortis mauris enim viverra.
                    </p>
                </div>

                <div>
                    <Swiper
                        modules={[Autoplay]}
                        centeredSlides={false}
                        spaceBetween={40}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: true }}
                        breakpoints={{
                            0: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                            1200: { slidesPerView: 3 }
                        }}
                    >
                        {videos.map((item, index) => (
                            <SwiperSlide key={index}>

                                <div className="relative h-[222px] rounded-xl overflow-hidden group cursor-pointer">
                                    <video
                                        src={item.src}
                                        className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                                        muted
                                        loop
                                        autoPlay={false}
                                    />


                                    <div className="absolute inset-0 bg-[#0F2F4AE6] opacity-80 group-hover:opacity-70 transition"></div>

                                    <div className="absolute bottom-0 left-0 w-full flex items-center justify-center pb-4 z-10">
                                        <h3 className="text-white text-sm font-semibold text-start px-4">
                                            {item.title}
                                        </h3>
                                    </div>

                                </div>

                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>


            <div className="container-max px-4 lg:px-[100px] my-20 py-15 bg-secondary">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-15">
                    <CardVideo video={img1} />
                    <CardVideo video={img2} />
                    <CardVideo video={img3} />
                    <CardVideo video={img4} />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 mt-8 ">
                    <div className="flex flex-col gap-4">
                        <CardEvent 
                            img={imgM1}
                            title="Moda"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum"
                        />
                        <CardEvent 
                            img={imgM2}
                            title="Sociedade"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum"
                        />
                        <CardEvent 
                            img={imgM3}
                            title="Esportes"
                            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum"
                        />
                      
                    </div>
                    
                    <div className="w-full">
                        <CardVideo 
                            className="lg:w-[598px] h-[333px]"
                            video={img5} 
                            title="Lorem ipsum in vulputate amet  interdum  in vulput amet  interdum" />
                    </div>
                </div>
            </div>

        </div>
    )
}