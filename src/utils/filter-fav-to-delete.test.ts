import { filterFavToDelete } from "./filter-fav-to-delete";

test("returns true if the baby name should not be deleted", () => {
  expect(
    filterFavToDelete(
      { id: 1, name: "Alan", sex: "m" },
      { id: 3, name: "Berta", sex: "f" }
    )
  ).toBe(true);
    expect(
      filterFavToDelete(
        { id: 2, name: "Anna", sex: "f" },
        { id: 3, name: "Berta", sex: "f" }
      )
    ).toBe(true);
});

test("returns false if the baby name should be deleted", () => {
  expect(
    filterFavToDelete(
      { id: 1, name: "Alan", sex: "m" },
      { id: 4, name: "Alan", sex: "m" }
    )
  ).toBe(false);
    expect(
      filterFavToDelete(
        { id: 2, name: "Anna", sex: "f" },
        { id: 5, name: "Anna", sex: "f" }
      )
    ).toBe(false);
});
