const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("../../config/passport");
const isAuthenticated = require("../../config/middleware/isAuthenticated");

//Matches with "/api/users/signup"
router.route("/signup").post(usersController.create);

//Matches with "/api/users/update"
router.route("/update").put(isAuthenticated, usersController.update);

//Matches with "/api/users/login"
router.route("/login").post(passport.authenticate("local"), usersController.login);

//Matches with "/api/users/verify"
router.route("/verify").post(isAuthenticated, usersController.verify);

//Matches with "/api/users/logout"
router.route("/logout").get(isAuthenticated, usersController.logout);

//Matches with "/api/users/password"
router.route("/password").post(isAuthenticated, usersController.password);

module.exports = router;