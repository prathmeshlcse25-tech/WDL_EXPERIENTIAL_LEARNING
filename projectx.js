
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
  const price = document.getElementById("priceFilter").value;
  const bhk = document.getElementById("bhkFilter").value;
  
  const cards = document.querySelectorAll("#card-container .col-md-4");
  
  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    
    // City Search
    const cityMatch = text.includes(city) || city === "";
    
    // BHK Filter
    const bhkMatch = bhk === "All" || text.includes(bhk.toLowerCase());
    
    // Price Filter (Simple logic based on text content)
    let priceMatch = true;
    if (price === "Below 50L") {
      // Find numbers followed by 'L' or 'Cr'
      const priceText = text.match(/(\d+)l/);
      if (priceText) {
        const val = parseInt(priceText[1]);
        priceMatch = val < 50;
      }
    } else if (price === "Above 1Cr") {
      priceMatch = text.includes("1cr") || text.includes("above 1cr");
    }

    card.style.display = (cityMatch && bhkMatch && priceMatch) ? "block" : "none";
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
  document.getElementById("priceFilter").addEventListener("change", filterCards);
  document.getElementById("bhkFilter").addEventListener("change", filterCards);
  console.log("Skyline Properties loaded");
});
