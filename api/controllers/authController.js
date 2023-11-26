
import User from './../models/user-model.js';
import createError from "../utils/createError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


export const register = async (req, res, next) => {
  try {
    
    const salt = await bcrypt.genSalt(10);

    
    if (req.body.password) {
      const hash = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
        ...req.body,
        password: hash,
      });
    
      
      // Save the user to the database
      await newUser.save();

      console.log('User created successfully');
      res.status(201).send("User has been created.");
    } else {
      
      res.status(400).send("Password is missing or empty.");
    }
  } catch (err) {
    next(err);
  }
};



export const logIn = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (!user) return next(createError(404, "User not found!"));

    const isCorrect = bcrypt.compareSync(req.body.password, user.password);
    if (!isCorrect)
      return next(createError(400, "Wrong password or username!"));

    const token = jwt.sign(
      {
        id: user._id,
        isSeller: user.isSeller,
      },
      process.env.JWT_KEY
    );

    const { password, ...info } = user._doc;
    res
      .cookie("accessToken", token, {
        httpOnly: true,
      })
      .status(200)
      .send(info);
  } catch (err) {
    next(err);
  }
};

export const logOut = async (req, res) => {
  res
    .clearCookie("accessToken", {
      sameSite: "none",
      secure: true,
    })
    .status(200)
    .send("User has been logged out.");
};