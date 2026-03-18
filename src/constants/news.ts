import imgN1 from "../../public/img/n1.jpg"
import imgN2 from "../../public/img/n2.jpg"
import imgN3 from "../../public/img/n3.jpg"
import imgN4 from "../../public/img/n4.jpg"
import imgN5 from "../../public/img/n5.png"
import imgN6 from "../../public/img/n6.jpg"

import imgLN1 from "../../public/img/ln1.jpg"
import imgLN2 from "../../public/img/ln2.jpg"
import imgLN3 from "../../public/img/ln3.jpg"

// import imgCity from "../../public/img/city.jpg"

import imgN11 from "../../public/img/n11.jpg"
import imgN22 from "../../public/img/n22.jpg"
import imgN33 from "../../public/img/n33.jpg"



import v3 from "../../public/videos/video3.mp4"
import v4 from "../../public/videos/video4.mp4"












export type Category = "Todas as categorias" | "Negócios" | "Economia" | "Desporto" | "Sociedade" | "Cultura" | "Nacionais" | "Internacionais" | "eQuadros";




export type News = {
  id: number;
  title: string;
  description: string;
  image?: string;
  video?: any;
  category: Category;
};



export const newsData: News[] = [
  {
    id: 1,
    title: "Lorem ipsum amet",
    description: "Lorem ipsum in vulpu interdum  in vulputate amet  interdum",
    image: imgN1,
    category: "eQuadros",
  },
  {
    id: 2,
    title: "África",
    description: "Lorem ipsum in vulpu interdum  in vulputate amet  interdum",
    image: imgN2,
    category: "Nacionais",
  },
  {
    id: 3,
    title: "Finanças",
    description: "Lorem ipsum in vulpu interdum  in vulputate amet  interdum",
    image: imgN3,
    category: "Economia",
  },
  {
    id: 4,
    title: "Internacionais",
    description: "Lorem ipsum in vulpu interdum  in vulputate amet  interdum",
    image: imgN4,
    category: "Internacionais",
  },
  {
    id: 5,
    title: "Negócios",
    description: "Lorem ipsum in vulpu interdum  in vulputate amet  interdum",
    image: imgN5,
    category: "Negócios",
  },
  {
    id: 6,
    title: "Cultura",
    description: "Lorem ipsum in vulpu interdum  in vulputate amet  interdum",
    image: imgN6,
    category: "Cultura",
  },
  {
    id: 7,
    title: "Lorem ipsum in vulpu interdum  in vulputate amet  interdum",
    description: "Lorem ipsum in vulpu interdum  in vulputate amet  interdum",
    image: imgN6,
    category: "Economia",
  },
];

export const NegociosDestaque: News[] = [
  {
    id: 1,
    title: "Lorem ipsum amet duis commodo sollicitudin malesuada",
    description: "A plataforma nacional que conecta talento, dados e oportunidades para fortalecer a Administração Púb...",
    image: imgLN1,
    category: "Negócios",
  },
  {
    id: 2,
    title: "Lorem ipsum amet duis commodo sollicitudin malesuada",
    description: "A plataforma nacional que conecta talento, dados e oportunidades para fortalecer a Administração Púb...",
    image: imgLN2,
    category: "Negócios",
  },
  {
    id: 3,
    title: "Lorem ipsum amet duis commodo sollicitudin malesuada",
    description: "A plataforma nacional que conecta talento, dados e oportunidades para fortalecer a Administração Púb...",
    image: imgLN3,
    category: "Negócios",
  },
]


export const DesenvolvimentoDestaque: News[] = [
  {
    id: 1,
    title: "Desenvolvimento",
    description: "A plataforma nacional que conecta talento, dados e oportunidades para fortalecer a Administração Púb...",
    image: imgN22,
    category: "Sociedade",
  },
  {
    id: 2,
    title: "Desenvolvimento",
    description: "A plataforma nacional que conecta talento, dados e oportunidades para fortalecer a Administração Púb...",
    image: imgN11,
    category: "Sociedade",
  },
  {
    id: 3,
    title: "Desenvolvimento",
    description: "A plataforma nacional que conecta talento, dados e oportunidades para fortalecer a Administração Púb...",
    image: imgN33,
    category: "Sociedade",
  },
]


export const newsVideos: News[] = [
  {
    id: 1,
    title: "Lorem ipsum amet duis commodo sollicitudin malesuada",
    description: "A plataforma nacional que conecta talento, dados e oportunidades para fortalecer a Administração Púb...",
    video: v3,
    category: "Internacionais",
  },
  {
    id: 2,
    title: "Lorem ipsum amet duis commodo sollicitudin malesuada",
    description: "A plataforma nacional que conecta talento, dados e oportunidades para fortalecer a Administração Púb...",
    video: v4,
    category: "Internacionais",
  },
]