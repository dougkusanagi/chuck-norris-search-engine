jest.mock("../../src/dom-manipulation/populateFactListElement");
import populateFactListElement from "../../src/dom-manipulation/populateFactListElement";
import populateAllFacts from "../../src/dom-manipulation/populateAllFacts";

afterEach(() => {
  document.getElementsByTagName("html")[0].innerHTML = "";
});

describe("populateAllFacts()", () => {
  it("should receive a list of facts and call populateFactListElement() for each fact", () => {
    const FACT = {
      categories: [],
      created_at: "string",
      icon_url: "string",
      id: "string",
      updated_at: "string",
      url: "string",
      value: "Chuck",
    };
    const FACT_LIST = [FACT, FACT, FACT];
    (
      populateFactListElement as jest.MockedFunction<
        typeof populateFactListElement
      >
    ).mockImplementation((fact) => {
      return `<span>${fact.value}</span>`;
    });

    populateAllFacts(FACT_LIST);

    expect(populateFactListElement).toBeCalledTimes(3);
  });
});
