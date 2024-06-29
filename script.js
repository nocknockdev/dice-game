const tasks = ["Doggy", "Missionary", "Cowgirl", "Reverse-Cowgirl", "69", "Scissoring", "Spooning","Oral","Prone boning","Mutual maz",];
const places = ["Oturma odası", "Mutfak", "Bahçe", "Balkon", "Yatak odası", "Banyo"];

document.getElementById('rollButton').addEventListener('click', rollDice);

function rollDice() {
    const task = tasks[Math.floor(Math.random() * tasks.length)];
    const place = places[Math.floor(Math.random() * places.length)];
    document.getElementById('result').innerText = `${task} - ${place}`;
}
