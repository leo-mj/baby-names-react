import { filterBySex } from "./filter-by-sex";

test("filterBySex returns true for matching sex", () => {
  expect(filterBySex({ id: 123, name: "Jane", sex: "f" }, "f")).toBe(true);
  expect(filterBySex({ id: 123, name: "Jon", sex: "m" }, "m")).toBe(true);
});

test("filterBySex returns false for diverging sex", () => {
  expect(filterBySex({ id: 123, name: "Jane", sex: "f" }, "m")).toBe(false);
  expect(filterBySex({ id: 123, name: "Jon", sex: "m" }, "f")).toBe(false);
});
