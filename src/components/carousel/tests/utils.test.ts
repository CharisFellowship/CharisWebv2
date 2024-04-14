import { getNextSlideIdx, getPrevSlideIdx } from "../utils";

describe('Utils', () => {

  describe('getNextSlideIdx()', () => {
    it('should return 2 when currIdx is 1', () => {
      const nextSlideIdx = getNextSlideIdx(5, 1);
      expect(nextSlideIdx).toBe(2);
    });
  
    it('should return 3 when currIdx is 2', () => {
      const nextSlideIdx = getNextSlideIdx(5, 2);
      expect(nextSlideIdx).toBe(3);
    });
  
    it('should return 0 when currIdx is last index', () => {
      const nextSlideIdx = getNextSlideIdx(5, 4);
      expect(nextSlideIdx).toBe(0);
    });
  })

  describe('getPrevSlideIdx()', () => {

    it('should return 0 when currIdx is 1', () => {
      const prevSlideIdx = getPrevSlideIdx(5, 1);
      expect(prevSlideIdx).toBe(0);
    });

    it('should return the last slide when currIdx is 0', () => {
      const prevSlideIdx = getPrevSlideIdx(5, 0);
      expect(prevSlideIdx).toBe(4);
    });

  });

})