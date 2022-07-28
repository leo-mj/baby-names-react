import { BabyData } from "./baby-interface";

export function filterFavToDelete(
  baby: BabyData,
  favToDelete: BabyData
): boolean {
  if (baby.name === "Leo (obviously)") {
    return true;
  } else if (baby.name !== favToDelete.name) {
    return true;
  }
  return false;
}
