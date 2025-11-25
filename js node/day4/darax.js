const http = require('http');
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');

    res.write(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Darax — Demo e‑commerce (HTML + CSS)</title>
  <meta name="description" content="Simple Darax-like storefront demo using just HTML and CSS (responsive).">
  <style>
    /* ---------------------------
       Reset & base
       --------------------------- */
    :root{
      --primary:#ff3b30; /* energetic red */
      --accent:#0b74de;  /* blue for CTAs */
      --muted:#6b7280;
      --card:#ffffff;
      --bg:#f6f7fb;
      --radius:12px;
      --max-width:1200px;
      --glass: rgba(255,255,255,0.6);
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    }
    *{box-sizing:border-box}
    html,body{height:100%}
    body{
      margin:0;padding:0;
      background: linear-gradient(180deg,#f6f7fb 0%, #ffffff 100%);
      color:#111827;font-size:16px;line-height:1.4;
      display:flex;justify-content:center;padding:32px 16px;
    }
    .container{width:100%;max-width:var(--max-width)}

    /* ---------------------------
       Header / navbar
       --------------------------- */
    header{
      display:flex;align-items:center;gap:18px;padding:16px 0;
      margin-bottom:18px;
    }
    .logo{
      display:flex;align-items:center;gap:10px;font-weight:700;font-size:20px;color:var(--primary);
    }
    .logo .mark{
      width:44px;height:36px;background:linear-gradient(135deg,var(--primary),#ff7b7b);border-radius:8px;display:grid;place-items:center;color:white;font-weight:800
    }
    .searchbar{flex:1;display:flex;border-radius:999px;background:white;box-shadow:0 6px 18px rgba(10,10,20,0.06);overflow:hidden}
    .searchbar input{flex:1;padding:12px 16px;border:0;outline:none;font-size:15px}
    .searchbar button{background:var(--accent);color:white;border:0;padding:10px 18px;border-radius:0 999px 999px 0;cursor:pointer}
    .nav-actions{display:flex;gap:12px;align-items:center}
    .icon-btn{background:transparent;border:0;padding:8px 10px;border-radius:8px;cursor:pointer}
    .cart{background:linear-gradient(180deg,#ff7b7b,#ff3b30);color:white;padding:8px 12px;border-radius:10px}

    /* ---------------------------
       Layout: sidebar + main
       --------------------------- */
    .layout{display:grid;grid-template-columns:260px 1fr;gap:20px}

    /* Sidebar */
    .sidebar{background:linear-gradient(180deg,rgba(255,255,255,0.85),rgba(255,255,255,0.75));padding:16px;border-radius:12px;box-shadow:0 6px 18px rgba(12,12,20,0.04)}
    .categories h3{margin:0 0 10px 0;font-size:14px;color:var(--muted)}
    .cat-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}
    .cat-list a{display:flex;align-items:center;gap:10px;padding:8px;border-radius:8px;color:#111827;text-decoration:none}
    .cat-list a:hover{background:rgba(11,116,222,0.06)}

    /* Filters */
    .filter{margin-top:18px}
    .price-range{display:flex;gap:8px}
    input[type=range]{width:100%}

    /* Main */
    .hero{display:flex;gap:18px;align-items:center;background:linear-gradient(90deg,#fff,#f9fbff);padding:18px;border-radius:12px}
    .hero .text{flex:1}
    .hero h1{margin:0;font-size:26px}
    .hero p{margin:4px 0 0;color:var(--muted)}
    .hero .cta{margin-top:12px;padding:10px 14px;background:var(--primary);border-radius:10px;color:white;border:0}
    .hero .image{width:220px;height:110px;border-radius:12px;background:linear-gradient(135deg,#eaf6ff,#ffffff);display:grid;place-items:center}

    /* Products grid */
    .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:18px}
    .card{background:var(--card);padding:12px;border-radius:12px;box-shadow:0 6px 18px rgba(12,12,20,0.04);display:flex;flex-direction:column}
    .thumb{height:160px;border-radius:10px;display:grid;place-items:center;background:linear-gradient(180deg,#f8fafc,#eef2ff);margin-bottom:10px;position:relative}
    .thumb img{max-width:100%;max-height:100%;object-fit:contain}
    .badge{position:absolute;left:8px;top:8px;background:var(--primary);color:white;padding:6px 8px;border-radius:999px;font-size:12px}
    .card h4{margin:0 0 6px 0;font-size:15px}
    .price-row{margin-top:auto;display:flex;align-items:center;justify-content:space-between;gap:8px}
    .price{font-weight:700}
    .old{color:var(--muted);text-decoration:line-through;font-size:13px}
    .buy{background:var(--accent);color:white;padding:8px 10px;border-radius:8px;border:0;cursor:pointer}

    /* Footer */
    footer{margin-top:22px;padding:18px 10px;color:var(--muted);font-size:14px;text-align:center}

    /* Responsive */
    @media (max-width:1000px){
      .grid{grid-template-columns:repeat(3,1fr)}
      .layout{grid-template-columns:220px 1fr}
    }
    @media (max-width:800px){
      body{padding:18px}
      .layout{grid-template-columns:1fr;}
      .sidebar{order:2}
      .hero{flex-direction:column;align-items:flex-start}
      .grid{grid-template-columns:repeat(2,1fr)}
    }
    @media (max-width:480px){
      header{gap:8px}
      .logo{font-size:16px}
      .grid{grid-template-columns:1fr}
      .searchbar input{padding:10px}
    }
  </style>
</head>
<body>
  <div class="container">
    <header>
      <div class="logo"><div class="mark">D</div>Darax<span style="color:var(--muted);font-weight:400;margin-left:6px">demo</span></div>
      <div class="searchbar" role="search">
        <input type="search" placeholder="Search products, brands and categories" aria-label="Search" />
        <button aria-label="Search">Search</button>
      </div>
      <div class="nav-actions">
        <button class="icon-btn">Sign in</button>
        <button class="icon-btn">Wishlist</button>
        <button class="cart">Cart (2)</button>
      </div>
    </header>

    <div class="layout">
      <aside class="sidebar">
        <div class="categories">
          <h3>Shop by category</h3>
          <ul class="cat-list">
            <li><a href="#">Electronics</a></li>
            <li><a href="#">Mobiles & Accessories</a></li>
            <li><a href="#">Home Appliances</a></li>
            <li><a href="#">Fashion</a></li>
            <li><a href="#">Health & Beauty</a></li>
            <li><a href="#">Toys & Baby</a></li>
          </ul>
        </div>

        <div class="filter">
          <h3>Filters</h3>
          <div style="margin-top:8px;font-size:13px;color:var(--muted)">Price</div>
          <div class="price-range">
            <input type="range" min="0" max="1000" value="400" />
          </div>
          <div style="margin-top:12px;font-size:13px;color:var(--muted)">Brand</div>
          <div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;">
            <button class="icon-btn">Brand A</button>
            <button class="icon-btn">Brand B</button>
            <button class="icon-btn">Brand C</button>
          </div>
        </div>
      </aside>

      <main>
        <section class="hero">
          <div class="text">
            <h1>Big deals on top brands</h1>
            <p>Discover discounts, flash sales and free delivery on selected items.</p>
            <button class="cta">Shop flash sale</button>
          </div>
          <div class="image" aria-hidden="true">
            <!-- SVG placeholder art -->
            <svg width="160" height="80" viewBox="0 0 160 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="0" y="0" width="160" height="80" rx="12" fill="#eaf6ff"/>
              <circle cx="46" cy="36" r="20" fill="#fff" stroke="#dbeafe"/>
              <rect x="86" y="18" width="60" height="40" rx="8" fill="#fff" stroke="#dbeafe"/>
            </svg>
          </div>
        </section>

        <section class="grid" aria-label="Products">
          <!-- Product card (repeat) -->
          <article class="card">
            <div class="thumb">
              <div class="badge">-25%</div>
              <!-- simple product SVG placeholder -->
              <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="120" rx="12" fill="#fff"/>
                <circle cx="60" cy="50" r="28" fill="#f3f4f6"/>
                <rect x="30" y="88" width="60" height="10" rx="5" fill="#eef2ff"/>
              </svg>
            </div>
            <h4>Wireless Headphones</h4>
            <div style="color:var(--muted);font-size:13px">Brand A • 1 year warranty</div>
            <div class="price-row">
              <div>
                <div class="price">$74</div>
                <div class="old">$99</div>
              </div>
              <button class="buy">Add</button>
            </div>
          </article>

          <article class="card">
            <div class="thumb">
              <div class="badge">Hot</div>
              <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="120" rx="12" fill="#fff"/>
                <rect x="18" y="22" width="84" height="56" rx="8" fill="#fff" stroke="#eef2ff"/>
                <rect x="25" y="85" width="70" height="10" rx="5" fill="#fff" stroke="#eef2ff"/>
              </svg>
            </div>
            <h4>Iphone X</h4>
            <div style="color:var(--muted);font-size:13px">128GB • Dual SIM</div>
            <div class="price-row">
              <div>
                <div class="price">$399</div>
                <div class="old">$449</div>
              </div>
              <button class="buy">Add</button>
            </div>
          </article>

          <article class="card">
            <div class="thumb">
              <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="120" rx="12" fill="#fff"/>
                <rect x="34" y="34" width="52" height="52" rx="8" fill="#f8fafc"/>
              </svg>
            </div>
            <h4>Electric Kettle</h4>
            <div style="color:var(--muted);font-size:13px">1.7L • Auto shut-off</div>
            <div class="price-row">
              <div>
                <div class="price">$29</div>
                <div class="old">$39</div>
              </div>
              <button class="buy">Add</button>
            </div>
          </article>

          <article class="card">
            <div class="thumb">
              <svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
                <rect width="120" height="120" rx="12" fill="#fff"/>
                <path d="M20 80C40 60 80 60 100 80" stroke="#eef2ff" stroke-width="10" stroke-linecap="round" fill="none"/>
              </svg>
            </div>
            <h4>Running Shoes</h4>
            <div style="color:var(--muted);font-size:13px">Lightweight • Breathable</div>
            <div class="price-row">
              <div>
                <div class="price">$59</div>
                <div class="old">$79</div>
              </div>
              <button class="buy">Add</button>
            </div>
          </article>

          <!-- duplicate more cards to populate -->
          <article class="card">
            <div class="thumb"><svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="12" fill="#fff"/></svg></div>
            <h4>Bluetooth Speaker</h4>
            <div style="color:var(--muted);font-size:13px">Portable • 10h play</div>
            <div class="price-row"><div><div class="price">$24</div><div class="old">$34</div></div><button class="buy">Add</button></div>
          </article>

          <article class="card">
            <div class="thumb"><svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="12" fill="#fff"/></svg></div>
            <h4>Fitness Band</h4>
            <div style="color:var(--muted);font-size:13px">Heart rate • Sleep track</div>
            <div class="price-row"><div><div class="price">$34</div><div class="old">$49</div></div><button class="buy">Add</button></div>
          </article>

          <article class="card">
            <div class="thumb"><svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="12" fill="#fff"/></svg></div>
            <h4>LED Monitor</h4>
            <div style="color:var(--muted);font-size:13px">24" Full HD</div>
            <div class="price-row"><div><div class="price">$129</div><div class="old">$159</div></div><button class="buy">Add</button></div>
          </article>

          <article class="card">
            <div class="thumb"><svg width="120" height="120" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><rect width="120" height="120" rx="12" fill="#fff"/></svg></div>
            <h4>Portable Charger</h4>
            <div style="color:var(--muted);font-size:13px">10,000 mAh</div>
            <div class="price-row"><div><div class="price">$19</div><div class="old">$29</div></div><button class="buy">Add</button></div>
          </article>

        </section>

        <footer>
          © 2025 Darax Demo · Built with plain HTML & CSS · Not a real store
        </footer>
      </main>
    </div>
  </div>
</body>
</html>
`)
    res.end();
})
const port = 2000;
server.listen(port, () => {
    console.log('server is running at port 2000')
})