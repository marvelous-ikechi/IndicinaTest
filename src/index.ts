import express, { Express } from "express";

const app: Express = express();
const port: number = 3000;

app.get("/", (req, res) => {
  res.send("setup complete");
});

app.listen(port, () => {
  console.log(`I am listening on port, ${port}`);
});
