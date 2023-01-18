// import {dateSerial, time, currentDate} from "./date";
// import fs from "fs";
// import {Response, NextFunction} from "express";
// import "dotenv/config";

// const env = process.env;

// const dir = ".temp";

export const generateApiKey = () => {
  return [...Array(30)]
    .map(() => ((Math.random() * 36) | 0).toString(36))
    .join("");
};

// module.exports = {
//   saveError,
//   constructInsert,
//   verifyToken,
//   nameSplit,
//   getUserName,
// };
