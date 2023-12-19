const express = require("express");
const URL = require("../models/url");
const { restrictToRole } = require("../middleware/authuser");
const router = express.Router();

router.get("/admin/urls", restrictToRole(["Admin"]), async (req, res)=>{
  const allUrls = await URL.find({});
  return res.render("url", {
    urls: allUrls,
  });
})

router.get("/", restrictToRole(["Normal", "Admin"]), async (req, res) => {
  // if (!req.user) return res.redirect("/login") ;
  const allUrlsByLoginId = await URL.find({ createdBy: req.user._id});
  return res.render("url", {
    urls: allUrlsByLoginId,
  });
});

router.get("/signup", (req, res) => {
  res.render("signup");
});

router.get("/login", (req, res) => {
  res.render("login");
});

module.exports = router;
