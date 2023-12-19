const User = require("../models/user");

async function handleAllUsers(req, res) {
  const allDbUsers = await User.find({});
  return res.json(allDbUsers);
}

async function handlePostUsers(req, res) {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.job_title ||
    !body.email ||
    !body.gender
  ) {
    return res.status(400).json({ Error: "Mention all the details" });
  }
  const newUser = await User.create({
    firstName: body.first_name,
    jobTitle: body.job_title,
    email: body.email,
    gender: body.gender,
  });

  return res.status(201).json({ msg: "success", id: newUser._id });
}

async function handleGetUserById(req, res) {
  const user = await User.findById(req.params.id);
  if (!user) return res.status(404).json({ Message: "User Not Found" });
  return res.json(user);
}

async function handleUpdateRequest(req, res) {
  await User.findByIdAndUpdate(req.params.id, { email: "marcy123@gamil.com" });
  return res.json({ status: "Success" });
}

async function handleDeleteRequest(req, res) {
  await User.findByIdAndDelete(req.params.id);
  return res.status(201).json({ status: "success" });
}
module.exports = {
  handleAllUsers,
  handlePostUsers,
  handleGetUserById,
  handleUpdateRequest,
  handleDeleteRequest,
};
