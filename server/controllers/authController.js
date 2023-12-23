const User = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/auth");

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

    const hashedPassword = await hashPassword(password);

    const user = await User.create({
      name,
      email,
      hashedPassword,
    });

    return res.json(user);
  } catch (err) {
    console.log(err);
  }
};

const loginUser = async (req, res) => {
  try{
    const {email, password} = req.body;

    const user = await User.findOne({email});

    if(!user){
      return res.json({
        error: "No user found with this email",
      })
    }

    const match = await comparePassword(password, user.password);

    if(match){
      res.json("passwords match");
    }else{
      res.json({
        error: "The passwords didnt match"
      })
    }
  }catch(error){
    console.log(error);
  }
}

module.exports = {
  test,
  registerUser,
  loginUser,
};
