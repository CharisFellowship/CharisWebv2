import Image, { StaticImageData } from "next/image";
import { FC } from "react"

type Props = {
  index: number;
  imgSrc: string | StaticImageData
  isActive: boolean;
}


const CarouselSlide: FC<Props> = ({ imgSrc, index, isActive }) => {

  const customAttribute = isActive ? { "data-active": true} : {};

  return (
    <li className={`slide slide-${index}`} {...customAttribute}>
      <Image src={imgSrc} alt="" unoptimized width={800} height={500}/>
    </li>
  )
}

export default CarouselSlide;