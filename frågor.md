resultHistory.forEach((entry) => {
        const listItem = document.createElement("li");
        listItem.textContent = `Result: ${entry.firstInput} ${entry.operator} ${entry.secondInput} = ${entry.result}`;
        historyContainer.appendChild(listItem);
    });

    setTimeout(() => {