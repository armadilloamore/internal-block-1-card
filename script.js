const majorArcana = [
    "Fool", "Magician", "High Priestess", "Empress", "Emperor", "Hierophant",
    "Lovers", "Chariot", "Strength", "Hermit", "Wheel of Fortune", "Justice",
    "Hanged Man", "Death", "Temperance", "Devil", "Tower", "Star", "Moon",
    "Sun", "Judgement", "World"
];

function getCardImage(cardName) {
    return `cards/${cardName.toLowerCase().replace(/ /g, '-').replace(/[^\w-]/g, '')}.jpg`;
}

function drawCard() {
    const index = Math.floor(Math.random() * majorArcana.length);
    const card = majorArcana[index];

    document.getElementById("card").innerHTML = `
    <p>You drew:</p>
    <div class="card-container">
      <div class="card">
        <img src="${getCardImage(card)}" alt="${card}" />
        <p>${card}</p>
      </div>
    </div>
  `;

    fetch('cardData.json')
        .then(res => res.json())
        .then(data => {
            const interpretation = data[card] || "<p>Interpretation coming soon...</p>";
            document.getElementById("interpretation").innerHTML = interpretation;
        });
}
