import { useState } from "react"


interface CardVideosProps {
    video: any;
    title?: string;
    className?: string
}




export const CardVideo = ({ video, title, className }: CardVideosProps) => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null)

    return (
        <>
            <div
                onClick={() => setActiveVideo(video)}
                className={`${className} relative w-full lg:w-[295px] h-[200px] cursor-pointer group overflow-hidden rounded-lg`}
            >
                {/* para renderizar vídeo */}
                {/* 
                    <video
                        className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        muted
                        loop
                    >
                        <source src={video} type="video/mp4" />
                    </video>
                */}

                <img
                    src={video}
                    alt="Imagem video"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center text-white">
                <p className="text-xs font-medium max-w-[80%]">{title}</p>
              </div>

                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full text-white bg-red-600/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        ▶
                    </div>
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

                        {/* Para renderizar video */}

                        {/* <video controls autoPlay className="w-full rounded-lg">
                            <source src={activeVideo} type="video/mp4" />
                        </video> */}
                        <img src={activeVideo} alt="video" className="w-[500px] h-[500px] rounded-lg" />
                    </div>
                </div>
            )}

        </>
    )
}
