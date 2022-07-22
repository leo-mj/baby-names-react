import { BabyData } from "./baby-interface";

export function textInputFilter(baby: BabyData, text: string): boolean {
  const searchName: string = baby.name.substring(0, text.length);
  if (text.toLowerCase() === searchName.toLowerCase()) {
    return true;
  }
  return false;
}
