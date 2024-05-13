import express from "express";
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/generatePresignedUrl", (req, res) => {});

app.post("/task", (req, res) => {});

app.get("/task", (req, res) => {
  return res.json({
    data: "this is the next big thing",
  });
});

app.listen(PORT);
