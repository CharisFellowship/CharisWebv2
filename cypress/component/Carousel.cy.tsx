/// <reference types="cypress" />

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

  /*
  it("base renders correctly", () => {
    cy.mount(
      <Carousel
        slides={
          [
            {
              image: sampleImage,
              content: null
            }
          ]
        }
      />
    );
    cy.get("img").should("exist");
    cy.get("img").should("have.attr", "src").and("eq", sampleImage);
    cy.get(overlayClass).should("exist");
    cy.get(overlayClass).should("have.css", "background-color").and("eq", bgColorDefault);
  });
  */


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
