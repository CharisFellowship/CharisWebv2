import Carousel from "@/components/carousel";

describe("Carousel", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
  });

  const overlayClass = ".overlay";
  const bgColorDefault = "rgba(0, 0, 0, 0.3)";
  const cssWhite = "rgb(255, 255, 255)";
  const sampleImage = "/assets/slideshow1.jpg";
  const sampleImage2 = "/assets/slideshow2.jpg";


  it("base with children renders correctly", () => {
    cy.mount(
      <Carousel
        slides={[
          {
            imgSrc: "/assets/slideshow1.jpg"
          },
          {
            imgSrc: "/assets/slideshow2.jpg"
          },
          {
            imgSrc: "/assets/slideshow3.jpg"
          }
        ]}
      />
    )
  });
});
