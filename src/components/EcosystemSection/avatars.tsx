import avatar1 from "../../../public/img/avatar1.png";
import avatar2 from "../../../public/img/avatar2.png";
import avatar3 from "../../../public/img/avatar3.png";
import avatar4 from "../../../public/img/avatar4.png";
import avatar5 from "../../../public/img/avatar5.png";
import avatar6 from "../../../public/img/avatar6.png";
import avatar7 from "../../../public/img/avatar7.png";
import avatar8 from "../../../public/img/avatar8.png";
import avatar9 from "../../../public/img/avatar9.png";
import avatar10 from "../../../public/img/avatar10.png";
import avatar11 from "../../../public/img/avatar11.png";
import avatar12 from "../../../public/img/avatar12.png";
import avatar13 from "../../../public/img/avatar13.png";
import avatar14 from "../../../public/img/avatar14.png";
import avatar15 from "../../../public/img/avatar15.png";
import avatar16 from "../../../public/img/avatar16.png";
import avatar17 from "../../../public/img/avatar17.png";
import avatar18 from "../../../public/img/avatar18.png";
import avatarCenter from "../../../public/img/avatar19.png";




const outerAvatars = [
  avatar1, avatar2, avatar3, avatar4, avatar5, avatar6,
  avatar7, avatar8, avatar9, avatar10, avatar11, avatar12
];

const middleAvatars = [
  avatar13, avatar14, avatar15, avatar16, avatar17, avatar18
];



function renderRing(avatars: string[], radius: number, size: number) {
 
  return avatars.map((img, i) => {
    const angle = (i / avatars.length) * 2 * Math.PI
    const x = Math.cos(angle) * radius
    const y = Math.sin(angle) * radius

    return (
      <img
        key={i}
        src={img}
        alt=""
        className="absolute rounded-full object-cover"
        style={{
          width: size,
          height: size,
          left: `calc(50% + ${x}px - ${size / 2}px)`,
          top: `calc(50% + ${y}px - ${size / 2}px)`
        }}
      />
    )
  })
}

export default function AvatarStar() {
  return (
    <div className="relative w-full max-w-[320px] mx-auto aspect-square sm:p-4 mt-5 lg:mt-12">

      {/* círculo externo (12) */}
      {renderRing(outerAvatars, 140, 30)}

      {/* círculo do meio (6) */}
      {renderRing(middleAvatars, 70, 30)}

      {/* centro */}
      <img
        src={avatarCenter}
        alt=""
        className="absolute rounded-full object-cover "
        style={{
          width: 30,
          height: 30,
          left: "calc(50% - 15px)",
          top: "calc(50% - 15px)"
        }}
      />

    </div>
  )
}


