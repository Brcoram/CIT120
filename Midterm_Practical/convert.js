
function start() {
  let amount = prompt("Enter Amount");
  let startAmount = parseInt(amount);
  document.getElementById("amountToBeConverted").innerHTML = startAmount.toFixed(2);
};

dollarsToEuros = (amount) => {
  let input = parseFloat(document.getElementById("amountToBeConverted").innerHTML);
  let transaction = "Dollars to Euros";
  let prefix_to = "&euro;"
  let newAmount = input * 0.89;
  document.getElementById("transaction").innerHTML = transaction;
  document.getElementById("totals").innerHTML = prefix_to+newAmount.toFixed(2);
};

let eurosToDollars = function eurosToDollars(amount) {
  let input = parseFloat(document.getElementById("amountToBeConverted").innerHTML);
  let transaction = "Euros to Dollars";
  let prefix_to = "$"
  let newAmount = input / 0.89;
  document.getElementById("transaction").innerHTML = transaction;
  document.getElementById("totals").innerHTML = prefix_to+newAmount.toFixed(2);
};

function displayRecord (transaction,newAmount) {
  document.getElementById("transaction").innerHTML = transaction;
  document.getElementById("totals").innerHTML = prefix_to+newAmount.toFixed(2);
};
