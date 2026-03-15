import { Alarm, Handshake, UsersThree } from "phosphor-react";
import AvatarStar from "./avatars";
import { Link } from "react-router-dom";



const checkItems = [
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut", icon: <UsersThree weight="fill" className="w-5 h-5 text-[#20A9E6]" /> },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut", icon: <Handshake weight="fill" className="w-5 h-5 text-[#20A9E6]" /> },
    { text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut", icon: <Alarm weight="fill" className="w-5 h-5 text-[#20A9E6]" /> },
];

export default function EcosystemSection() {
    return (
        <section className="bg-[#FBFBFB]  py-10 px-8 mt-10 lg:mt-16">
            <div className="px-4 lg:px-[100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-[4rem] items-center justify-between">

                <div className="lg:w-1/2 w-full">
                    <AvatarStar />
                </div>

                <div className="">
                    <h2 className="text-2xl md:text-[36px] font-bold text-secondary mb-4 leading-snug">
                        Um ecossistema de <br />
                        <span className="text-primary">profissionais Angolanos</span>
                    </h2>

                    <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-6">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                        ad minim veniam, quis Lorem ipsum dolor sit amet,
                    </p>

                    <div className="space-y-4 mb-6">
                        {checkItems.map((item, i) => (
                            <div key={i} className="flex items-start bg-[#ffff] gap-3 rounded-md p-2  ">
                                <div className="w-7 h-7 rounded-full  flex items-center justify-center flex-shrink-0 mt-0.5">
                                    {item.icon}
                                </div>
                                <p className="text-sm md:text-sm text-primary leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>

                    <Link to="#" className="px-5 py-2.5 border border-[#1E3A5F] text-secondary text-sm md:text-base font-medium rounded-md  transition-colors inline-flex items-center gap-2">
                        Saber mais <span className="text-base">↗</span>
                    </Link>
                </div>

            </div>
        </section>
    );
}