import formatFn from "date-fns/format";
import parseFn from "date-fns/parseISO";
import isDate from "date-fns/isDate";

export function format(dateIn: string | Date) {
  try {
    const date = typeof dateIn === "string" ? parseFn(dateIn) : dateIn;

    return isDate(date)
      ? formatFn(date, "M/d/yyyy hh:mm:ss aaa")
      : "Unknown date";
  } catch (err) {
    console.warn(
      `Invalid date format provided to date-time formatter: "${dateIn}"`
    );

    return "Unknown date";
  }
}
