import jwt from 'jsonwebtoken';
const isAuthenticated = async (req, res, next) => {
  let token = req.headers.authorization.split(' ')[1]
  try {
    let data = await jwt.verify(token, "marsel");
    req.auth = data;
    next();
  } catch (error) {
    res.sendStatus(401)
  }
};
export default isAuthenticated