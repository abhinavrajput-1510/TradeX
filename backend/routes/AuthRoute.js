const { Signup, Login, Logout } = require("../Controllers/AuthController.js");
const { userVerification } = require("../middlewares/AuthMiddleware.js");
const router = require("express").Router();

router.post("/verify", userVerification);
router.post("/signup", Signup);
router.post("/login", Login);
router.post("/logout", Logout);

module.exports = router;
