const playerNames = [];

function displayPlayerName(displayPlayers) {
    if (displayPlayers.length > 5) {
        alert("You can't add more than 5 players");
        return;
    }
    const displaySinglePlayerName = document.getElementById('display-players');
    displaySinglePlayerName.innerHTML = '';

    for (let i = 0; i < playerNames.length; i++) {
        const singelPlayerName = playerNames[i].singlePlayerName;

        const li = document.createElement('li');
        li.innerHTML = `
        <li class="text-xl font-semibold">${i + 1}. ${singelPlayerName}</li>
        
        `;

        displaySinglePlayerName.appendChild(li);
    }

}

function addPlayerOnClick(playerId) {
    const playerName = playerId.parentNode.parentNode.children[1].innerText;
    const playerObj = { singlePlayerName: playerName };
    playerNames.push(playerObj);
    displayPlayerName(playerNames);
}

function disableIt(elementDisable) {
    elementDisable.disabled = true;
    return;
}

function getInputFields(inputId) {
    const getInputField = document.getElementById(inputId);
    const getInputElementString = getInputField.value;
    const getInputElement = parseFloat(getInputElementString);
    getInputField.value = '';
    if (getInputElementString < 0) {
        alert('Input positive number or type number type data.');
        return;
    }

    return getInputElement;
}

function getAndSetElemnetValue(elementId, newValue) {
    const getElements = document.getElementById(elementId);
    const getElementsString = getElements.innerText;
    const elements = parseFloat(getElementsString);
    getElements.innerText = newValue;

    return elements;
}

// calculating & displaying player cost
document.getElementById('calc-player-cost').addEventListener('click', function () {
    const getPlayerCostInput = getInputFields('per-player-total')
    const totalPlayerCost = getPlayerCostInput * playerNames.length;
    getAndSetElemnetValue('total-player-cost', totalPlayerCost);

})


document.getElementById('calculate-total').addEventListener('click', function () {
    const totalPlayerCost = document.getElementById('total-player-cost');
    const totalPlayerCostString = totalPlayerCost.innerText;
    const playerCost = parseFloat(totalPlayerCostString);

    const managerCost = getInputFields('manager-cost');
    const coachCost = getInputFields('coach-cost');

    const totalCost = playerCost + managerCost + coachCost;

    getAndSetElemnetValue('total-cost', totalCost);
})
