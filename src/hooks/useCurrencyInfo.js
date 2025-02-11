import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({}); // Initialize data state

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => {
                setData(res[currency]); // Set the currency data
            })
            .catch((error) => {
                console.error("Error fetching currency data:", error);
            });
    }, [currency]); // Refetch when currency changes

    return data || {}; // Ensure it always returns an object
}

export default useCurrencyInfo;


//useEffect: A React Hook that performs side effects in functional components (e.g., fetching data, updating the DOM).
// useState: A React Hook that allows functional components to manage state.
//The first .then((res) => res.json()) converts the response into JSON.
// The second .then((res) => setData(res[currency])) updates the data state with the currency exchange rate.