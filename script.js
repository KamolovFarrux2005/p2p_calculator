const BuyInput = document.getElementById("buy");
const SellInput = document.getElementById("sell");
const FeeInput = document.getElementById("fee");
const AmountInput = document.getElementById("summa");
const resultSpan = document.getElementById("result");
const result2Span = document.getElementById("result2");
const button = document.getElementById("calc");


function Calc(buy, sell, fee, amount) {
    if (!fee) {
        const resultCalc = (sell / buy - 1) * 100;
        const amountResult = ((amount / buy) * sell).toFixed(2);
        resultSpan.innerText = `${resultCalc.toFixed(4)}%`
        result2Span.innerText = `(${amountResult})`
    } else {

        const resultCalc = (sell / buy - 1) * 100 - fee;
        // const amountResult = ((amount / buy) * sell).toFixed(2);
        const feeAmountResult = (amount * (1 + resultCalc / 100)) 
; 
        resultSpan.innerText = `${resultCalc.toFixed(4) }%`
        result2Span.innerText = `(${feeAmountResult.toFixed(2)}$)`
    }
}

button.addEventListener("click", () => {
    if (BuyInput == null || BuyInput == undefined && SellInput == null || SellInput == undefined) {
        alert('Inputni to`ldir naxuy');
    }
    const buy = BuyInput.value
    const sell = SellInput.value
    const fee = FeeInput.value
    const amount = AmountInput.value
   
    Calc(buy, sell, fee, amount);
})