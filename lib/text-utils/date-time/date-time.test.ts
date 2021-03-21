import * as dateTime from ".";

describe("date-time text utils", () => {
  test("it human formats ISO date strings", () => {
    expect(dateTime.format("2021-03-21T13:31:17.554Z")).toBe(
      "3/21/2021 07:31:17 am"
    );

    expect(dateTime.format("1977-01-01T07:00:00.000Z")).toBe(
      "1/1/1977 12:00:00 am"
    );
  });

  test("it human formats date objects", () => {
    expect(dateTime.format(new Date())).not.toBe("Unknown date");
  });

  test("it gracefully fails with unknown dates", () => {
    expect(dateTime.format("OOPS")).toBe("Unknown date");
  });
});
