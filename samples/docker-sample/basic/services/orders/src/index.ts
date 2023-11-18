import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

app.listen(3003, () => {
  console.log("ORDERS-SERVICE: Listening on port 3003!");
});
