
import jwt from 'jsonwebtoken';
import User from '../models/user.js'

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startswith('Bearer')
  ) {
    try {
      token = req.headers.authorization.split(' ')[1]
      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      req.user = await User.findById(decoded.id).select('-password')
      next()
    } catch (err) {
      console.log(err)
      res.status(401).json({ error: 'Not authorized, token failed' })
    }
  }
  if (!token) {
    res.status(401).json({ error: 'Not authorized, token failed' })
  }
}

const admin = (req, res, next) => {
  if (req.user && res.user.isAdmin) {
    next()
  } else {
    res.status(401).json({ error: 'Not authorized as admin' })
  }
}

export { protect, admin }