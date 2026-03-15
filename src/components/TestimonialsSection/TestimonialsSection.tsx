
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import img1 from "../../../public/img/t1.jpg";
import img2 from "../../../public/img/t2.jpg";
import img3 from "../../../public/img/t3.jpg";




const testimonials = [
    {
        name: "LOURENÇO LOURENÇO",
        role: "CEO Lorem Ipsum",
        text: "Programa voltado para o desenvolvimento de competências de liderança no sector público, capacitando profissionais.",
        img: img1,
    },
    {
        name: "LOURENÇO LOURENÇO",
        role: "CEO Lorem Ipsum",
        text: "Programa voltado para o desenvolvimento de competências de liderança no sector público, capacitando profissionais.",
        img: img2,
    },
    {
        name: "LOURENÇO LOURENÇO",
        role: "CEO Lorem Ipsum",
        text: "Programa voltado para o desenvolvimento de competências de liderança no sector público, capacitando profissionais.",
        img: img3,
    }
]

export default function TestimonialsSection() {
    return (
        <section className="pb-20 lg:pt-8 bg-white">

            <div className="px-4 lg:px-[100px]">

                <h2 className="text-[36px] font-bold text-secondary mb-14">
                    Nossos <span className="text-primary">Testemunhos</span>
                </h2>

                <Swiper
                    modules={[Autoplay]}
                    centeredSlides={true}
                    spaceBetween={40}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1200: { slidesPerView: 3 }
                    }}
                >

                    {testimonials.map((item, index) => (
                        <SwiperSlide key={index}>

                            <div className="group h-[222px] flex items-center justify-center gap-5 bg-white  rounded-xl transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                                <img
                                    className="w-[199px] h-[222px] rounded-xl object-cover"
                                    src={item.img}
                                    alt={item.name}
                                />
                                <div>
                                    <h3 className="text-sm font-bold text-secondary">
                                        {item.name}
                                    </h3>

                                    <p className="text-xs text-tertiary font-normal mb-3">
                                        {item.role}
                                    </p>

                                    <div className="h-[1px] bg-gray-200 mb-3"></div>

                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {item.text}
                                    </p>

                                </div>

                            </div>

                        </SwiperSlide>
                    ))}

                </Swiper>

            </div>

        </section>
    )
}
