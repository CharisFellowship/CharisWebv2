import "@/css/carousel.scss";
import { useState } from "react";
import { StaticImageData } from "next/image";
import { GoDotFill } from "react-icons/go";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import CarouselSlide from "./slide";
import { FC, ReactNode } from "react";
import { getControlStylesBackground, getNextSlideIdx, getPrevSlideIdx } from "./utils";

export type CarouselSlide = {
  imgSrc: string | StaticImageData;
  content?: any;
};

export type CarouselNavigationStyle = {
  style: "arrow" | "dot";
  hasBgColor: boolean;
};

type Props = {
  ariaLabel?: string;
  navigationStyle: CarouselNavigationStyle;
  slides: CarouselSlide[];
};

const Carousel: FC<Props> = ({ slides, navigationStyle, ariaLabel}) => {
  
  const { hasBgColor, style } = navigationStyle;

  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const { resting, hover } = getControlStylesBackground(style, hasBgColor);

  const goToPreviousSlide = () => {
    const prevSlideIdx = getPrevSlideIdx(slides.length, activeSlideIdx);
    setActiveSlideIdx(prevSlideIdx);
  };

  const goToNextSlide = () => {
    const nextSlideIdx = getNextSlideIdx(slides.length, activeSlideIdx);
    setActiveSlideIdx(nextSlideIdx);
  };

  return (
    <section aria-label={`carousel ${ariaLabel}`}>
      <div className="carousel">
        {style === "arrow" && (
          <button
            onClick={goToPreviousSlide}
            className={`carousel-button prev ${resting} ${hover}`}
          >
            <MdKeyboardArrowLeft />
          </button>
        )}
        {style === "arrow" && (
          <button onClick={goToNextSlide} className={`carousel-button next ${resting} ${hover}`}>
            <MdKeyboardArrowRight />
          </button>
        )}
        <ul>
          {slides.map(({ imgSrc, content }, idx) => {
            return (
              <CarouselSlide
                imgSrc={imgSrc}
                index={idx}
                content={content}
                isActive={idx === activeSlideIdx}
                key={idx}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}

Carousel.defaultProps = {
  ariaLabel: "",
  navigationStyle: {
    style: "arrow",
    hasBgColor: true,
  },
  slides: [],
};

export default Carousel;