import { IChuckNorrisFact } from "../fetch";
import getFactFilled from "./getFactFilled";

/**
 * Receive the random fact fetched on Chuck Norris API and populate the DOM
 *
 * @export
 * @param {IChuckNorrisFact} fact
 */
export default function populateRandomFactElement(fact: IChuckNorrisFact) {
  (<HTMLElement>document.querySelector("#div-random-fact")!).innerHTML =
    getFactFilled(fact);
}
