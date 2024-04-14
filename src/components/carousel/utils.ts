
/**
* Returns the index of the next slide, even if the
* slide is the last slide
* @param {number} slidesLength - Total number of slides to cycle through
* @param {number} currSlideIdx - The current index/position of the slide **before** the next slide index is generated
*
*/
export const getNextSlideIdx = (slidesLength: number, currSlideIdx: number): number => {

  const isLastIdx = currSlideIdx === (slidesLength - 1);

  if(isLastIdx){
    return 0;
  }

  return currSlideIdx+1;
}

export const getPrevSlideIdx = (slidesLength: number, currSlideIdx: number): number => {

  const isFirstIdx = currSlideIdx === 0;

  if(isFirstIdx){
    return slidesLength - 1;
  }

  return currSlideIdx-1;
}