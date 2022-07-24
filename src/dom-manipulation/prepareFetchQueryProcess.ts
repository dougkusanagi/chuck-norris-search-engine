import {
  clearCountResult,
  clearErrorElement,
  clearResultsList,
  toggleButtonFetch,
} from "./dom";

/**
 * Prepare for fetching facts from Chuck Norris API
 *
 * @export
 */
export default function prepareFetchQueryProcess() {
  toggleButtonFetch();
  clearResultsList();
  clearErrorElement();
  clearCountResult();
}
