import { useState } from "react";
import { StaticImageData } from "next/image";
import { GoDotFill } from "react-icons/go";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "@/css/carousel.scss";
import CarouselSlide from "./slide";
import { getControlStylesBackground, getNextSlideIdx, getPrevSlideIdx } from "./utils";

export type CarouselSlide = {
  imgSrc: string | StaticImageData;
  content?: any;
};

type CarouselNavigationStyle = {
  style: "arrow" | "dot";
  hasBgColor: boolean;
};

type Props = {
  ariaLabel?: string;
  navigationStyle: CarouselNavigationStyle;
  slides: CarouselSlide[];
};

export default function Carousel(props: Props) {

  const { hasBgColor, style } = props?.navigationStyle;
  const { slides } = props;

  const [activeSlideIdx, setActiveSlideIdx] = useState(0);
  const { resting, hover } = getControlStylesBackground(style, hasBgColor)

  const leftButtonClicked = () => {
    const prevSlideIdx = getPrevSlideIdx(slides.length, activeSlideIdx);
    setActiveSlideIdx(prevSlideIdx);
  };

  const rightButtonClicked = () => {
    const nextSlideIdx = getNextSlideIdx(slides.length, activeSlideIdx);
    setActiveSlideIdx(nextSlideIdx);
  };

  return (
    <section aria-label={`carousel ${props?.ariaLabel}`}>
      <div className="carousel">
        <button
          onClick={leftButtonClicked}
          className={`carousel-button prev ${resting} ${hover}`}
        >
          <MdKeyboardArrowLeft />
        </button>
        <button
          onClick={rightButtonClicked}
          className={`carousel-button next ${resting} ${hover}`}
        >
          <MdKeyboardArrowRight />
        </button>
        <ul>
          {props?.slides.map(({ imgSrc, content }, idx) => {
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
  navigationStyle: {
    style: "arrow",
    hasBgColor: true,
  },
  slides: [],
};
