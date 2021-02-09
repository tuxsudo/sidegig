import { prisma } from "./prisma";
export class Service {
  async check(): Promise<boolean> {
    try {
      const results = await prisma.$queryRaw("SELECT 1;");
      console.log(results);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }
}
