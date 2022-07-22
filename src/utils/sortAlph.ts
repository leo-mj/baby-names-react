import { BabyData } from "./baby-interface";

export function sortAlph(nameData: BabyData[]): BabyData[] {
  return nameData.sort((a, b) => sortNames(a.name, b.name));
}

function sortNames(aName: string, bName: string): number {
  if (aName < bName) {
    return -1;
  }
  return 1;
}
