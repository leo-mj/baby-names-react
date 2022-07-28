import { BabyData } from "../utils/baby-interface";
import styles from "./name-style.module.css";

export function NamePresenter(baby: BabyData): JSX.Element {
  return (
    <>
      {baby.sex === "m" && (
        <button className={styles.name} id={styles.boyname}>
          {" "}
          {baby.name}{" "}
        </button>
      )}
      {baby.sex === "f" && (
        <button className={styles.name} id={styles.girlname}>
          {" "}
          {baby.name}{" "}
        </button>
      )}
    </>
  );
}
