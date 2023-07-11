// function calculateLoan() {
//     console.log("Change");
// }

function calculateLoan() {
    loanAmountValue = document.getElementById("loan-amount").value;
    // interestRateValue = document.getElementById("interest-rate").value;
    // monthsToPayValue = document.getElementById("months-to-pay").value;

    // interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;

    // monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(2);
    monthlyPayment = (loanAmountValue * 20/100).toFixed(0);

    document.getElementById("payment").innerHTML = `Budget untuk Foto & Video :<br>Rp. ${monthlyPayment}`;
}