/**
 * Receive and array of categories and return them as a string or none if the array is empty
 *
 * @export
 * @param {string[]} categoryList
 * @return {string}
 */
export default function categoryListToString(categoryList: string[]): string {
  return categoryList.join(", ") || "none";
}
