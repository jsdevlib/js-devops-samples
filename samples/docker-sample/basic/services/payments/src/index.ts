import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

app.listen(3004, () => {
  console.log("PAYMENTS-SERVICE: Listening on port 3004!");
});
