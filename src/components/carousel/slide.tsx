import Image, { StaticImageData } from "next/image";
import { FC, ReactNode } from "react"

type Props = {
  index: number;
  imgSrc: string | StaticImageData
  isActive: boolean;
  content?: any
}


const CarouselSlide: FC<Props> = ({ imgSrc, isActive, content }) => {

  const customAttribute = isActive ? { "data-active": true} : {};

  return (
    <li className={`slide`} {...customAttribute}>
      <Image src={imgSrc} alt="" unoptimized fill/>
      <div className="overlay">
        {content}
      </div>
    </li>
  )
}

export default CarouselSlide;