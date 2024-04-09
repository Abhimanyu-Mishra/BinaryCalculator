function calculate() {
    const legCount = parseInt(document.getElementById("legCount").value);
    const levelCount = parseInt(document.getElementById("levelCount").value);
    const joiningFee = parseFloat(document.getElementById("joiningFee").value);
    const matchingPair = parseFloat(document.getElementById("matchingPair").value);

    const totalMembers = calculateTotalMembers(legCount, levelCount);
    const totalJoiningFee = calculateTotalJoiningFee(totalMembers, joiningFee);
    const totalMatchingPairs = calculateTotalMatching(totalMembers);
    const totalMatchingBonus = calculateMatchingBonus(totalMatchingPairs, matchingPair);
    const totalPayout = totalMatchingBonus*100/totalJoiningFee;
    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `
        <p>Total Members: ${totalMembers}</p>
        <p>Total Joining Fee: ${totalJoiningFee.toFixed(2)}</p>
        <p>Total Matching Pairs: ${totalMatchingPairs}</p>
        <p>Total Matching Bonus: ${totalMatchingBonus.toFixed(2)}</p>
        <h2>Total PayOut % : ${totalPayout}</h2>
    `;
}

function calculateTotalMembers(legCount, levelCount) {
    return Math.pow(2, levelCount) * legCount - 1;
}

function calculateTotalJoiningFee(totalMembers, joiningFee) {
    return totalMembers * joiningFee;
}

function calculateTotalMatching(totalMembers) {
    return Math.floor((totalMembers - 1) / 2);
}

function calculateMatchingBonus(totalMatchingPairs, matchingPair) {
    return totalMatchingPairs * matchingPair;
}
