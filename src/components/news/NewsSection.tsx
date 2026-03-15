
import { useState } from "react"
import v1 from "../../../public/videos/video1.mp4"
import v2 from "../../../public/videos/video2.mp4"
import v3 from "../../../public/videos/video3.mp4"
import v4 from "../../../public/videos/video4.mp4"






export default function NewsSection() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)
  const videos = [
    {
      title: "Lorem ipsum metus pretium eu nulla...",
      description: "A plataforma nacional que conecta talento, dados e oportunidades para fortalecer a Administração Pública e o desenvolvimento estratégico de Angola.",
      src: v1,
    },
    {
      title: "Lorem ipsum metus pretium eu nulla...",
      src: v2,
    },
    {
      title: "Lorem ipsum metus pretium eu nulla...",
      src: v3,
    },
    {
      title: "Lorem ipsum metus pretium eu nulla...",
      src: v4,
    }
  ]

  return (
    <section className="bg-white py-16 ">
      
      <div className="px-4 lg:px-[100px] mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-secondary">
          Notícias e <span className="text-primary">atualizações</span>
        </h2>
      </div>

      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-5">

        {/* Video destaque */}
        <div
          onClick={() => setActiveVideo(videos[0].src)}
          className="relative w-full lg:col-span-2 aspect-video cursor-pointer group overflow-hidden"
        >
          <video
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            muted
            loop
          >
            <source src={videos[0].src} type="video/mp4" />
          </video>

        
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2f4a]/90 to-transparent"></div>

        
          <div className="absolute bottom-6 left-6 text-white max-w-[80%]">
            <h3 className="text-lg lg:text-xl font-semibold mb-2">{videos[0].title}</h3>
            <p className="text-sm opacity-90 mb-4">{videos[0].description}</p>
            <button className="flex items-center gap-2 text-sm font-medium">Saber mais →</button>
          </div>

      
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
              ▶
            </div>
          </div>
        </div>

     
        <div className="flex gap-5 lg:flex-rows lg:col-span-2">
          {videos.slice(1).map((video, i) => (
            <div
              key={i}
              onClick={() => setActiveVideo(video.src)}
              className="relative w-full sm:w-[48%] lg:w-full aspect-video cursor-pointer group overflow-hidden"
            >
              <video
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                muted
                loop
              >
                <source src={video.src} type="video/mp4" />
              </video>

            
              <div className="absolute inset-0 bg-[#0f2f4a]/70 group-hover:bg-[#0f2f4a]/60 transition-colors"></div>

  
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white">
                <p className="text-xs font-medium max-w-[80%]">{video.title}</p>
                <div className="w-8 h-8 rounded-full border border-white flex items-center justify-center group-hover:bg-white group-hover:text-[#0f2f4a] transition-colors">
                  +
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Modal */}
      {activeVideo && (
        <div
          onClick={() => setActiveVideo(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl"
          >
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✕
            </button>

            <video controls autoPlay className="w-full rounded-lg">
              <source src={activeVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      )}
    </section>
  )
}