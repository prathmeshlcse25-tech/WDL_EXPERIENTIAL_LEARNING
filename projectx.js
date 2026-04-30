<html>
<head>
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
  <h1 class="text-center fw-bold mb-2">🏠 Skyline Properties</h1>
  <p class="text-center text-muted mb-3">Find Your Dream Home in Prime Locations</p>

  <!-- Search with datalist -->
  <div class="text-center mb-4">
    <input list="cities" class="form-control w-50 mx-auto" placeholder="Search by city...">
    <datalist id="cities">
      <option value="Pune">
      <option value="Mumbai">
      <option value="Nashik">
      <option value="Bangalore">
      <option value="Delhi">
    </datalist>
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
        <select class="form-select mb-3">
          <option>All</option>
          <option>1 BHK</option>
          <option>2 BHK</option>
          <option>3 BHK</option>
          <option>4 BHK</option>
        </select>
        <button class="btn btn-success w-100 fw-bold">Apply Filters</button>

        <hr>
        <p class="fw-bold mb-1" style="font-size:14px;">🔥 Deals Closing Soon</p>
        <small>Green Valley</small>
        <progress value="80" max="100" style="width:100%"></progress>
        <small>Skyline Heights</small>
        <progress value="55" max="100" style="width:100%"></progress>
      </div>
    </div>

    <!-- Cards -->
    <div class="col-md-9">
      <div class="row g-3">

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
                <p>📍 Pune &nbsp; 🛏️ 2 BHK &nbsp; 📐 950 sqft<br>📞 9876543210</p>
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
              <details>
                <summary>View Details</summary>
                <p>📍 Mumbai &nbsp; 🛏️ 3 BHK &nbsp; 📐 1400 sqft<br>📞 9123456780</p>
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
              <details>
                <summary>View Details</summary>
                <p>📍 Nashik &nbsp; 🛏️ 1 BHK &nbsp; 📐 600 sqft<br>📞 9988776655</p>
              </details>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>

<hr>
<p class="text-center text-muted pt-2">© <time datetime="2026">2026</time> Skyline Properties | Mumbai, India | All rights reserved.</p>
</body>
</html>// auto commit 1
// auto commit 2
// auto commit 3
// auto commit 4
// auto commit 5
// auto commit 6
// auto commit 7
// auto commit 8
// auto commit 9
// auto commit 10
// auto commit 11
// auto commit 12
// auto commit 13
// auto commit 14
