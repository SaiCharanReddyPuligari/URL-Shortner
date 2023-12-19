const jwt = require("jsonwebtoken");
const secret = "$sai@83098";

//const sessionIdtoUserMap= new Map();//Statefull, whre we use store the cookie, which results in logout everytime
function setUser(user) {
  const token = {
    _id: user._id,
    email: user.email,
    role: user.role,
  };
  return jwt.sign(token, secret);
//   sessionIdtoUserMap(id, user);
}

function getUser(token) {
  if (!token) return null;
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
 // return sessionIdtoUserMap(id);
}

module.exports = {
  setUser,
  getUser,
};
