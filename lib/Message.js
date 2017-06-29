const Model = require('./Model');

function Message() {
  this.MessageSchema = { from: 'User', to: 'User', message : 'String', sent : 'Date' };
  Model.call(this, MessageSchema);
}

Model.extend(Message);

module.exports = Mesage;

