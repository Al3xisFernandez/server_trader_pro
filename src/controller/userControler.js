var userService = require("../service/userService");

var createUserControllerFn = async (req, res) => {
  try {
    console.log(req.body);
    var status = await userService.createUserDBService(req.body);
    console.log(status);

    if (status) {
      res.send({ status: true, message: "User created successfully" });
    } else {
      res.send({ status: false, message: "Error creating user" });
    }
  } catch (err) {
    console.log(err);
  }
};

var loginUserControllerFn = async (req, res) => {
  var result = null;
  try {
    result = await userService.loginuserDBService(req.body);
    if (result.status) {
      res.send({ status: true, message: result.msg });
    } else {
      res.send({ status: false, message: result.msg });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false, message: error.msg });
  }
};

var dataUserControllerFn = async (req, res) => {
  try {
    var data = await userService.dataUserService(req.body);
    if (user === "Token expired") {
      return res.json({ status: "error", data: "token expired" });
    }
    const useremail = user.email;
    userModel
      .findOne({ email: useremail })
      .then((data) => {
        res.send({ status: "ok", data: data });
      })
      .catch((error) => {
        res.send({ status: "error", data: error });
      });
  } catch (err) {}
};
module.exports = {
  createUserControllerFn,
  loginUserControllerFn,
  dataUserControllerFn,
};
