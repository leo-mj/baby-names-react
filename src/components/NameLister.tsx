import { useState } from "react";
import babyData from "/home/2206-001-lm/Developer/academy/training/html-react/baby-names-react/src/data.json";
import { BabyData } from "../utils/baby-interface";
import { sortAlph } from "../utils/sortAlph";
import { textInputFilter } from "../utils/text-input-filter";
import { NamePresenter } from "./NamePresenter";
import styles from "./name-style.module.css";

const nameData = babyData;
const sortedNameData: BabyData[] = sortAlph(nameData);

export function NameLister(): JSX.Element {
  const [text, setText] = useState("");
  const searchedNameData: BabyData[] = sortedNameData.filter((baby) =>
    textInputFilter(baby, text)
  );
  console.log(text);
  console.log(searchedNameData);
  return (
    <>
      <input
        className={styles.search}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <section className={styles.body}>
        {searchedNameData.map(NamePresenter)}{" "}
      </section>
    </>
  );
}
