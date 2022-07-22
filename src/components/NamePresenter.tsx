import { BabyData } from "../utils/baby-interface";
import styles from "./name-style.module.css";

export function NamePresenter(baby: BabyData): JSX.Element {
  return (
    <section key={baby.name}>
      {baby.sex === "m" && (
        <p className={styles.name} id={styles.boyname}>
          {" "}
          {baby.name}{" "}
        </p>
      )}
      {baby.sex === "f" && (
        <p className={styles.name} id={styles.girlname}>
          {" "}
          {baby.name}{" "}
        </p>
      )}
    </section>
  );
}
