import formatFn from "date-fns/format";
import parseFn from "date-fns/parseISO";

export function format(dateString: string) {
  const date = parseFn(dateString);

  return formatFn(date, "M/d/yy h:m:s aaaa");
}
