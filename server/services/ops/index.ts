import { prisma } from "../../../prisma";
import { logger } from "../../logger";

export class OpsService {
  async ping(): Promise<boolean> {
    try {
      const [first] = await prisma.$queryRaw("select 1 as success");
      return first?.success === 1;
    } catch (err) {
      logger.error(err);
      return false;
    }
  }
}
