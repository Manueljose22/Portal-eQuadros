

interface Props{
    video?: string;
    title: string;
}





export default function NewsVideoCard({video, title}: Props) {

    console.log(video);
    
    return (
        <div className="relative w-full sm:w-[48%] lg:w-[600px] lg:h-[460px] aspect-video cursor-pointer group overflow-hidden rounded-md px-4">
            <video
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 rounded-md"
                muted
                loop
                autoPlay
            >
                
                <source src={video} type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-[#0f2f4a]/70 group-hover:bg-[#0f2f4a]/60 transition-colors rounded-md"></div>

            <div className="absolute bottom-4  text-white">
                <p className="text-2xl lg:text-[32px] font-medium max-w-[80%]">{title}</p>
            </div>
        </div>
    )
}