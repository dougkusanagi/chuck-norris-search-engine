import { IChuckNorrisFact } from "../fetch";
import categoryListToString from "../utils/categoryListToString";
import { getFactWithHighlights } from "./dom";

/**
 * Receive the fact and return a HTMLElement containing the fact
 *
 * @param {string} fact
 * @return {string}
 */
export default function getFactFilled(fact: IChuckNorrisFact): string {
  return `
    <div class="flex flex-col w-full py-6 items-center justify-center fact-container">
      <p class="text-slate-600 dark:text-slate-300 font-bad-script text-2xl text-center paragraph-fact-content">❝ ${getFactWithHighlights(
        fact.value
      )} ❞</p>

      <p class="flex mt-3">
        <span class="flex items-center mr-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
          </svg>
          <a href="${
            fact.url
          }" class="font-bold hover:text-orange-300 transition-all link-to-fact">API Website</a>
        </span>
        <span class="flex items-center ">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
          <span class="span-category-list">${categoryListToString(
            fact.categories
          )}</span>
        </span>
      </p>
    </div>
  `;
}
