import { Router } from "express";

const router: Router = Router();

import sms from "./sms";

router.use("/sms", sms);

export default router;
