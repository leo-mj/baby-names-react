import { BabyData } from "../utils/baby-interface";
import { NamePresenter } from "./NamePresenter";

interface FavouritesProps {
  favouriteList: BabyData[];
  handleDeleteFavourite(baby: BabyData): void;
}

export function AllFavourites(favouritesProps: FavouritesProps): JSX.Element {
  return (
    <>
      {favouritesProps.favouriteList.map((fav, i) => (
        <div key={i} onClick={() => favouritesProps.handleDeleteFavourite(fav)}>
          {NamePresenter(fav)}
        </div>
      ))}
    </>
  );
}
