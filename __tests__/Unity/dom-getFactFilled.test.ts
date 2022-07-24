jest.mock("../../src/dom-manipulation/dom", () => {
  const originalModule = jest.requireActual("../../src/dom-manipulation/dom");

  return {
    __esModule: true,
    ...originalModule,
    getFactWithHighlights: jest.fn(),
  };
});
import { getFactWithHighlights } from "../../src/dom-manipulation/dom";
import getFactFilled from "../../src/dom-manipulation/getFactFilled";

afterEach(() => {
  document.getElementsByTagName("html")[0].innerHTML = "";
});

describe("getFactFilled()", () => {
  it("should receive a fact and return a string with a dom element filled by the fact", () => {
    const FACT = {
      categories: ["category-test"],
      created_at: "string",
      icon_url: "string",
      id: "string",
      updated_at: "string",
      url: "https://example.com",
      value: "Chuck",
    };
    (
      getFactWithHighlights as jest.MockedFunction<typeof getFactWithHighlights>
    ).mockImplementation((fact) => {
      return `<span>${fact}</span>`;
    });

    const RESULT = getFactFilled(FACT);
    document.body.innerHTML = RESULT;
    const FACT_VALUE = document.querySelector(
      ".paragraph-fact-content"
    )!.innerHTML;
    const FACT_LINK = document
      .querySelector(".link-to-fact")!
      .getAttribute("href");
    const FACT_CATEGORY = document.querySelector(
      ".span-category-list"
    )!.innerHTML;

    expect(FACT_VALUE).toBe("❝ <span>Chuck</span> ❞");
    expect(FACT_LINK).toBe("https://example.com");
    expect(FACT_CATEGORY).toBe("category-test");
  });
});
