const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const postsRoutes = require("./routes/posts");
const db = require("./db/connection");
const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(logger("dev"));

<<<<<<< HEAD
app.use('/api', postsRoutes);
=======
app.use("/api", postsRoutes); //prepends everything with /api
>>>>>>> 052e65bde9120994d9bd60864346d0347f8aaaea

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
