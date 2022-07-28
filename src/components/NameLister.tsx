import { useState } from "react";
import babyData from "../data.json";
import { BabyData } from "../utils/baby-interface";
import { sortAlph } from "../utils/sort-alphabetically";
import { textInputFilter } from "../utils/text-input-filter";
import { filterBySex } from "../utils/filter-by-sex";
import { NamePresenter } from "./NamePresenter";
import styles from "./name-style.module.css";
import { FilterButtons } from "./FilterButtons";

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

      <section className={styles.body}>
        {filteredNameData.map((baby) => (
          <div key={baby.id} onClick={() => handleFavourites(baby)}>
            {NamePresenter(baby)}
          </div>
        ))}
      </section>
      <p>Favourites:</p>
      <section className={styles.body}>
        {prevFavourites.map((fav, i) => (
          <div key={i}>{NamePresenter(fav)}</div>
        ))}
      </section>
    </>
  );
}
