const { Email } = require("../schema");
const { db_url } = require("../dbConfig");
const mongoose = require("mongoose");
var express = require('express');
var router = express.Router();

mongoose.connect(db_url);


/* GET home page. */
router.get('/',async function (req, res, next) {
  const email = await Email.find();
  res.send(email);
});

router.post("/email", async (req, res) => {
  try {
    const email = await Email.create(req.body);
    res.send(email);
  }
  catch (err) {
    // console.log(err);
    if (err.code === 11000) {
      res.status(400).send("Email already exists");
    }
    let errResult=error(err.errors);
    res.send(errResult);
  }
})

const error = (errors) => {
  let result = "";
  for (let err in errors) {
    result+=errors[err].message+"\n";
  }
  return result;
}
module.exports = router;
