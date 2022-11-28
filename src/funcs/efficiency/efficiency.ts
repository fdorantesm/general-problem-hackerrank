import { multiply } from "../../utils/array-multiply";
import { arrayPair } from "../../utils/array-pairs";

export function getTotalEfficiency(skill: number[]): number {
  const teamA = arrayPair(skill, "odd");
  const teamB = arrayPair(skill, "even");

  const efficienceA = multiply(teamA);
  const efficienceB = multiply(teamB);

  return efficienceA + efficienceB;
}
