<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Skyline Properties - Find your dream home">

  <title>Skyline Properties</title>
  <h1>Skyline Properties</h1>
  <p>Find Your Dream Home</p>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
  <style>
    body { background-color: #f0f4f8; font-family: Arial, sans-serif; }
    h1 { color: #2c3e50; }
    .card { border: none; box-shadow: 0 4px 12px rgba(0,0,0,0.15); border-radius: 10px; }
    .card-img-top { height: 180px; object-fit: cover; border-radius: 10px 10px 0 0; }
    .sidebar { background: white; padding: 25px; border-radius: 12px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
    .badge-tag { background-color: #28a745; color: white; padding: 3px 8px; border-radius: 5px; font-size: 12px; }
    details summary { cursor: pointer; color: #0d6efd; font-weight: bold; }
    details p { font-size: 14px; margin-top: 6px; }
  </style>
</head>
<body>
<div class="container mt-4">
  <!-- Improvement 1: Hero section -->
  <div class="hero text-center"></div>
  <h1 class="text-center fw-bold mb-2">🏠 Skyline Properties</h1>
  <p class="text-center text-muted mb-3">Find Your Dream Home in Prime Locations</p>
<!-- Improvement 2: datalist with more cities -->
  <!-- Improvement 3: search button added --></div>
  <!-- Search with datalist -->
  <div class="text-center mb-4">
    <input list="cities" class="form-control w-50 mx-auto" placeholder="Search by city...">
    <datalist id="cities">
      <option value="Pune">
      <option value="Mumbai">
      <option value="Nashik">
      <option value="Bangalore">
      <option value="Delhi">
        <option value="Hydrabad">
          <option value="Chennai">
    </datalist>
    <button calss="btn btn-primary search-btn" oneclick="filterCards()"> Search</button></button>
  </div>

  <hr>
  <div class="row g-4">

    <!-- Sidebar -->
    <div class="col-md-3">
      <div class="sidebar">
        <h5 class="fw-bold mb-3">🔍 Filter</h5>
        <label class="form-label">Price Range</label>
        <select class="form-select mb-3">
          <option>All</option>
          <option>Below 50L</option>
          <option>50L - 1Cr</option>
          <option>Above 1Cr</option>
        </select>
        <label class="form-label">BHK Type</label>
        <select class="form-select mb-3" id="bhkFilter">
          <option>All</option>
          <option>1 BHK</option>
          <option>2 BHK</option>
          <option>3 BHK</option>
          <option>4 BHK</option>
          <option>5 BHK</option>
        </select>

        <!-- Improvement 4: Reset button -->

        <button class="btn btn-success w-100 fw-bold">Apply Filters</button>

        <hr>
        <!-- Improvement 5: Progress Bars -->


        <p class="fw-bold mb-1" style="font-size:14px;">🔥 Deals Closing Soon</p>
        <small>Green Valley</small>
        <progress value="80" max="100" style="width:100%"></progress>
        <small>Skyline Heights</small>
        <progress value="55" max="100" style="width:100%"></progress>
        <small>Sun Villa</small>
        <progress value="90" max="100" style="width:100%"></progress>
        <hr>

        <!-- Improvement 6: total listings count -->
        <p class="text-muted" style="font-size:13px;">📋 Total Listings: <strong>5</strong></p>
      </div>
    </div>

    <!-- Cards -->
    <div class="col-md-9">
      <div class="row g-3" id="card-container">
        <!-- Improvement 7: figure + figcaption on all cards -->
        <!-- Improvement 8: meter rating tag -->
        <!-- Improvement 9: sold badge on one card -->

        <div class="col-md-4">
          <div class="card">
            <figure class="mb-0">
              <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?w=400" class="card-img-top">
              <figcaption class="text-center" style="font-size:11px;color:gray;">Green Valley, Pune</figcaption>
            </figure>
            <div class="card-body">
              <h6 class="fw-bold text-primary">Green Valley</h6>
              <span class="badge-tag">2 BHK</span> <span class="badge-tag">Pune</span>
              <p class="mt-2 mb-1 text-success fw-bold">₹ 45 Lakhs</p>
              <details>
                <summary>View Details</summary>
                <p>📍 Pune &nbsp; 🛏️ 2 BHK &nbsp; 📐 950 sqft<br>📞 9876543210<br>
                <mark><New Launch></mark></p>
              
              </details>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <figure class="mb-0">
              <img src="https://images.pexels.com/photos/323772/pexels-photo-323772.jpeg?w=400" class="card-img-top">
              <figcaption class="text-center" style="font-size:11px;color:gray;">Skyline Heights, Mumbai</figcaption>
            </figure>
            <div class="card-body">
              <h6 class="fw-bold text-primary">Skyline Heights</h6>
              <span class="badge-tag">3 BHK</span> <span class="badge-tag">Mumbai</span>
              <p class="mt-2 mb-1 text-success fw-bold">₹ 90 Lakhs</p>
              <small>Rating:</small> <meter value="5" min="0" max="5"></meter>
              <details>
                <summary>View Details</summary>
                <p>📍 Mumbai &nbsp; 🛏️ 3 BHK &nbsp; 📐 1400 sqft<br>📞 9123456780</p>
                <!-- Improvement 10: listed date with time tag -->
                Listed: <time datetime="2026-01-15">Jan 2026</time></p>
              </details>
            </div>
          </div>
        </div>

        <div class="col-md-4">
          <div class="card">
            <figure class="mb-0">
              <img src="https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?w=400" class="card-img-top">
              <figcaption class="text-center" style="font-size:11px;color:gray;">Blue Star, Nashik</figcaption>
            </figure>
            <div class="card-body">
              <h6 class="fw-bold text-primary">Blue Star</h6>
              <span class="badge-tag">1 BHK</span> <span class="badge-tag">Nashik</span>
              <p class="mt-2 mb-1 text-success fw-bold">₹ 25 Lakhs</p>
              <small>Rating:</small> <meter value="3" min="0" max="5"></meter>
          
              <details>
                <summary>View Details</summary>
                <p>📍 Nashik &nbsp; 🛏️ 1 BHK &nbsp; 📐 600 sqft<br>📞 9988776655</p>
              </details>
            </div>
          </div>
        </div>
<!-- Improvement 12: 4th card Sun Villa -->
        <div class="col-md-4">
          <div class="card">
            <figure class="mb-0">
              <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?w=400" class="card-img-top" alt="Sun Villa">
              <figcaption class="text-center" style="font-size:11px;color:gray;">Sun Villa, Bangalore</figcaption>
            </figure>
            <div class="card-body">
              <h6 class="fw-bold text-primary">Sun Villa</h6>
              <span class="badge-tag">4 BHK</span> <span class="badge-tag">Bangalore</span>
              <p class="mt-2 mb-1 text-success fw-bold">₹ 1.2 Cr</p>
              <small>Rating:</small> <meter value="4" min="0" max="5"></meter>
              <details>
                <summary>View Details</summary>
                <p>📍 Bangalore &nbsp; 🛏️ 4 BHK &nbsp; 📐 2100 sqft<br>📞 9111222333<br>
                Listed: <time datetime="2026-02-10">Feb 2026</time></p>
              </details>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<!-- Improvement 13: 5th card Royal Nest -->
        <div class="col-md-4">
          <div class="card">
            <figure class="mb-0">
              <img src="https://images.pexels.com/photos/1029599/pexels-photo-1029599.jpeg?w=400" class="card-img-top" alt="Royal Nest">
              <figcaption class="text-center" style="font-size:11px;color:gray;">Royal Nest, Delhi</figcaption>
            </figure>
            <div class="card-body">
              <h6 class="fw-bold text-primary">Royal Nest</h6>
              <span class="badge-tag">3 BHK</span> <span class="badge-tag">Delhi</span>
              <p class="mt-2 mb-1 text-success fw-bold">₹ 75 Lakhs</p>
              <small>Rating:</small> <meter value="5" min="0" max="5"></meter>
              <details>
                <summary>View Details</summary>
                <p>📍 Delhi &nbsp; 🛏️ 3 BHK &nbsp; 📐 1350 sqft<br>📞 9444555666<br>
                <mark>Featured Property</mark></p>
              </details>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

<hr>
<p class="text-center text-muted pt-2">© <time datetime="2026">2026</time> Skyline Properties | Mumbai, India | All rights reserved.</p>
</body>
</html>