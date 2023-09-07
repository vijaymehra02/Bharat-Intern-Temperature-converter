document.addEventListener("DOMContentLoaded", function () {
    const convertBtn = document.getElementById("convertBtn");
    const clearBtn = document.getElementById("clearBtn");
    const clearHistoryBtn = document.getElementById("clearHistoryBtn");
    const resultDisplay = document.getElementById("result");
    const historyList = document.getElementById("historyList");

    convertBtn.addEventListener("click", function () {
        const temperatureInput = parseFloat(document.getElementById("temperature").value);
        const fromUnit = document.getElementById("fromUnit").value;
        const toUnit = document.getElementById("toUnit").value;

        let result;

        if (fromUnit === "celsius" && toUnit === "kelvin") {
            result = temperatureInput + 273.15;
        } else if (fromUnit === "kelvin" && toUnit === "celsius") {
            result = temperatureInput - 273.15;
        } else if (fromUnit === "celsius" && toUnit === "fahrenheit") {
            result = (temperatureInput * 9 / 5) + 32;
        } else if (fromUnit === "fahrenheit" && toUnit === "celsius") {
            result = (temperatureInput - 32) * 5 / 9;
        } else if (fromUnit === "kelvin" && toUnit === "fahrenheit") {
            result = (temperatureInput - 273.15) * 9 / 5 + 32;
        } else if (fromUnit === "fahrenheit" && toUnit === "kelvin") {
            result = (temperatureInput - 32) * 5 / 9 + 273.15;
        } else {
            result = temperatureInput; // If same units are selected
        }

        // Update result display
        resultDisplay.innerText = `Result: ${result.toFixed(2)} ${toUnit}`;

        // Add entry to history log
        const historyEntry = `${temperatureInput.toFixed(2)} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
        const li = document.createElement("li");
        li.innerHTML = `
            <span>${historyEntry}</span>
            <button class="delete-entry-btn">Delete</button>`;
        historyList.prepend(li);

        // Clear input fields
        document.getElementById("temperature").value = "";
    });

    clearBtn.addEventListener("click", function () {
        resultDisplay.innerText = "";
        document.getElementById("temperature").value = "";
    });

    clearHistoryBtn.addEventListener("click", function () {
        historyList.innerHTML = "";
    });

    historyList.addEventListener("click", function (event) {
        if (event.target.classList.contains("delete-entry-btn")) {
            event.target.parentElement.remove();
        }
    });

    // ... Rest of the code ...
});
