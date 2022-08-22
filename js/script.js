const playerNames = [];

function displayPlayerName(displayPlayers) {
    const displaySinglePlayerName = document.getElementById('display-players');
    displaySinglePlayerName.innerHTML = '';

    for (let i = 0; i < playerNames.length; i++) {
        const singelPlayerName = playerNames[i].singlePlayerName;

        const li = document.createElement('li');
        li.innerHTML = `
        <li>${i + 1}. ${singelPlayerName}</li>
        
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

