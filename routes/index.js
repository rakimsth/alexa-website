const router = require("express").Router();
const apiRouter = require("./api");
/* GET home page. */
router.get("/", function(req, res, next) {
    res.render("index", { title: "Alexa Showcase" });
});

router.use("/api/v1", apiRouter);
module.exports = router;
