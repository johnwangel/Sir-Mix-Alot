const DataStore = require('./DataStore').store;

function Model(schema){
  this.schema = schema;
  this.id = null;

  for (var keys in schema){
    this[keys] = null;
  }

  //The constructor sets a new default value of an empty array in the datastore
  //using the constructor's name as the key, if that key does not already exist in the datastore.
  if(!DataStore.hasOwnProperty(this.constructor.name)){
    DataStore[this.constructor.name] = [];
  }
}

Model.getNextId = function(){
   if (this.id === null) {
    DataStore.id = this.schema;
   }
   //id in this models datastore. if null, push new instance to ds coll by name of extended modal
};

Model.destroy = function(){
    //removes the stored data object from the datastore if there is an ID set
};

Model.getNextId = function(){
  //returns the next successive number in the datastore for this model, the highest id plus one
  //returns the highest ID of a single colleciton in the data store plus one
};

Model.find = function(id){
  //accepts a single argument id that returns the stored
  //data object in the datastore for this model, having the same id value passed in from the find argument
};

Model.extend = function(klass) {
 //should have a method named extend that accepts a single argument klass,
 //and extends each static and prototype method of Model onto klass
 klass.prototype = Object.create(Model.prototype);
};

module.export = Model;


