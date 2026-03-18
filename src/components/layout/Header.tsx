import { Link } from "react-router-dom";
import imgLogo from "../../../public/logo.png";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube, BiMenu } from "react-icons/bi";
import { useEffect, useState } from "react";
import { X } from "phosphor-react";


interface HeaderProps{
    bgColor?: string
}


export default function Header({bgColor}: HeaderProps) {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);
    const [scrollDir, setScrollDir] = useState("up")
    const [lastScrollY, setLastScrollY] = useState(0)

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setScrollDir("down")
            } else {
                if (currentScrollY < lastScrollY && currentScrollY < 50) {
                    setScrollDir("up")
                }

            }

            setLastScrollY(currentScrollY)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])


    const navLinks = [
        { href: "/sobre", label: "sobre" },
        { href: "/noticias", label: "Notícias" },
        { href: "/eventos", label: "Eventos" },
        { href: "/oportunidades", label: "Oportunidades" },
    ]

    return (
        <header className={`${bgColor} fixed top-0 left-0 w-full z-50 py-4 transition-transform duration-300 ${scrollDir === "down" ? "-translate-y-full" : "translate-y-0"}
      `}
        >
            <div className="container mx-auto flex  h-14 items-center justify-between max-w-7xl px-4 lg:px-12 ">
                <Link to="/">
                    <img src={imgLogo} alt="Logo do portal" className=" h-12 object-contain" />
                </Link>

                <nav className="hidden md:flex items-center space-x-6 gap-5">
                    <Link to="/sobre" className="text-[#d8d8d8] hover:text-[#FFF]">
                        Sobre
                    </Link>
                    <Link to="/noticias" className="text-[#d8d8d8] hover:text-[#FFF]">
                        Notiçias
                    </Link>
                    <Link to="/eventos" className="text-[#d8d8d8] hover:text-[#FFF]">
                        Eventos
                    </Link>
                    <Link to="/oportunidades" className="text-[#d8d8d8] hover:text-[#FFF]" >
                        Oportunidades
                    </Link>
                </nav>

                <div>
                    <ul className="hidden md:flex items-center space-x-4 m-0 gap-3">
                        <li className="m-0 p-2 bg-white rounded-full text-black bg-link-hover transition duration-300"><Link to="/"><BiLogoFacebook className="" /></Link></li>
                        <li className="m-0 p-2 bg-white rounded-full text-black bg-link-hover transition duration-300"><Link to="/" ><BiLogoTwitter /></Link></li>
                        <li className="m-0 p-2 bg-white rounded-full text-black bg-link-hover transition duration-300"><Link to="/" ><BiLogoInstagram /></Link></li>
                        <li className="m-0 p-2 bg-white rounded-full text-black bg-link-hover transition duration-300"><Link to="/" ><BiLogoYoutube /></Link></li>
                    </ul>
                </div>

                <button className="md:hidden text-muted-foreground" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X color="#fff" size={28} /> : <BiMenu color="#fff" size={28} />}
                </button>

                {/* Menu Mobile */}
                <div className={`md:hidden fixed top-0 left-0 h-[100vh] w-3/4 bg-primary text-white z-40 transform transition-transform duration-500 ease-in-out
                    ${menuOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"}`}>

                    <div className="pt-24 flex flex-col space-y-4 px-4">
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                to={href}
                                onClick={() => setMenuOpen(false)}
                                className="text-white font-medium text-lg hover:text-secondary transition-colors duration-200"
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </header>
    )
}
