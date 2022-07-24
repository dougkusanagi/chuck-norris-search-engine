import { IChuckNorrisFact } from "../fetch";
import populateFactListElement from "./populateFactListElement";

/**
 * Receive the list of fetched facts array and populate the DOM
 *
 * @param {array} facts
 */
export default function populateAllFacts(facts: IChuckNorrisFact[]) {
  facts.map((fact) => populateFactListElement(fact));
}
