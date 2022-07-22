import babyData from "/home/2206-001-lm/Developer/academy/training/html-react/baby-names-react/src/data.json";
import { BabyData } from "../utils/baby-interface";
import { sortAlph } from "../utils/sortAlph";
import { NamePresenter } from "./name-presenter";
import styles from "./name-style.module.css";

const nameData: BabyData[] = babyData;
const sortedNameData: BabyData[] = sortAlph(nameData);

export function NameLister(): JSX.Element {
  return (
    <>
      <p className={styles.body}>{sortedNameData.map(NamePresenter)} </p>
    </>
  );
}
