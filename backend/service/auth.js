const User = require("../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// register
exports.register = async (data) => {
  if(!data.email || !data.password || !data.email && !data.password) {
    throw new Error("Insufficient Credentials");
  }

  if(data.password.length < 8){
    throw new Error("Password length must be greater than 8");
  }
  const hashedPassword = await bcrypt.hash(data.password, 10);

  const user = await User.create({
    ...data,
    password: hashedPassword,
  });

  return user;
};

// login
exports.login = async (email, password) => {
  if(!email || !password || !email && !password) throw new Error("Insufficient Credentials!")

  if(!password.length < 8) throw new Error("Invalid credentials")

  const user = await User.findOne({ email });
  if (!user) throw new Error("user not found, Try Registering..");

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error("Incorrect Password");

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  return { user, token };
};