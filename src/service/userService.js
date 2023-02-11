var userModel = require("../model/userModel");
var key =
  "dhfiurhggfrbodsgbdsyvfyudfydsgyfgsdfsdfbdifdbff1984846549474fd4f9d4fdf98";
var encryptor = require("simple-encryptor")(key);

module.exports.createUserDBService = (userDetails) => {
  return new Promise(function myFn(resolve, reject) {
    var userModelData = new userModel();

    userModelData.firstname = userDetails.firstname;
    userModelData.lastname = userDetails.lastname;
    userModelData.email = userDetails.email;
    userModelData.password = userDetails.password;
    var encrypted = encryptor.encrypt(userDetails.password);
    userModelData.password = encrypted;

    userModelData.save(function resultHandle(error, result) {
      if (error) {
        reject(false);
      } else {
        resolve(true);
      }
    });
  });
};
module.exports.loginuserDBService = (employeeDetails) => {
  return new Promise(function myFn(resolve, reject) {
    userModel.findOne(
      { email: employeeDetails.email },
      function getresult(errorvalue, result) {
        if (errorvalue) {
          reject({ status: false, msg: "Invaild Data" });
        } else {
          if (result != undefined && result != null) {
            var decrypted = encryptor.decrypt(result.password);

            if (decrypted == employeeDetails.password) {
              resolve({ status: true, msg: "Employee Validated Successfully" });
            } else {
              reject({ status: false, msg: "Employee Validated failed" });
            }
          } else {
            reject({ status: false, msg: "Invaild Employee Detailssss" });
          }
        }
      }
    );
  });
};

module.exports.dataUserService = async (req, res) =>{
    const { token } = req.body;
  try {
    const user = encryptor.verify(token, key, (err, res) => {
      if (err) {
        error = "Token Expired";
      }
      return res;
    });
    console.log(user);
   
  } catch (error) {}
}
