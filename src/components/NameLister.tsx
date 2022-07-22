import { useState } from "react";
import babyData from "/home/2206-001-lm/Developer/academy/training/html-react/baby-names-react/src/data.json";
import { BabyData } from "../utils/baby-interface";
import { sortAlph } from "../utils/sortAlph";
import { textInputFilter } from "../utils/text-input-filter";
import { filterBySex } from "../utils/filter-by-sex";
import { NamePresenter } from "./NamePresenter";
import styles from "./name-style.module.css";

const nameData = babyData;
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

  return (
    <>
      <input
        className={styles.search}
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <button className={styles.filterbtn} onClick={handleFilterOff}>
        off
      </button>
      <button className={styles.filterbtn} onClick={handleGirlFilter}>
        f
      </button>
      <button className={styles.filterbtn} onClick={handleBoyFilter}>
        m
      </button>
      <p>
        {" "}
        active filter:{" "}
        <button className={styles.filterbtn}>
          {" "}
          {previousSex || "off"}{" "}
        </button>{" "}
      </p>
      <section className={styles.body}>
        {filteredNameData.map(NamePresenter)}{" "}
      </section>
    </>
  );
}
