import {
  getInputQuery,
  populateErrorElement,
  clearErrorElement,
  toggleIconButtonRandomFact,
  hideDivRandomFact,
  clearResultsList,
  populateCountResult,
  clearCountResult,
  getFactWithHighlights,
  fadeOutDivRandomFact,
  generateErrorElement,
} from "../../src/dom-manipulation/dom";
import categoryListToString from "../../src/utils/categoryListToString";

afterEach(() => {
  document.getElementsByTagName("html")[0].innerHTML = "";
});

describe("getInputQuery()", () => {
  it("should return the input query value", () => {
    const INPUT_QUERY_ELEMENT = document.createElement("input");
    INPUT_QUERY_ELEMENT.setAttribute("id", "input-query");
    INPUT_QUERY_ELEMENT.value = "Chuck";
    document.body.appendChild(INPUT_QUERY_ELEMENT);

    const RESPONSE = getInputQuery();

    expect(RESPONSE).toBe("Chuck");
  });

  it("should return a empty string", () => {
    const INPUT_QUERY_ELEMENT = document.createElement("input");
    INPUT_QUERY_ELEMENT.setAttribute("id", "input-query");
    document.body.appendChild(INPUT_QUERY_ELEMENT);

    const RESPONSE = getInputQuery();

    expect(RESPONSE).toBe("");
  });
});

describe("populateErrorElement()", () => {
  it("should replace the current #error-message content by the given param", () => {
    const DIV_ERROR_MESSAGE = document.createElement("div");
    DIV_ERROR_MESSAGE.setAttribute("id", "error-message");
    document.body.appendChild(DIV_ERROR_MESSAGE);

    populateErrorElement("Chuck");
    const DIV_ERROR_MESSAGE_CONTENT =
      document.getElementById("error-message")!.innerHTML;

    expect(DIV_ERROR_MESSAGE_CONTENT).toBe("Chuck");
  });

  it("should replace the current #error-message content by empty string", () => {
    const DIV_ERROR_MESSAGE = document.createElement("div");
    DIV_ERROR_MESSAGE.setAttribute("id", "error-message");
    document.body.appendChild(DIV_ERROR_MESSAGE);

    populateErrorElement("");
    const DIV_ERROR_MESSAGE_CONTENT =
      document.getElementById("error-message")!.innerHTML;

    expect(DIV_ERROR_MESSAGE_CONTENT).toBe("");
  });
});

describe("clearErrorElement()", () => {
  it("should empty the #error-message element", () => {
    const DIV_ERROR_MESSAGE = document.createElement("div");
    DIV_ERROR_MESSAGE.setAttribute("id", "error-message");
    DIV_ERROR_MESSAGE.innerHTML = "Chuck";
    document.body.appendChild(DIV_ERROR_MESSAGE);

    clearErrorElement();
    const DIV_ERROR_MESSAGE_CONTENT =
      document.getElementById("error-message")!.innerHTML;

    expect(DIV_ERROR_MESSAGE_CONTENT).toBe("");
  });
});

describe("toggleIconButtonRandomFact()", () => {
  it("should add the class .animate-spin of the icon inside of #button-random-fact if it is not present", () => {
    const BUTTON = document.createElement("button");
    BUTTON.setAttribute("id", "button-random-fact");
    BUTTON.appendChild(document.createElement("svg"));
    document.body.appendChild(BUTTON);

    toggleIconButtonRandomFact();
    const HAS_CLASS = document
      .querySelector("#button-random-fact svg")!
      .classList.contains("animate-spin");

    expect(HAS_CLASS).toBeTruthy();
  });

  it("should remove the class .animate-spin of the icon inside of #button-random-fact if it is present", () => {
    const BUTTON = document.createElement("button");
    BUTTON.setAttribute("id", "button-random-fact");
    const ICON = document.createElement("svg");
    ICON.classList.add("animate-spin");
    BUTTON.appendChild(ICON);
    document.body.appendChild(BUTTON);

    toggleIconButtonRandomFact();
    const HAS_CLASS = document
      .querySelector("#button-random-fact svg")!
      .classList.contains("animate-spin");

    expect(HAS_CLASS).toBeFalsy();
  });
});

describe("hideDivRandomFact()", () => {
  it("should add a .hidden class to the #section-random-fact <section>", () => {
    const SECTION_RANDOM = document.createElement("section");
    SECTION_RANDOM.setAttribute("id", "section-random-fact");
    document.body.appendChild(SECTION_RANDOM);

    hideDivRandomFact();
    const HAS_CLASS = document
      .querySelector("#section-random-fact")!
      .classList.contains("hidden");

    expect(HAS_CLASS).toBeTruthy();
  });
});

describe("clearResultsList()", () => {
  it("should empty the #list-results <div>", () => {
    const DIV = document.createElement("div");
    DIV.setAttribute("id", "list-results");
    DIV.innerHTML = "Chuck";
    document.body.appendChild(DIV);

    clearResultsList();
    const DIV_AFTER = document.querySelector("#list-results")!.innerHTML;

    expect(DIV_AFTER).toBeFalsy();
  });
});

describe("populateCountResult()", () => {
  it("should fill the #span-count-result <span> with the number of results with a text", () => {
    const SPAN = document.createElement("span");
    SPAN.setAttribute("id", "span-count-result");
    document.body.appendChild(SPAN);

    populateCountResult(999);
    const SPAN_AFTER = document.querySelector("#span-count-result")!.innerHTML;

    expect(SPAN_AFTER).toBe(`${999} results found`);
  });
});

describe("clearCountResult()", () => {
  it("should empty the #span-count-result <span>", () => {
    const SPAN = document.createElement("span");
    SPAN.setAttribute("id", "span-count-result");
    SPAN.innerHTML = "Chuck";
    document.body.appendChild(SPAN);

    clearCountResult();
    const SPAN_AFTER = document.querySelector("#span-count-result")!.innerHTML;

    expect(SPAN_AFTER).toBeFalsy();
  });
});

describe("getFactWithHighlights()", () => {
  it("should replace the query text inside the fact by a wrapped by a .highlighted <span>", () => {
    const INPUT_QUERY_ELEMENT = document.createElement("input");
    INPUT_QUERY_ELEMENT.setAttribute("id", "input-query");
    INPUT_QUERY_ELEMENT.value = "Chuck";
    document.body.appendChild(INPUT_QUERY_ELEMENT);

    const FACT_AFTER = getFactWithHighlights(
      "Chuck Norris can pass an eye exam blind folded"
    );

    expect(FACT_AFTER).toContain(`<span class="highlighted">Chuck</span>`);
  });
});

describe("FadeOutDivRandomFact()", () => {
  it("should add a .opacity-0 class to the #section-random-fact <section>", () => {
    const SECTION_RANDOM = document.createElement("section");
    SECTION_RANDOM.setAttribute("id", "section-random-fact");
    document.body.appendChild(SECTION_RANDOM);

    fadeOutDivRandomFact();
    const HAS_CLASS = document
      .querySelector("#section-random-fact")!
      .classList.contains("opacity-0");

    expect(HAS_CLASS).toBeTruthy();
  });
});

describe("generateErrorElement()", () => {
  it("should return an .error <span> containing the given string", () => {
    const SPAN_ERROR = generateErrorElement("Chuck never misses");

    expect(SPAN_ERROR).toBe(`<span class="error">Chuck never misses</span>`);
  });
});

describe("categoryListToString()", () => {
  it("should return an .error <span> containing the given string", () => {
    const SPAN_ERROR = categoryListToString(["category-test", "category-test"]);

    expect(SPAN_ERROR).toBe(`category-test, category-test`);
  });
});
