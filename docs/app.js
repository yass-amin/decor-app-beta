let currentIndex = 0;
let preferences = { modern: 0, classic: 0, minimalist: 0, islamic: 0 };

// Sample swipe deck (replace with Pinterest API later)
const cards = [
  { img: "https://via.placeholder.com/300x400?text=Modern+Design", tag: "modern" },
  { img: "https://via.placeholder.com/300x400?text=Classic+Design", tag: "classic" },
  { img: "https://via.placeholder.com/300x400?text=Minimalist+Design", tag: "minimalist" },
  { img: "https://via.placeholder.com/300x400?text=Islamic+Design", tag: "islamic" }
];

function chooseType(type) {
  document.getElementById("onboarding").classList.add("hidden");
  document.getElementById("swipe-deck").classList.remove("hidden");
  showCard();
}

function showCard() {
  if (currentIndex >= cards.length) {
    showResults();
    return;
  }
  const cardData = cards[currentIndex];
  const container = document.getElementById("card-container");
  container.innerHTML = `
    <div class="card">
      <img src="${cardData.img}" alt="Design">
    </div>
  `;
}

function swipe(direction) {
  if (direction === "right") {
    const tag = cards[currentIndex].tag;
    preferences[tag]++;
  }
  currentIndex++;
  showCard();
}

function showResults() {
  document.getElementById("swipe-deck").classList.add("hidden");
  document.getElementById("results").classList.remove("hidden");

  // Find top preference
  let topStyle = Object.keys(preferences).reduce((a, b) => preferences[a] > preferences[b] ? a : b);
  document.getElementById("preference-text").innerText = `You prefer ${topStyle} style.`;

  // Placeholder gallery (replace with Pinterest API)
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = `
    <img src="https://via.placeholder.com/150?text=${topStyle}+1">
    <img src="https://via.placeholder.com/150?text=${topStyle}+2">
    <img src="https://via.placeholder.com/150?text=${topStyle}+3">
  `;
}
