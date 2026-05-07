
async function searchCity() {
  const city = document.getElementById("searchInput").value.trim();
  const resultBox = document.getElementById("api-result");

  if (!city) { filterCards(); return; }

  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(city)}&format=json&limit=1`;

  try {
    const res = await fetch(url, { headers: { "Accept-Language": "en" } });
    const data = await res.json();

    if (data.length > 0) {
      const place = data[0];
      resultBox.style.display = "block";
      resultBox.innerHTML = `✅ <strong>${place.display_name}</strong><br>
        📍 Lat: ${parseFloat(place.lat).toFixed(4)} | Lon: ${parseFloat(place.lon).toFixed(4)}`;
    } else {
      resultBox.style.display = "block";
      resultBox.innerHTML = "❌ City not found.";
    }
  } catch (err) {
    resultBox.style.display = "block";
    resultBox.innerHTML = "⚠️ Error: " + err.message;
  }

  filterCards();
}

function filterCards() {
  const city = document.getElementById("searchInput").value.toLowerCase();
  const cards = document.querySelectorAll("#card-container .col-md-4");
  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    card.style.display = (text.includes(city) || city === "") ? "block" : "none";
  });
}

function resetFilters() {
  document.getElementById("searchInput").value = "";
  document.getElementById("priceFilter").value = "All";
  document.getElementById("bhkFilter").value = "All";
  document.getElementById("api-result").style.display = "none";
  filterCards();
}

document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("searchInput").addEventListener("keypress", function(e) {
    if (e.key === "Enter") searchCity();
  });
  console.log("Skyline Properties loaded");
});
