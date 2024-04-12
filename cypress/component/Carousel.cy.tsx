import Carousel from "@/components/carousel";

describe("Carousel", () => {
  before(() => {
    cy.viewport("macbook-15");
  });

  const overlayClass = ".overlay";
  const bgColorDefault = "rgba(0, 0, 0, 0.3)";
  const sampleImage = "/assets/slideshow1.jpg";

  it("basic renders correctly", () => {
    cy.mount(<Carousel imgSrc={sampleImage} />);
    cy.get("img").should("exist");
    cy.get("img").should("have.attr", "src").and("eq", sampleImage);
    cy.get(overlayClass).should("exist");
    cy.get(overlayClass).should("have.css", "background-color").and("eq", bgColorDefault);
  });
});
