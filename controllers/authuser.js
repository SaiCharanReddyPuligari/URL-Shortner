const UID = require("../models/authuser");
const { v4: uuidv4 } = require("uuid");
const { setUser } = require("../URL Shortner/service");

async function handleUserSignUp(req, res) {
  const { name, email, password } = req.body;
  await UID.create({
    name,
    email,
    password,
  });
  return res.redirect("/url");
}

async function handleUserLogin(req, res) {
  const { email, password } = req.body;
  const user = await UID.findOne({ email, password });
  if (!user)
    res.render("login", {
      error: "Invalid Email or Password",
    });

  //const sessionId= uuidv4();  //Generating Cookies for Login
  const token = setUser(user);
  res.cookie("uid", token); //for Non Browsers, no cookies
  // res.json({token});
  return res.redirect("/");
}

module.exports = {
  handleUserSignUp,
  handleUserLogin,
};
