import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

app.listen(3002, () => {
  console.log("BASKET-SERVICE: Listening on port 3002!");
});
