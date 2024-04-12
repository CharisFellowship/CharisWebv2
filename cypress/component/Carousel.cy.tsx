import Carousel from "@/components/carousel";

describe("Carousel", () => {
  beforeEach(() => {
    cy.viewport("macbook-15");
  });

  const overlayClass = ".overlay";
  const bgColorDefault = "rgba(0, 0, 0, 0.3)";
  const cssWhite = "rgb(255, 255, 255)";
  const sampleImage = "/assets/slideshow1.jpg";

  it("basic renders correctly", () => {
    cy.mount(<Carousel imgSrc={sampleImage} />);
    cy.get("img").should("exist");
    cy.get("img").should("have.attr", "src").and("eq", sampleImage);
    cy.get(overlayClass).should("exist");
    cy.get(overlayClass).should("have.css", "background-color").and("eq", bgColorDefault);
  });

  it("basic with children renders correctly", () => {
    const baseSampleText = `Sample Text`;
    const h1Text = `${baseSampleText} 1`;
    const h2Text = `${baseSampleText} 2`;
    const h3Text = `${baseSampleText} 3`;

    const overlayStyle: React.CSSProperties = { flexDirection: "column", alignItems: "center" };

    const CarouselWithContent = () => {
      return (
        <Carousel
          overlayStyle={overlayStyle}
          imgSrc={sampleImage}
        >
          <h1>{h1Text}</h1>
          <h2>{h2Text}</h2>
          <h3>{h3Text}</h3>
        </Carousel>
      );
    };

    cy.mount(<CarouselWithContent />);
    cy.get("h1").should("be.visible");
    cy.get("h1").should("have.text", h1Text).and("have.css", "color", cssWhite);

    cy.get("h2").should("be.visible");
    cy.get("h2").should("have.text", h2Text).and("have.css", "color", cssWhite);
    

    cy.get("h3").should("be.visible");
    cy.get("h3").should("have.text", h3Text).and("have.css", "color", cssWhite);;

    cy.get(overlayClass).should("have.css", "flex-direction").and("eq", overlayStyle.flexDirection);
    cy.get(overlayClass).should("have.css", "align-items").and("eq", overlayStyle.alignItems);
  });
});
