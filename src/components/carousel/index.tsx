import { useState } from "react";
import { StaticImageData } from "next/image";
import { GoDotFill } from "react-icons/go";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "@/css/carousel.scss";
import CarouselSlide from "./slide";
import { getNextSlideIdx, getPrevSlideIdx } from "./utils";

type CarouselSlide = {
  imgSrc: string | StaticImageData;
  content?: React.ReactNode;
};

type CarouselNavigationStyle = {
  style: "arrow" | "dot",
  hasBgColor: boolean;
}

type Props = {
  ariaLabel?: string;
  navigationStyle: CarouselNavigationStyle;
  slides: CarouselSlide[];
};

export default function Carousel(props: Props) {


  const [activeSlideIdx, setActiveSlideIdx] = useState(0);

  const arrowBgColorStyles = (props?.navigationStyle?.hasBgColor) ? "" : "!bg-none";

  const leftButtonClicked = () => {
    const prevSlideIdx = getPrevSlideIdx(props?.slides?.length, activeSlideIdx);
    setActiveSlideIdx(prevSlideIdx);
  };

  const rightButtonClicked = () => {
    const nextSlideIdx = getNextSlideIdx(props?.slides?.length, activeSlideIdx);
    setActiveSlideIdx(nextSlideIdx);
  };

  return (
    <section aria-label={`carousel ${props?.ariaLabel}`}>
      <div className="carousel">
        <button onClick={leftButtonClicked} className={`carousel-button prev ${arrowBgColorStyles}`}>
          <MdKeyboardArrowLeft />
        </button>
        <button onClick={rightButtonClicked} className={`carousel-button next ${arrowBgColorStyles}`}>
          <MdKeyboardArrowRight />
        </button>
        <ul>
          {props?.slides.map(({ imgSrc }, idx) => {
            return (
              <CarouselSlide
                imgSrc={imgSrc}
                index={idx}
                key={idx}
                isActive={idx === activeSlideIdx}
              />
            );
          })}
        </ul>
        <div className="overlay" />
      </div>
    </section>
  );
}

Carousel.defaultProps = {
  navigationStyle: {
    style: "arrow",
    hasBgColor: true
  },
  slides: []
};
