const router = require("express").Router();
const bcrypt = require("bcrypt-nodejs");
const randomstring = require("randomstring");

router.route("/").get((req, res) => {
  res.json({
    test: "Get current user details, if any"
  });
});

router.route("/register").post((req, res) => {
  req.app.get("models").user.create({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password)
  }).then(user => {
    res.json({
      ok: true
    });
  }).catch(err => {
    res.json({
      ok: false,
      message: err.message || err
    });
  });
});

router.route("/login").post((req, res) => {
  req.app.get("models").user.find({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if (!bcrypt.compareSync(req.body.password, user.password)) {
      throw new Error("Username or password is incorrect");
    }

    const expiry = new Date();
    expiry.setHours(expiry.getHours() + 1);

    return req.app.get("models").token.create({
      userId: user.id,
      token: randomstring.generate(60),
      expiresAt: expiry
    })
  }).then(token => {
    return res.json({
      ok: true,
      token: token.token,
      expires: token.expiresAt
    })
  }).catch(err => {
    return res.json({
      ok: false,
      message: err.message || err
    });
  });
});

router.route("/refresh").post((req, res) => {
  if (!req.authenticated) {
    return res.json({
      ok: false,
      message: "You must be authenticated"
    });
  }

  const expiry = new Date();
  expiry.setHours(expiry.getHours() + 1);

  req.app.get("models").token.update({
    expiresAt: expiry
  }, {
    where: {
      id: req.token.id
    }
  }).then(records => {
    return res.json({
      ok: true,
      expires: expiry
    });
  }).catch(err => {
    return res.json({
      ok: false,
      message: err.message || err
    });
  });
});

router.route("/logout").post((req, res) => {
  if (req.authenticated) {
    return req.app.get("models").token.destroy({
      where: {
        id: req.token.id
      }
    });
  }

  return res.json({
    ok: true
  });
});

module.exports = router;

