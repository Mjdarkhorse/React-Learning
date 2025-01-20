import { useId } from "react";

function InputBox({
    lebel,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption=[],
    selectedCurrency="usd",
    amountDisabled=false,
    currencyDisables=false,
    classname="",
}){
    const id= useId();
    return(
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className='w-1-2'>
                <label htmlFor={id} className="">{label}</label>
                <input 
                type="number"
                id={id}
                placeholder="Amount"
                disabled={amountDisabled}
                value={amount}
                onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>

        </div>
    )
}
export default InputBox;