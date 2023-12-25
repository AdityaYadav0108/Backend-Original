const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");
const jwt = require("jsonwebtoken");

const test = (req, res) => {
  res.json("This is the test and it is working");
};

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) {
      return res.json({
        error: "A name is required",
      });
    }

    if (!password || password.length < 6) {
      return res.json({
        error: "Password is requires and should be atleast 6  characters long",
      });
    }

    const exist = await User.findOne({ email });

    if (exist) {
      return res.json({
        error: "Email is already taken",
      });
    }

    // const hashedPassword = await hashPassword(password);

    const user = await User.create({
      name,
      email,
      password,
    });

    return res.json(user);
  } catch (err) {
    console.log(err);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        error: "No user found with this email",
      });
    }

    const match = await comparePassword(password, user.password);

    if (match) {
      const token = await new Promise((resolve, reject) => {
        jwt.sign(
          { email: user.email, id: user._id, name: user.name },
          process.env.JWT_SECRET,
          (err, token) => {
            if (err) reject(err);
            resolve(token);
          }
        );
      });

      res.cookie("token", token);
      res.json(user);
      
    } else {
      res.json({
        error: "The passwords didnt match",
      });
    }
  } catch (error) {
    console.log(error);
  }
};

const getProfile = async (req, res) => {
  const {token} = req.cookies;

  if(token){
    jwt.verify(token, process.env.JWT_SECRET, {}, (err, user) => {
      if(err) throw err;
      res.json(user);
    })
  } else{
    res.json(null)
  }
}

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile
};
