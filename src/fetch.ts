import {
  generateErrorElement,
  populateErrorElement,
} from "./dom-manipulation/dom";

export interface IChuckNorrisFact {
  categories: string[];
  created_at: string;
  icon_url: string;
  id: string;
  updated_at: string;
  url: string;
  value: string;
}

export interface IErrorResponseFetchChuckNorris {
  timestamp: string;
  status: number;
  error: string;
  message: string;
  violations: object;
}

export interface IResponseFetchChuck {
  total: number;
  result: [IChuckNorrisFact];
}

export function prepareDispatchErrors(
  errorResponse: IErrorResponseFetchChuckNorris
) {
  const VIOLATIONS_RESPONSE = errorResponse.violations;

  let violationsElements: string = "";
  for (const [, violationValue] of Object.entries(VIOLATIONS_RESPONSE)) {
    violationsElements += generateErrorElement(violationValue);
  }

  populateErrorElement(violationsElements);
}

/**
 * Receive the query string, fetches a list of facts based on it and returns a promise with the results
 *
 * @param {string} query
 * @return {Promise<json>}
 */
export async function fetchQueryChuckNorrisApi(
  query: string | null
): Promise<IResponseFetchChuck> {
  const RESPONSE = await fetch(
    `https://api.chucknorris.io/jokes/search?query=${query}`
  );

  if (!RESPONSE.ok) {
    const message = `An error has occurred: ${RESPONSE.status}`;
    console.log(message);
  }

  const FACTS = await RESPONSE.json();

  if (FACTS.error) {
    prepareDispatchErrors(FACTS);
    throw new Error(FACTS);
  }

  return FACTS;
}

/**
 * Fetches a random fact and returns a promise with the result
 *
 * @return {Promise<json>}
 */
export async function fetchRandomChuckNorrisApi() {
  const RESPONSE = await fetch(`https://api.chucknorris.io/jokes/random`);

  if (!RESPONSE.ok) {
    const message = `An error has occurred: ${RESPONSE.status}`;
    throw new Error(message);
  }

  const FACT = await RESPONSE.json();

  if (FACT.error) {
    prepareDispatchErrors(FACT);
    throw new Error(FACT);
  }

  return FACT;
}
