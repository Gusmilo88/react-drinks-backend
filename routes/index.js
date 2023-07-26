const express = require("express");
const { register, login } = require("../controllers/authController");
const { profile } = require("../controllers/usersController");
const checkToken = require("../middlewares/checkToken");
const router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.status(200).json({
    ok: true,
    message: "Done!",
  });
});

router.post("/api/register", register)
router.post("/api/login", login)
router.get("/api/profile", checkToken ,profile)

module.exports = router;
