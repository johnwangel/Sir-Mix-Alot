const Model = require('./Model');

function Account() {
  this.AccountSchema = { user : User, accountNumber : Number, address : String, balance : Number };
  Model.call(this, AccountSchema);
}

Model.extend(Account);

model.exports = Account;