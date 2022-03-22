const { setKey, returnKey } = require("../lib/key");

async function replaceKey(req, res, next) {
  try {
    setKey(req.body.key);
    res.status(200).send({ message: "Received" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send({ message: "Error sending key" });
  }
}

async function validateKey(req, res, next) {
  const requestKey = req.query.sdk_key;

  if (requestKey !== returnKey()) {
    res.status(500).send({
      message: "Invalid sdk key",
    });
  } else {
    next();
  }
}

module.exports.replaceKey = replaceKey;
module.exports.validateKey = validateKey;