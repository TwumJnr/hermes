import * as functions from "firebase-functions";
import cors from "cors";
import express, { Application, Request, Response } from "express";

import { dateToday } from "./util/functions/date";

const router: Application = express();

const env = process.env;
const PORT = env.PORT || 10491;

router.use(express.json()); // parse all requests to JSON format
router.use(cors()); // for cross-origin access

import v1 from "./routes/v1";
router.use("/v1", v1);

/* This is the default route. */
router.get("/", (req: Request, res: Response) => {
  res.send(`DEV BLUE HERMES - MESSAGING API - ${dateToday}`);
});

router
  .listen(PORT, () => {
    // when there is no error
    console.log(`${"\n-----------------------------------------------"}`);
    console.log(`The server started running on PORT '${PORT}' at ${dateToday}`);
  })
  .on("error", (error: { code?: string }) => {
    if (error) {
      // when there is an error
      console.log(
        "There was an error starting the server.\nError:" +
          " " +
          JSON.stringify(error, undefined, 2)
      );
      return;
    }
  });

exports.app = functions.https.onRequest(router);
