const user = require("../Models/userSchema");

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const userExists = await user.findOne({ email });

    if (userExists) {
      return res.status(400).json({ msg: "Email already exists" });
    }

    const userCreated = await user.create({ name, email, password });
    res
      .status(200)
      .json({
        authToken: await userCreated.generateToken()
      });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const User = await user.findOne({ email });
    if (!User) {
      return res.status(400).json({ msg: "user did not exists" });
    }

    const comparePass = await User.comparePasswords(password);
    if (!comparePass) {
      return res.status(400).json({ msg: "Password is wrong" });
    }

    res
      .status(200)
      .json({
        authToken: await User.generateToken()
      });
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
};

const getUser = async(req,res) => {
  try {
    const userId = req.user.userId; 
    const User = await user.findById(userId).select('-password')
    res.status(200).json(User)
  } catch (error) {
    res.status(500).json({ msg: "Internal server error" });
  }
}

module.exports = { register, login, getUser };
