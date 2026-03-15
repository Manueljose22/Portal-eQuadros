import { Envelope, Phone } from "phosphor-react";
import imgLogo from "../../../public/logo.png";
import imgLogoGov from "../../../public/img/logo-gov.png";
import { Link } from "react-router-dom";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";






export default function Footer() {
    return (
        <footer className="bg-dark ">
            <div className="container-max">
                <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-12 mb-12 border-2 border-[#1E3A5F] px-6 lg:px-[100px] py-4 rounded-b-[5rem]">

                    <div className="flex justify-center lg:justify-start">
                        <img
                            className="h-14 object-contain"
                            src={imgLogo}
                            alt="Logo portal"
                        />
                    </div>

                    <ul className="flex flex-col sm:flex-row items-center gap-4 text-white text-center">
                        <li className="flex items-center gap-2 text-sm font-normal">
                            <Phone size={18} /> +244 933 549 678
                        </li>

                        <li className="flex items-center gap-2 text-sm font-normal">
                            <Envelope size={18} /> loremdhhd@gmail.com
                        </li>
                    </ul>

                    <ul className="flex items-center gap-3">
                        <li className="p-2 bg-white rounded-full text-black hover:scale-110 transition">
                            <Link to="/"><BiLogoFacebook /></Link>
                        </li>

                        <li className="p-2 bg-white rounded-full text-black hover:scale-110 transition">
                            <Link to="/"><BiLogoTwitter /></Link>
                        </li>

                        <li className="p-2 bg-white rounded-full text-black hover:scale-110 transition">
                            <Link to="/"><BiLogoInstagram /></Link>
                        </li>

                        <li className="p-2 bg-white rounded-full text-black hover:scale-110 transition">
                            <Link to="/"><BiLogoYoutube /></Link>
                        </li>
                    </ul>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 items-center px-6 lg:px-[100px]">
                    <div>
                        <h3 className="text-white text-xl font-semibold mb-4 uppercase">Inciativa</h3>
                        <p className="text-sm text-normal text-white leading-tight w-[80%]">
                            Iniciativa do Gabinete de Quadros do Presidente da República de Angola
                        </p>
                        <div className="mt-12">
                            <img src={imgLogoGov} alt="Logo do Governo" className="w-full max-w-[154px] h-[41px] object-contain mt-4" />
                        </div>
                    </div>
                    <div>
                        <h3 className="text-white text-base mb-4">Sobre</h3>
                        <ul className="text-sm text-normal text-white">
                            <li><Link to="#" className="hover:underline leading-loose">Notícias</Link></li>
                            <li><Link to="#" className="hover:underline leading-loose">Eventos</Link></li>
                            <li><Link to="#" className="hover:underline leading-loose">Banco Nacional de Angola</Link></li>
                            <li><Link to="#" className="hover:underline leading-loose">Oportunidades</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-white text-base mb-4">Sobre</h3>
                        <ul className="text-sm text-normal text-white">
                            <li><Link to="#" className="hover:underline leading-loose">Notícias</Link></li>
                            <li><Link to="#" className="hover:underline leading-loose">Eventos</Link></li>
                            <li><Link to="#" className="hover:underline leading-loose">Banco Nacional de Angola</Link></li>
                            <li><Link to="#" className="hover:underline leading-loose">Oportunidades</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="text-base mb-4 text-white">Lorem ipsum vulputate magna orci pulvinar </h5>
                        <div className="flex justify-between w-full overflow-hidden items-center rounded-full bg-white ">
                            <input
                                type="email"
                                placeholder="Adicionar email"
                                className="bg-white w-40 py-2 px-4 rounded-full bg-white placeholder:text-gray-500 border-0 focus:ring-2 focus:ring-blue-[#20A9E6] focus:outline-none"
                            />
                            <button className=" btn-primary text-white px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                                Enviar
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    )
}