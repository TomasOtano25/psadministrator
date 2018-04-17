import { authorsFormattedForDropdown } from "./selectors";

describe("Authors Selectors", () => {
  describe("authorsFormattedForDropdown", () => {
    it("should return author data formattes for use in a dropdown", () => {
      const authors = [
        { id: "cory-house", firstname: "Cory", lastname: "House" },
        { id: "scott-allen", firstname: "Scott", lastname: "Allen" }
      ];

      const expected = [
        { value: "cory-house", text: "Cory House" },
        { value: "scott-allen", text: "Scott Allen" }
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
