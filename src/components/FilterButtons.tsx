import styles from "./name-style.module.css";

interface FilterButtonProps {
  handleFilterOff(): void;
  handleGirlFilter(): void;
  handleBoyFilter(): void;
  activeFilter: string;
}

export function FilterButtons(
  filterButtonProps: FilterButtonProps
): JSX.Element {
  return (
    <>
      <button
        className={styles.filterbtn}
        onClick={filterButtonProps.handleFilterOff}
      >
        off
      </button>
      <button
        id={styles.girlfilter}
        className={styles.filterbtn}
        onClick={filterButtonProps.handleGirlFilter}
      >
        f
      </button>
      <button
        id={styles.boyfilter}
        className={styles.filterbtn}
        onClick={filterButtonProps.handleBoyFilter}
      >
        m
      </button>
      <p>
        {" "}
        Active filter:{" "}
        <button className={styles.filterbtn}>
          {" "}
          {filterButtonProps.activeFilter || "off"}{" "}
        </button>{" "}
      </p>
    </>
  );
}
