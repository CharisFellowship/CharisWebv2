import Image, { StaticImageData } from "next/image";
import "@/css/carousel.scss";

type Props = {
  children?: React.ReactNode;
  overlayStyle?: React.CSSProperties;
  imgSrc: string | StaticImageData;
};

export default function Carousel(props: Props) {
  return (
    <div className="carousel">
      <Image src={props?.imgSrc} alt="carousel image" fill unoptimized />
      <div style={props?.overlayStyle} className="overlay">
        {props?.children}
      </div>
    </div>
  );
}
