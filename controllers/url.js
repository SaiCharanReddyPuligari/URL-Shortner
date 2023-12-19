const shortid = require("shortid");
const URL = require("../models/url");

async function handleUrlRequest(req, res) {
  const body = req.body;
  if (!body.url) return res.status(400).json({ error: "Enter a valid URL" });
  const shortID = shortid();
  await URL.create({
    shortId: shortID,
    redirectURL: body.url,
    visitHistory: [],
    createdBy: req.user._id,
  });

  return res.render("url", {
    id: shortID,
  });
  // return res.json({ id: shortID });
}

async function handleGetAnalytics(req, res) {
  const shortId = req.params.shortId;
  const result = await URL.findOne({ shortId });
  return res.json({
    totalClicks: result.visitHistory.length,
    analytics: result.visitHistory,
  });
}

// async function handleUpdateClicks (req, res) {
//   const shortId = req.params.shortId;
//   const entry = await URL.findOneAndUpdate(
//     {
//       shortId,
//     },
//     {
//       $push: {
//         visitHistory: {
//           timestamp: Date.now(),
//         },
//       },
//     }
//   );
//   res.redirect(entry?.redirectURL);
// }

module.exports = {
  handleUrlRequest,
  handleGetAnalytics,
  // handleUpdateClicks
};
