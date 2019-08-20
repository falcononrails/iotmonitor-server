const express = require("express");
const router = express.Router();
const userService = require("./user.service");
var jwtDecode = require("jwt-decode");

// routes
router.post("/authenticate", authenticate);
router.post("/register", register);
router.get("user/:id", getById);
router.post("/test", tokenDecode);

module.exports = router;

function authenticate(req, res, next) {
  userService
    .authenticate(req.body)
    .then(user =>
      user
        ? res.status(200).json(user)
        : res.status(200).json({ message: "Email or password is incorrect" })
    )
    .catch(err => next(err));
}

function register(req, res, next) {
  userService
    .create(req.body)
    .then(user => res.json(user))
    .catch(err => next(err));
}

function getById(req, res, next) {
  userService
    .getById(req.params.id)
    .then(user => (user ? res.json(user) : res.sendStatus(200)))
    .catch(err => next(err));
}

function tokenDecode(req, res, next) {
  var token = req.body.token;
  var decode = jwtDecode(token);
  console.log(decode);
}
