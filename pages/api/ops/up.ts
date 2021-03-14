import { logger } from "../../../server/logger";
import { ping } from "../../../server/services";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function Up(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const pingService = new ping.Service();
    const ok = await pingService.check();
    ok ? logger.info("Ops ping ok") : logger.error("Ops ping failed");
    res.status(200).json({ ok });
  } catch (e) {
    logger.debug(e);
    logger.error("Ops ping failed");
    return res.status(200).json({ ok: false });
  }
}
