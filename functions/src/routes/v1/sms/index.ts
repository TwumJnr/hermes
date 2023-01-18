import "dotenv/config";
import { Router } from "express";
import axios from "axios";

const router: Router = Router();
const env = process.env;

router.get("/", (req, res) => {
  const query = req.query;
  console.log({ query });

  // twClient.messages;

  // return;
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Host: env.SMS_HOST,
    Authorization: `key ${env.SMS_API}`,
  };

  const destinations = [
    // { to: "+233557759104" },
    // { to: "+233501286408" },
    { to: "+233501377213" },
    // { to: "+233207933484" },
  ];
  const messages = [
    { text: query.text, type: 0, sender: "SMS TEST", destinations },
  ];

  res.send({ env });

  axios
    .post(
      "https://api.smsonlinegh.com/v4/message/sms/send",
      { messages },
      {
        headers,
      }
    )
    .then((response) => {
      const data = response.data;
      return console.log({ data });
      // return res.send("OK");
    })
    .catch((error) => {
      return console.log({ error });
      return res.status(500).send({ error });
    });
});

export default router;
