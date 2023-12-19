const express = require("express");
const { handleUrlRequest, handleGetAnalytics } = require("../controllers/url");

const router = express.Router();

router.post("/", handleUrlRequest);
// router.post("/:shortId", handleUpdateClicks);

router.get("/analytics/:shortId", handleGetAnalytics);

module.exports = router;
