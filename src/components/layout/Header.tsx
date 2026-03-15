import { Link } from "react-router-dom";
import imgLogo from "../../../public/logo.png";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from "react-icons/bi";



export default function Header() {
    return (
        <header className="fixed py-4 top-0 left-0 w-full z-50 text-white ">
            <div className="container mx-auto flex  h-14 items-center justify-between px-4 lg:px-[100px] ">
                <Link to="/">
                    <img src={imgLogo} alt="Logo do portal" className=" h-12 object-contain" />
                </Link>

                <nav className="hidden md:flex items-center space-x-6 gap-5">
                    <Link to="/" >
                        Sobre
                    </Link>
                    <Link to="/">
                        Notiçias
                    </Link>
                    <Link to="/">
                        Eventos
                    </Link>
                    <Link to="/" >
                        Oportunidades
                    </Link>
                </nav>

                <div>
                    <ul className="flex items-center space-x-4 m-0 gap-3">
                        <li className="m-0 p-2 bg-white rounded-full text-black"><Link to="/"><BiLogoFacebook className="" /></Link></li>
                        <li className="m-0 p-2 bg-white rounded-full text-black"><Link to="/" ><BiLogoTwitter /></Link></li>
                        <li className="m-0 p-2 bg-white rounded-full text-black"><Link to="/" ><BiLogoInstagram /></Link></li>
                        <li className="m-0 p-2 bg-white rounded-full text-black"><Link to="/" ><BiLogoYoutube /></Link></li>
                    </ul>
                </div>
            </div>
        </header>
    )
}
