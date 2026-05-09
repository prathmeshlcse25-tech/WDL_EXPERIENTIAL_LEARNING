
async function searchCity() {
  const cityInput = document.getElementById("searchInput").value.trim();
  const resultBox = document.getElementById("api-result");

  if (!cityInput) { 
    resultBox.style.display = "none";
    filterCards(); 
    return; 
  }

  const url = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(cityInput)}&format=json&limit=1`;

  try {
    const res = await fetch(url, { headers: { "Accept-Language": "en" } });
    const data = await res.json();

    if (data.length > 0) {
      const place = data[0];
      resultBox.style.display = "block";
      resultBox.innerHTML = `<div>📍 <strong>${place.display_name}</strong></div>
        <div style="margin-top:5px; color:#64748b;">📍 Lat: ${parseFloat(place.lat).toFixed(4)} | Lon: ${parseFloat(place.lon).toFixed(4)}</div>`;
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
  const citySearch = document.getElementById("searchInput").value.toLowerCase();
  const priceFilter = document.getElementById("priceFilter").value;
  const bhkFilter = document.getElementById("bhkFilter").value;
  
  const cards = document.querySelectorAll("#card-container .card");
  
  cards.forEach(card => {
    const text = card.innerText.toLowerCase();
    const cardCity = card.getAttribute("data-city") || "";
    const cardBhk = card.getAttribute("data-bhk") || "";
    const cardPrice = parseInt(card.getAttribute("data-price")) || 0;
    
    // City Search (checks both data-city and overall text)
    const cityMatch = citySearch === "" || cardCity.includes(citySearch) || text.includes(citySearch);
    
    // BHK Filter
    const bhkMatch = bhkFilter === "All" || cardBhk === bhkFilter.split(" ")[0];
    
    // Price Filter
    let priceMatch = true;
    if (priceFilter === "Below 50L") {
      priceMatch = cardPrice < 50;
    } else if (priceFilter === "Above 1Cr") {
      priceMatch = cardPrice >= 100;
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
  const searchInput = document.getElementById("searchInput");
  if(searchInput) {
    searchInput.addEventListener("keypress", function(e) {
      if (e.key === "Enter") searchCity();
    });
  }
  
  const priceFilter = document.getElementById("priceFilter");
  if(priceFilter) priceFilter.addEventListener("change", filterCards);
  
  const bhkFilter = document.getElementById("bhkFilter");
  if(bhkFilter) bhkFilter.addEventListener("change", filterCards);
  
  console.log("Skyline Properties loaded");
});
