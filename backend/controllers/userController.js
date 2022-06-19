import generateToken from '../util/generateToken'
import User from '../models/user'

const login = async (req, res) => {
  const { email, password } = req.body
  const user = await User.findOne({ email })

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id)
    })
  } else {
    res.status(401).json({ error: 'Invalid email or password' })
  }
}

const signup = async (req, res) => {
  const { name, email, password } = req.body

  const userExists = User.findOne({ email })
  if (userExists) {
    res.status(400).json({ error: 'User already exists' })
  }

  const user = await User.creat({ name, email, password })

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      password: user.password,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  } else {
    res.status(400).json({ error: 'Invalid user data' })
  }
}

const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id)

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    })
  } else {
    res.status(404).json({ error: 'User not found' })
  }
}

const updateUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email

    if (req.body.password) {
      user.password = req.body.password
    }

    const updateUser = await user.save()
    res.json({
      _id: updateuser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
      token: generateToken(updatedUser._id),
    })
  } else {
    res.status(404).json({ error: 'User not found' })
  }
}

const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id).select('-password')
  if (user) {
    res.json(user)
  } else {
    res.status(404).json({ error: 'User not found' })
  }
}

const updateUser = async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    user.name = req.body.name || user.name
    user.email = req.body.email || user.email
    user.isAdmin = req.body.isAdmin || user.isAdmin

    const updateUser = await user.save()

    res.json({
      _id: updateUser._id,
      name: updateUser.name,
      email: updateUser.email,
      isAdmin: updateUser.isAdmin,
    })

  } else {
    res.status(404).json({ error: 'User not found' })
  }
}

const deleteUser = async (req, res) => {
  const user = await User.findById(req.params.id)

  if (user) {
    await user.remove()
    res.json({ message: 'User removed' })
  } else {
    res.status(404).json({ error: 'User not found' })
  }
}

export {
  signup,
  login,
  getUserProfile,
  updateUserProfile,
  getUserById,
  updateUser,
  deleteUser
}