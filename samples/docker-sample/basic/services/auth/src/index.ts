import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

app.listen(3001, () => {
  console.log("AUTH-SERVICE: Listening on port 3001!");
});
