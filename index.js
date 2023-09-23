// function calculateLoan() {
//     console.log("Change");
// }

function formatCurrency(number) {
    // Lakukan pengecekan apakah angka memiliki desimal dengan mengubahnya menjadi string
    const hasDecimal = number.toString().includes('.');

    // Jika angka memiliki desimal, gunakan format dengan 2 digit desimal, jika tidak, abaikan digit desimalnya
    return new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: hasDecimal ? 2 : 0 }).format(number);
}


function calculateLoan() {
    loanAmountValue = document.getElementById("loan-amount").value;
    // interestRateValue = document.getElementById("interest-rate").value;
    // monthsToPayValue = document.getElementById("months-to-pay").value;

    // interest = (loanAmountValue * (interestRateValue * 0.01)) / monthsToPayValue;

    // monthlyPayment = (loanAmountValue / monthsToPayValue + interest).toFixed(2);
    monthlyPayment = formatCurrency((loanAmountValue * 20/100).toFixed(0));

    document.getElementById("payment").innerHTML = `Rekomendasi Budget untuk Dokumentasi :<br>${monthlyPayment}`;
}