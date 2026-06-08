const express = require("express");
const cors = require("cors");

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST"],
        credentials: true,
    })
   );

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

app.post("/upload", (req, res) => {

  console.log(req.body);
  res.json({

  success: true,
  message: "Resume uploaded successfully",
  data: req.body,

  });

});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});