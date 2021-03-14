import { createLogger } from "bunyan";
import type { LogLevel } from "bunyan";

const name =
  process?.env?.LOGGER_NAME ??
  process?.env?.npm_package_name ??
  "unknown logger";

const level: LogLevel =
  (process?.env?.LOGGER_LEVEL?.toLocaleLowerCase() as LogLevel) ?? "info";

export const logger = createLogger({
  name,
  level,
});

logger.info({ message: `Logging with level '${level}'` });
