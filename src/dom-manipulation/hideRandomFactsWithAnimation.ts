import { fadeOutDivRandomFact, hideDivRandomFact } from "./dom";

export default function hideRandomFactsWithAnimation(factsCount: number): void {
  if (factsCount > 0) {
    fadeOutDivRandomFact();
    setTimeout(() => {
      hideDivRandomFact();
    }, 500);
  }
}
