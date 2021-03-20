import { prisma } from "../../../prisma";

export class OpsService {
  async ping(): Promise<boolean> {
    try {
      const [first] = await prisma.$queryRaw("select 1 as success");
      return first?.success === 1;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
