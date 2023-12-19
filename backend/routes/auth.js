const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

// create POST req
router.post(
  "/createuser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 5 }),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    })
      .then(() => res.json({ isUserCreated: "true", ...req.body }))
      .catch((err) => {
        console.log(err);
        res.json({
          isUserCreated: false,
          error: "Email is already Registered",
          message: err.message,
        });
      });
  }
);

// login

router.post(
  "/login",
  [body("email").isEmail(), body("password").exists()],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const reqEmail = req.body.email;
    const reqPassword = req.body.password;
    let found = false;
    let result = {};
    User.find({}, function (err, docs) {
      if (err) {
        console.log(err);
        result = { err: "server error" };
        return { err: "server error" };
      } else {
        docs.forEach((element) => {
          if (element["email"] === reqEmail) {
            if (element["password"] === reqPassword) {
              found = true;
              result = { isUserFound: true, name: element["name"] };
              return { isUserFound: true, name: element["name"] };
            } else {
              found = true;
              result = { err: "Please Enter Correct Password" };
              return { err: "Please Enter Correct Password" };
            }
          } else if (found === false) {
            found = false;
            result = { isUserFound: false, error: "User Not found" };
            return { isUserFound: false, error: "User Not found" };
          }
        });
        if (found === false) {
          return res.status(400).json(result);
        }
        return res.json(result);
      }
    });
  }
);

module.exports = router;
