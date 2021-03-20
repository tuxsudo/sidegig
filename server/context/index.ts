import { IncomingMessage, ServerResponse } from "http";

import { CounterService } from "../services/counter";
import { OpsService } from "../services/ops";

export class HttpContext {
  #req: IncomingMessage;
  #res: ServerResponse;

  private _counterService?: CounterService;
  private _opsService?: OpsService;

  static init(req: IncomingMessage, res: ServerResponse) {
    return new HttpContext(req, res);
  }

  constructor(req: IncomingMessage, res: ServerResponse) {
    this.#req = req;
    this.#res = res;
  }

  counterService() {
    if (!this._counterService) {
      this._counterService = new CounterService();
    }

    return this._counterService;
  }

  opsService() {
    if (!this._opsService) {
      this._opsService = new OpsService();
    }

    return this._opsService;
  }
}
