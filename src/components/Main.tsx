import styles from "./name-style.module.css";
import { useState } from "react";
import babyData from "../data.json";
import { BabyData } from "../utils/baby-interface";
import { sortAlph } from "../utils/sort-alphabetically";
import { textInputFilter } from "../utils/text-input-filter";
import { filterBySex } from "../utils/filter-by-sex";
import { FilterButtons } from "./FilterButtons";
import { AllNames } from "./AllNames";
import { AllFavourites } from "./AllFavourites";
import { filterFavToDelete } from "../utils/filter-fav-to-delete";

const nameData: BabyData[] = babyData;
const sortedNameData: BabyData[] = sortAlph(nameData);

export function NameLister(): JSX.Element {
  const [text, setText] = useState("");
  const searchedNameData: BabyData[] = sortedNameData.filter((baby) =>
    textInputFilter(baby, text)
  );
  const [previousSex, setSex] = useState("");
  const handleBoyFilter = () => {
    setSex((previousSex) => (previousSex = "m"));
  };
  const handleGirlFilter = () => {
    setSex((previousSex) => (previousSex = "f"));
  };
  const handleFilterOff = () => {
    setSex((previousSex) => (previousSex = ""));
  };

  const filteredNameData: BabyData[] = searchedNameData.filter((baby) =>
    filterBySex(baby, previousSex)
  );

  const [prevFavourites, setFavourites] = useState<BabyData[]>(
    filteredNameData.filter((baby) => baby.name === "Leo (obviously)")
  );
  const handleFavourites = (baby: BabyData) => {
    setFavourites((prevFavourites) =>
      prevFavourites.includes(baby) ? prevFavourites : [baby, ...prevFavourites]
    );
  };

  const handleDeleteFavourite = (favToDelete: BabyData) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter((currentBaby) =>
        filterFavToDelete(currentBaby, favToDelete)
      )
    );
  };

  return (
    <>
      <p>Favourites:</p>
      <p>(click to delete from favourites)</p>
      <section id="favourite names" className={styles.body}>
        <AllFavourites
          favouriteList={prevFavourites}
          handleDeleteFavourite={handleDeleteFavourite}
        />
      </section>

      <section id="searchAndFilter">
        <input
          className={styles.search}
          value={text}
          onChange={(event) => {
            setText(event.target.value);
          }}
        />

        <section id="filter buttons">
          <FilterButtons
            handleFilterOff={handleFilterOff}
            handleGirlFilter={handleGirlFilter}
            handleBoyFilter={handleBoyFilter}
            activeFilter={previousSex}
          />
        </section>
      </section>

      <p>Names to pick from:</p>
      <p>(click to select as favourite)</p>
      <section id="all names" className={styles.body}>
        <AllNames
          nameData={filteredNameData}
          handleFavourites={handleFavourites}
        />
      </section>
    </>
  );
}
