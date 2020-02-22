var Parse = require("parse");

const logIn = async function() {
  return await Parse.User.logIn("myname", "mypass").catch(e => Error(e));
};

const currentUser = function() {
  return Parse.User.current();
};

export { logIn, currentUser };
