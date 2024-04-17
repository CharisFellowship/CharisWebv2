import { getDotHeight, getDotWidth } from "../util";

describe("Dot util functions", () => {
  describe("getDotHeight() function", () => {
    it("should return h-2 for size 'sm'", () => {
      expect(getDotHeight("sm")).toBe("h-2");
    });

    it("should return h-3 for size 'md'", () => {
      expect(getDotHeight("md")).toBe("h-3");
    });

    it("should return h-4 for size 'lg'", () => {
      expect(getDotHeight("lg")).toBe("h-4");
    });

    it("should return h-2 for any other size", () => {
      expect(getDotHeight("random")).toBe("h-2");
    });
  });

  describe("getDotWidth() function", () => {
    const testsMap = {
      notHighlighted: [
        { key: "sm", value: "w-2" },
        { key: "md", value: "w-3" },
        { key: "lg", value: "w-4" },
        { key: "random", value: "w-2" },
      ],
      highlighted: [
        { key: "sm", value: "w-5" },
        { key: "md", value: "w-6" },
        { key: "lg", value: "w-7" },
        { key: "random", value: "w-5" },
      ],
    };

    describe("when IS NOT highlighted", () => {
      testsMap.notHighlighted.forEach(({ key, value }) => {
        it(`should return ${value} for size '${key}'`, () => {
          expect(getDotWidth(key, false)).toBe(value);
        });
      });
    });

    describe("when IS highlighted", () => {
      testsMap.highlighted.forEach(({ key, value }) => {
        it(`should return ${value} for size '${key}'`, () => {
          expect(getDotWidth(key, true)).toBe(value);
        });
      });
    })
  });
});
