import {
  fetchQueryChuckNorrisApi,
  IResponseFetchChuck,
  fetchRandomChuckNorrisApi,
} from "./fetch";

import {
  toggleButtonFetch,
  getInputQuery,
  populateCountResult,
  toggleIconButtonRandomFact,
} from "./dom-manipulation/dom";
import populateAllFacts from "./dom-manipulation/populateAllFacts";
import prepareFetchQueryProcess from "./dom-manipulation/prepareFetchQueryProcess";
import populateRandomFactElement from "./dom-manipulation/populateRandomFactElement";
import hideRandomFactsWithAnimation from "./dom-manipulation/hideRandomFactsWithAnimation";

document
  .querySelector("#button-random-fact")!
  .addEventListener("click", startFetchRandomFact);
document
  .querySelector("#form-fetch-query")!
  .addEventListener("submit", startFetchQuery);

/**
 * Fetches a Chuck Norris facts based on the query and populate the DOM
 */
export async function startFetchQuery(event: any) {
  event.preventDefault();

  try {
    prepareFetchQueryProcess();
    const FACTS: IResponseFetchChuck = await fetchQueryChuckNorrisApi(
      getInputQuery()
    );

    populateCountResult(FACTS.total);
    populateAllFacts(FACTS.result);
    hideRandomFactsWithAnimation(FACTS.total);
  } catch (error: any) {}

  toggleButtonFetch();
}

/**
 * Fetches a Chuck Norris random fact and populate the DOM
 */
export async function startFetchRandomFact() {
  toggleIconButtonRandomFact();

  try {
    const RANDOM_FACT = await fetchRandomChuckNorrisApi();
    populateRandomFactElement(RANDOM_FACT);
  } catch (error) {}
  toggleIconButtonRandomFact();
}
startFetchRandomFact();
