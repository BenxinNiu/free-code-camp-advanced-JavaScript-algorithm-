var Person = function(firstAndLast) {
  var fullName = firstAndLast;
  var array = fullName.split(' ');

  this.getFirstName = function() {
    return array[0];
  };

  this.getLastName = function() {
    return array[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(first) {
    array[0] = first;
    fullName = array.join(' ');
  };

  this.setLastName = function(last) {
    array[1] = last;
    fullName = array.join(' ');
  };

  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast;
    array = fullName.split(' ');
  };
};

var bob = new Person('Bob Ross');
