const authService = require("../service/auth");

exports.register = async (req, res, next) => {
  try {
    const user = await authService.register(req.body);
    res.status(201).json({ message: "User registered Successfully!", user });
  } catch (err) {
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = await authService.login(email, password);

    res.status(200).json(data);
    // console.log('Login success!')
  } catch (err) {
    res.status(400).json({ message: error.message });
  }
};