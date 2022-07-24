jest.mock("../../src/dom-manipulation/dom");
jest.mock("../../src/dom-manipulation/getFactFilled");

import {
  toggleButtonFetch,
  clearCountResult,
  clearErrorElement,
  clearResultsList,
} from "../../src/dom-manipulation/dom";

import prepareFetchQueryProcess from "../../src/dom-manipulation/prepareFetchQueryProcess";
import getFactFilled from "../../src/dom-manipulation/getFactFilled";
import populateRandomFactElement from "../../src/dom-manipulation/populateRandomFactElement";
import populateFactListElement from "../../src/dom-manipulation/populateFactListElement";

afterEach(() => {
  jest.clearAllMocks();
});

describe("FadeOutDivRandomFact()", () => {
  it("should call toggleButtonFetch(), clearCountResult(), clearErrorElement() and clearResultsList()", () => {
    prepareFetchQueryProcess();

    expect(toggleButtonFetch).toBeCalledTimes(1);
    expect(clearCountResult).toBeCalledTimes(1);
    expect(clearErrorElement).toBeCalledTimes(1);
    expect(clearResultsList).toBeCalledTimes(1);
  });
});

describe("populateRandomFactElement()", () => {
  it("should receive a fact and populate #div-random-fact <div> with the given string passed to getFactFilled()", () => {
    const DIV = document.createElement("div");
    DIV.setAttribute("id", "div-random-fact");
    document.body.appendChild(DIV);
    const FACT = {
      categories: [],
      created_at: "string",
      icon_url: "string",
      id: "string",
      updated_at: "string",
      url: "string",
      value: "Chuck",
    };

    (
      getFactFilled as jest.MockedFunction<typeof getFactFilled>
    ).mockImplementation((fact) => {
      return `<span>${fact.value}</span>`;
    });

    populateRandomFactElement(FACT);
    const DIV_AFTER = document.getElementById("div-random-fact")!.innerHTML;

    expect(DIV_AFTER).toBe(`<span>Chuck</span>`);
  });
});

describe("populateFactListElement()", () => {
  it("should receive a fact and append it to #list-results <div> with the given string passed by getFactFilled()", () => {
    const DIV = document.createElement("div");
    DIV.setAttribute("id", "list-results");
    document.body.appendChild(DIV);
    const FACT = {
      categories: [],
      created_at: "string",
      icon_url: "string",
      id: "string",
      updated_at: "string",
      url: "string",
      value: "Chuck",
    };
    (
      getFactFilled as jest.MockedFunction<typeof getFactFilled>
    ).mockImplementation((fact) => {
      return `<span>${fact.value}</span>`;
    });

    populateFactListElement(FACT);
    const DIV_AFTER = document.getElementById("list-results")!.innerHTML;

    expect(getFactFilled).toBeCalled();
    expect(DIV_AFTER).toBe(`<span>Chuck</span>`);
  });
});
