import { useState } from "react";
import babyData from "../data.json";
import { BabyData } from "../utils/baby-interface";
import { sortAlph } from "../utils/sort-alphabetically";
import { textInputFilter } from "../utils/text-input-filter";
import { filterBySex } from "../utils/filter-by-sex";
import styles from "./name-style.module.css";
import { FilterButtons } from "./FilterButtons";
import { AllNames } from "./AllNames";
import { AllFavourites } from "./AllFavourites";

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

  const [prevFavourites, setFavourites] = useState<BabyData[]>([]);
  const handleFavourites = (baby: BabyData) => {
    setFavourites((prevFavourites) => [baby, ...prevFavourites]);
  };

  const handleDeleteFavourite = (favouriteToDelete: BabyData) => {
    setFavourites((prevFavourites) =>
      prevFavourites.filter(
        (currentBaby) => currentBaby.name !== favouriteToDelete.name
      )
    );
  };

  return (
    <>
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

      <p>Names to pick from:</p>
      <section className={styles.body}>
        <AllNames
          nameData={filteredNameData}
          handleFavourites={handleFavourites}
        />
      </section>

      <p>Favourites:</p>
      <section className={styles.body}>
        <AllFavourites
          favouriteList={prevFavourites}
          handleDeleteFavourite={handleDeleteFavourite}
        />
      </section>
    </>
  );
}
