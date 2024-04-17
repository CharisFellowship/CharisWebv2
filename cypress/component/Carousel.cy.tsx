import Carousel, { CarouselSlide } from "@/components/carousel";

describe("Carousel", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
  });

  const overlayClass = ".overlay";
  const slideClass = ".slide";
  const arrowBtnClass = ".carousel-button";
  const overlayBgColor = "rgba(0, 0, 0, 0.15)";
  const btnBgColorResting = "rgba(0, 0, 0, 0.15)";
  const btnBgColorHover = "rgba(0, 0, 0, 0.4)";
  const leftBtnClass = ".prev";
  const rightBtnClass = ".next";
  const transparent = "rgba(0, 0, 0, 0)";
  const sampleImage = "/assets/slideshow1.jpg";
  const sampleImage2 = "/assets/slideshow2.jpg";
  const sampleImage3 = "/assets/slideshow3.jpg";

  describe("Arrow style", () => {
    const baseSlides: CarouselSlide[] = [
      {
        imgSrc: sampleImage,
      },
      {
        imgSrc: sampleImage2,
      },
      {
        imgSrc: sampleImage3,
      },
    ];

    it("base/simple component renders correctly", () => {
      cy.mount(<Carousel slides={baseSlides} />);

      cy.get(overlayClass).should("be.visible");
      cy.get(overlayClass).should("have.css", "background-color").and("eq", overlayBgColor);
      cy.get(slideClass).get("img").eq(0).invoke("attr", "src").and("eq", sampleImage);
      cy.get(slideClass).get("img").eq(1).invoke("attr", "src").and("eq", sampleImage2);
      cy.get(slideClass).get("img").eq(2).invoke("attr", "src").and("eq", sampleImage3);
      cy.get(arrowBtnClass).eq(0).should("have.css", "left").and("eq", "16px");
      cy.get(arrowBtnClass).eq(1).should("have.css", "right").and("eq", "16px");
    });

    it("base with arrows WITHOUT background color", () => {
      cy.mount(
        <Carousel
          navigationStyle={{
            style: "arrow",
            hasBgColor: false,
          }}
          slides={baseSlides}
        />
      );

      cy.get(arrowBtnClass).eq(0).should("have.css", "background-color").and("eq", transparent);
      cy.get(arrowBtnClass).eq(1).should("have.css", "background-color").and("eq", transparent);
    });

    it("base with arrows WITH background color", () => {
      cy.mount(
        <Carousel
          navigationStyle={{
            style: "arrow",
            hasBgColor: true,
          }}
          slides={baseSlides}
        />
      );

      cy.get(leftBtnClass).should("have.css", "background-color").and("eq", btnBgColorResting);
      cy.get(rightBtnClass).should("have.css", "background-color").and("eq", btnBgColorResting);

      /*
      when the previous button is hovered over, the background colour
      of the button should become a darker shade
    */
      cy.get(leftBtnClass)
        .realHover()
        .should("have.css", "background-color")
        .and("eq", "rgba(0, 0, 0, 0.5)");

      /*
      when the next button is hovered over, the colour
      of the icon should be a white
    */
      cy.get(`${rightBtnClass} > svg`)
        .realHover()
        .should("have.css", "color")
        .and("eq", "rgb(255, 255, 255)");

      /*
      when the next button is hovered over, the background-color
      of the button should be a darker shade
    */
      cy.get(rightBtnClass)
        .realHover()
        .should("have.css", "background-color")
        .and("eq", "rgba(0, 0, 0, 0.5)");

      /*
      when the next button is hovered over, the colour
      of the icon should be a white
    */
      cy.get(`${leftBtnClass} > svg`)
        .realHover()
        .should("have.css", "color")
        .and("eq", "rgb(255, 255, 255)");
    });

    it("base with CHILD content", () => {
      const HeaderComponent = () => <h2 style={{ color: "white" }}>Any old text</h2>;

      const baseSlidesWithContent: CarouselSlide[] = [...baseSlides];
      baseSlidesWithContent[0].content = <HeaderComponent />;

      cy.mount(<Carousel slides={baseSlidesWithContent} />);

      cy.get(slideClass).get("h2").eq(0).invoke("text").and("eq", "Any old text");
      cy.get(slideClass).get("h2").eq(0).should("have.css", "color").and("eq", "rgb(255, 255, 255)");
    });
  });
});
