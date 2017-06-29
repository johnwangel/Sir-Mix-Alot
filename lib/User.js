const Model = require('./Model');

function User() {
  this.userSchema = { username : '', password : '' };
  Model.call(this, UserSchema);
}

Model.extend(User);

module.exports = User;