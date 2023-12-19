const { getUser } = require("../URL Shortner/service");

function checkForAuthentication(req, res, next) {
  const tokenCookie = req.cookies?.uid;
  req.user = null;
  //   const authorizationHeaderValue = req.headers["authorization"]; //auth for non browsers for response
  if (!tokenCookie) return next();
  // const token = authorizationHeaderValue.split("Bearer ")[1]; as Authorization = Bearer <token>
  const token = tokenCookie;
  const user = getUser(token);

  req.user = user;
  return next();
}

// async function restrictToLoggedInUserOnly(req, res, next) {
//   const userUid = req.cookies?.uid;

//   if (!userUid) return res.redirect("/login");

//   const user = getUser(userUid);
//   if (!user) return res.redirect("/login");

//   req.user = user;
//   next();
// }

// async function checkAuth(req, res, next) {
//   const userUid = req.cookies?.uid;
//   const user = getUser(userUid);
//   req.user = user;
//   next();
// }

function restrictToRole(roles=[]) {
  return function (req, res, next) {
    if (!req.user) return res.redirect("/login");
    if (!roles.includes(req.user.role)) return res.end("UnAuthorized");
    return next();
  };
}

module.exports = {
  checkForAuthentication,
  restrictToRole,
};
