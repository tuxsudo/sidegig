import { logger } from "../../../server/logger";
import { HttpContext } from "../../../server/context";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function Up(req: NextApiRequest, res: NextApiResponse) {
  try {
    const ctx = HttpContext.init(req, res);
    const ok = await ctx.opsService().ping();
    ok ? logger.info("Ops ping ok") : logger.error("Ops ping failed");
    res.status(200).json({ ok });
  } catch (e) {
    logger.debug(e);
    logger.error("Ops ping failed");
    return res.status(200).json({ ok: false });
  }
}
