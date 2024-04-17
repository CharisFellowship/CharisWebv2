import Dot from "@/components/carousel/dots/dot";

describe("Dot", () => {

  it("dot component renders correctly", () => {
    cy.mount(
      <div style={{ height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <Dot bgColor="black" size="md"/>
      </div>
    );
    cy.get(".rounded-full").should("have.css", "width").and("eq", "3px");
  });
})