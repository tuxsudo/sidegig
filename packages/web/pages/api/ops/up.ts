import { ping } from "@tuxsudo/sidegig-models";

import type { NextApiRequest, NextApiResponse } from "next";

export default async function Up(req: NextApiRequest, res: NextApiResponse) {
  const pingService = new ping.Service();
  const ok = await pingService.check();
  res.status(200).json({ ok });
}
