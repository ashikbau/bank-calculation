// add event listener to deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
//   get the deposit amount from the deposit input field
// console.log('click');
const depositField = document.getElementById('deposit-field');
const newDepositAmountString = depositField. value;

// convert string to a number type
const newDepositAmount = parseFloat(newDepositAmountString);
//  get the total deposit
const depositTotalElement = document.getElementById('deposit-total');
// set the deposit total 
const previousDepositTotalString = depositTotalElement.innerText;
const previousDepositTotal = parseFloat(previousDepositTotalString); 

const currentDepositTotal = previousDepositTotal + newDepositAmount;
depositTotalElement.innerText = currentDepositTotal;
// get the balance current total
const balanceTotalElement = document.getElementById('balance-total');
// set the balence total
const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);

// calculate current total balance
const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
balanceTotalElement.innerText = currentBalanceTotal;

depositField.value = '';

})