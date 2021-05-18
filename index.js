// Write your solution in this file!
var customerName = "bob";
const leastFavoriteCustomer = "sally"


function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer(name) {
  window.bestCustomer = "not bob";
}

function overwriteBestCustomer(name) {
  bestCustomer = name;
}

function changeLeastFavoriteCustomer(name) {
  leastFavoriteCustomer = name;
}