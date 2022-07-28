import { BabyData } from "../utils/baby-interface";
import { NamePresenter } from "./NamePresenter";

interface AllNamesProps {
  nameData: BabyData[];
  handleFavourites(baby: BabyData): void;
}

export function AllNames(allNamesProps: AllNamesProps): JSX.Element {
  return (
    <>
      {allNamesProps.nameData.map((baby) => (
        <div key={baby.id} onClick={() => allNamesProps.handleFavourites(baby)}>
          {NamePresenter(baby)}
        </div>
      ))}
    </>
  );
}
