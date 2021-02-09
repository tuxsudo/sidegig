import { logger } from "@tuxsudo/sidegig-logger";
import { ping } from "../../../server/models";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function Up(req: NextApiRequest, res: NextApiResponse) {
  const pingService = new ping.Service();
  const ok = await pingService.check();
  logger.debug({ pingStatus: ok });
  res.status(200).json({ ok });
}
