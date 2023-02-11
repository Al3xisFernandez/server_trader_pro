require("./db");
var app = require("./app");
var main = () => {
  app.listen(5000, () => console.log("servidor conectado"));
};
main();
