document.addEventListener("DOMContentLoaded", function () {
    const memberInfoElements = document.querySelectorAll(".member-info");

    memberInfoElements.forEach((info, index) => {
        const fullName = getFullName(info);
        console.log(`Integrante ${index + 1}: "${fullName.toUpperCase()}"`);
    });

    const completeButton = document.getElementById("completeButton");

    completeButton.addEventListener("click", function () {
        const userColor = prompt("Ingresa un color para destacar los nombres (por ejemplo, red o #c4203f):");
        applyHighlightColor(userColor);
    });
});

function getFullName(info) {
    const firstName = info.querySelector("dt:first-child + dd").textContent;
    const secondName = info.querySelector("dt:nth-child(4) + dd").textContent;
    const firstLastName = info.querySelector("dt:nth-child(6) + dd").textContent;
    const secondLastName = info.querySelector("dt:last-child + dd").textContent;

    const names = [firstName, secondName].filter(name => name !== '');
    const lastNames = [firstLastName, secondLastName].filter(lastName => lastName !== '');

    return `${names.join(' ')} ${lastNames.join(' ')}`;
}

function applyHighlightColor(userColor) {
    const memberInfoElements = document.querySelectorAll(".member-info");
    memberInfoElements.forEach((info) => {
        const namesToHighlight = info.querySelectorAll("dt:nth-child(4) + dd");
        namesToHighlight.forEach((element) => {
            element.style.color = userColor;
        });
    });
}