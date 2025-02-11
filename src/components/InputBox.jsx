import React from "react";

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange, // Fixed typo
    currencyOption = [],
    selectedCurrency = "usd", // Fixed typo
    amountDisable = false,
    currencyDisable = false,

    className = "",
}) {
    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="flex-1"> 
                <label className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input 
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount || ""} // Fixed uncontrolled input issue
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="flex-1 flex flex-col items-end"> 
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select 
                    className="rounded-lg px-2 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectedCurrency} // Fixed typo
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOption.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
