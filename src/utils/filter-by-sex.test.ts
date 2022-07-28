import { filterBySex } from "./filter-by-sex";
test("returns true for babies of the specified sex", () => {
  expect(filterBySex({ id: 1, name: "Alan", sex: "m" }, "m")).toBe(true);
  expect(filterBySex({ id: 1, name: "Anna", sex: "f" }, "f")).toBe(true);
});

test("returns false for babies that do not have the specified sex", () => {
  expect(filterBySex({ id: 1, name: "Alan", sex: "m" }, "f")).toBe(false);
  expect(filterBySex({ id: 1, name: "Anna", sex: "f" }, "m")).toBe(false);
});
