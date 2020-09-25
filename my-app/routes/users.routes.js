const { Router } = require("express");
const router = Router();

const User = require("../models/User");

router.get("/users", (req, res) => {
  return User.find().then((err, users) => (err ? res.send(err) : res.json(users)));
});

router.get("/users/:id", (req, res) => {
  const id = req.params.id;

  User.findById(id, (error, user) =>
    error ? res.sendStatus(404) : res.send(user)
  );
});

router.post("/users", (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  const user = new User({
    firstName,
    lastName,
    email,
    password,
  });

  user.save().then(() => res.send({ status: 200 }));
});

router.delete("/users/:id", (req, res) => {
  const id = req.params.id;

  User.findByIdAndRemove(id, (err) =>
    err ? res.sendStatus(400) : res.sendStatus(200).send("user is deleted")
  );
});

router.put("/users/:id", (req, res) => {
  const id = req.params.id;
  const { firstName, lastName, email, password } = req.body;

  User.findByIdAndUpdate(
    id,
    { firstName, lastName, email, password },
    (error) => (error ? res.send(error) : res.send({ status: "Updated!" }))
  );
});

module.exports = router;
