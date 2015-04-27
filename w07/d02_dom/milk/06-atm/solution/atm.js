var checkingBalance = 0;
var savingsBalance = 0;

function withdrawFunds(amount, primary, secondary)
{
  if(amount <= primary)
  {
    primary = primary - amount;
  }
  else if((amount > primary) && (amount <= (secondary + primary)))
  {
    secondary = (primary + secondary) - amount;
    primary = 0;
  }
  return [primary, secondary];
}

function updateDisplay()
{
  var checking = document.getElementById("checking-balance");
  if(checkingBalance <= 0) {
    checking.classList.add("zero");    
  } else {
    checking.classList.remove("zero");
  }

  var savings = document.getElementById("savings-balance");
  if(savingsBalance <= 0) {
    savings.classList.add("zero");
  } else {
    savings.classList.remove("zero");
  }

  // Update the Amount in Each Account
  document.getElementById("checking-balance").innerHTML = "$" + checkingBalance;
  document.getElementById("savings-balance").innerHTML = "$" + savingsBalance;

  // Clear the Forms
  document.getElementById("checking-amount").value = "";
  document.getElementById("savings-amount").value = "";
}


// Add deposit functionality to checking
document.getElementById("checking-deposit").addEventListener('click', function(){
  var amount = document.getElementById("checking-amount").value;
  amount = parseInt(amount);
  checkingBalance = amount + checkingBalance;
  updateDisplay();
});

// Add deposit functionality to savings
document.getElementById("savings-deposit").addEventListener('click', function(){
  var amount = document.getElementById("savings-amount").value;
  amount = parseInt(amount);
  savingsBalance = amount + savingsBalance;
  updateDisplay();
});

document.getElementById("checking-withdraw").addEventListener('click', function(){
  var amount = document.getElementById("checking-amount").value;
  amount = parseInt(amount);
  balances = withdrawFunds(amount, checkingBalance, savingsBalance);
  checkingBalance = balances[0];
  savingsBalance = balances[1];
  updateDisplay();
});

document.getElementById("savings-withdraw").addEventListener('click', function(){
  var amount = document.getElementById("savings-amount").value;
  amount = parseInt(amount);
  balances = withdrawFunds(amount, savingsBalance, checkingBalance);
  savingsBalance = balances[0];
  checkingBalance = balances[1];
  updateDisplay();
});

updateDisplay();