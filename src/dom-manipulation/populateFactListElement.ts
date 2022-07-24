import { IChuckNorrisFact } from "../fetch";
import getFactFilled from "./getFactFilled";

/**
 * Receive the fact and populate the DOM
 *
 * @export
 * @param {IChuckNorrisFact} fact
 */
export default function populateFactListElement(fact: IChuckNorrisFact) {
  (<HTMLElement>document.querySelector("#list-results")!).innerHTML +=
    getFactFilled(fact);
}
