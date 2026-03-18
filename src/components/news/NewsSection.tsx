import { AnimatePresence, motion } from "framer-motion"
import { useState } from "react"
import v1 from "../../../public/videos/video1.mp4"
import v2 from "../../../public/videos/video2.mp4"
import v3 from "../../../public/videos/video3.mp4"
import v4 from "../../../public/videos/video4.mp4"
import { Link } from "react-router-dom"







export default function NewsSection() {
  const [active, setActive] = useState(0)

  const videos = [
    {
      title: "Lorem ipsum metus pretium eu nulla...",
      description: "A plataforma nacional que conecta talento, dados e oportunidades para fortalecer a Administração Pública e o desenvolvimento estratégico de Angola.",
      src: v1,
    },
    {
      title: "Lorem ipsum metus pretium eu nulla...",
      description: "A plataforma nacional que conecta talento, dados e oportunidades para fortalecer a Administração Pública e o desenvolvimento estratégico de Angola.",
      src: v2,
    },
    {
      title: "Lorem ipsum metus pretium eu nulla...",
      description: "A plataforma nacional que conecta talento, dados e oportunidades para fortalecer a Administração Pública e o desenvolvimento estratégico de Angola.",
      src: v3,
    },
    {
      title: "Lorem ipsum metus pretium eu nulla...",
      description: "A plataforma nacional que conecta talento, dados e oportunidades para fortalecer a Administração Pública e o desenvolvimento estratégico de Angola.",
      src: v4,
    }
  ]

  return (
    <section className="bg-white py-16">

      <div className="max-w-7xl px-4 lg:px-12  mb-12">
        <h2 className="text-2xl lg:text-[36px] font-bold text-secondary">
          Notícias e <span className="text-primary">atualizações</span>
        </h2>
      </div>

      {/* container */}
      <div className="flex flex-col lg:flex-row gap-4 w-full">

        {videos.map((video, index) => {

          const isActive = index === active

          return (
            <motion.div
              key={index}
              layout
              initial={{
                opacity: 0,
                y: 40,
                filter: "blur(6px)"
              }}
              animate={{
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                flex: isActive ? 3 : 1
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative aspect-video cursor-pointer overflow-hidden  group shadow-md lg:min-h-[577px]"
            >

              {/* video */}
              <video
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                muted
                loop
                autoPlay={isActive}
              >
                <source src={video.src} type="video/mp4" />
              </video>

            
              <motion.div
                animate={{
                  background: isActive
                    ? "linear-gradient(to top, rgba(15,47,74,0.9), transparent)"
                    : "rgba(15,47,74,0.7)"
                }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0"
              />

              {/* conteúdo */}
              <AnimatePresence mode="wait">
                {isActive ? (
                  <motion.div
                    key="active"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.45 }}
                    className="absolute bottom-6 left-6 right-6 text-white"
                  >

                    <h3 className="text-lg lg:text-xl font-semibold mb-2">
                      {video.title}
                    </h3>

                    <p className="text-sm opacity-90 mb-4 max-w-md">
                      {video.description}
                    </p>

                    <Link to={"/noticias"} className="text-sm font-medium">
                      Saber mais →
                    </Link>

                  </motion.div>
                ) : (
                  <motion.div
                    key="inactive"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white"
                  >

                    <p className="text-xs font-medium truncate">
                      {video.title}
                    </p>

                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setActive(index)
                      }}
                      className="w-12 h-8 rounded-full border border-[#20A9E6] flex items-center justify-center hover:bg-white hover:text-[#0f2f4a] transition-all duration-300">
                      +
                    </button>

                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>
          )
        })}
      </div>
    </section>
  )
}