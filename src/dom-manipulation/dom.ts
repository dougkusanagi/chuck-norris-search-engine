// import { getFactFilled } from "./dom-integration";

/**
 * Return the string inside input field
 *
 * @export
 * @return {string}
 */
export function getInputQuery(): string | null {
  return (<HTMLInputElement>document.getElementById("input-query")).value;
}

/**
 * Populate error element with error(s) message(s)
 *
 * @export
 */
export function populateErrorElement(errorSpan: string) {
  (<HTMLElement>document.querySelector("#error-message")).innerHTML = errorSpan;
}

/**
 * Clear error element
 *
 * @export
 */
export function clearErrorElement() {
  (<HTMLElement>document.querySelector("#error-message")).innerHTML = "";
}

/**
 * Toggle icon inside button that get random fact between animated and static
 *
 * @export
 */
export function toggleIconButtonRandomFact() {
  (<HTMLElement>(
    document.querySelector("#button-random-fact svg")
  )).classList.toggle("animate-spin");
}

/**
 * Toggle icon inside button fetch between active and inactive
 *
 * @export
 */
export function toggleButtonFetch() {
  const ICON_BUTTON_FETCH_QUERY = <HTMLElement>(
    document.querySelector("#button-fetch-query .icon")!
  );
  ICON_BUTTON_FETCH_QUERY?.classList.toggle("hidden");
  ICON_BUTTON_FETCH_QUERY?.classList.toggle("flex");
  (<HTMLElement>(
    document.querySelector("#button-fetch-query .text")!
  )).classList.toggle("hidden");
}

/**
 * Empty the #list-results <div> element
 *
 * @export
 */
export function clearResultsList() {
  (<HTMLElement>document.querySelector("#list-results")).innerHTML = "";
}

/**
 * Receive a count of fetched facts array and populate the DOM
 *
 *  @param {number} total
 */
export function populateCountResult(total: number) {
  (<HTMLElement>(
    document.querySelector("#span-count-result")
  )).innerHTML = `${total} results found`;
}

/**
 * Clear the count result element
 *
 * @export
 */
export function clearCountResult() {
  (<HTMLElement>document.querySelector("#span-count-result")).innerHTML = "";
}

/**
 * Receive the fact and return it with the query highlighted
 *
 * @param {string} fact
 * @return {string}
 */
export function getFactWithHighlights(fact: string): string {
  const INPUT_TEXT_QUERY = <HTMLInputElement>(
    document.querySelector("#input-query")
  );

  const SPAN = fact.replace(
    new RegExp(INPUT_TEXT_QUERY.value, "i"),
    `<span class="highlighted">$&</span>`
  );

  return SPAN;
}

/**
 *  Hide the #section-random-fact element
 *
 * @export
 */
export function hideDivRandomFact() {
  const SECTION_RANDOM_FACT = <HTMLElement>(
    document.querySelector("#section-random-fact")
  );
  SECTION_RANDOM_FACT.classList.add("hidden");
}

/**
 * Fade out and then trigger the callback that hide the #section-random-fact <div> to free up space
 *
 * @export
 */
export function fadeOutDivRandomFact() {
  const SECTION_RANDOM_FACT = <HTMLElement>(
    document.querySelector("#section-random-fact")
  );
  SECTION_RANDOM_FACT.classList.add("opacity-0");
}

export function generateErrorElement(error: string) {
  return `<span class="error">${error}</span>`;
}
