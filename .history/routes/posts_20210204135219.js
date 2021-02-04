const { Router } = require("express");
const controllers = require("../controllers/posts");

const router = Router();

// asbtract controllers
router.get("/", (req, res) => {
  res.send("Home Directory");
});
router.get("/posts", controllers.getPosts);
router.get("/posts/:_id", controllers.getPost);
router.post("/posts", controllers.createPost);
router.put("/posts/:id", controllers.updatePost);
router.delete("/posts/:id", controllers.deletePost);

module.exports = router;
