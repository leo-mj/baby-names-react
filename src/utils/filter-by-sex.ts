import { BabyData } from "./baby-interface";

export function filterBySex(baby: BabyData, sex: string): boolean {
  if (sex === "") {
    return true;
  }
  if (baby.sex === sex) {
    return true;
  }
  return false;
}
