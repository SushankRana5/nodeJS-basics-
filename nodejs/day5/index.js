const http = require('http')
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.write(`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Roast Page</title>

<style>
/* ------------------ Global Reset ------------------- */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

/* ------------------ Animated Background ------------------- */
body {
  height: 100vh;
  overflow: hidden;
  background: linear-gradient(120deg, #4400ff, #ff00aa, #00d4ff);
  background-size: 400% 400%;
  animation: gradientFlow 10s infinite alternate;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  100% { background-position: 100% 50%; }
}

/* ------------------ Floating Particles ------------------- */
.particle {
  position: absolute;
  width: 8px;
  height: 8px;
  background: white;
  opacity: 0.5;
  border-radius: 50%;
  animation: float 8s infinite ease-in-out;
}

@keyframes float {
  0% { transform: translateY(0) scale(1); opacity: 0.7; }
  50% { transform: translateY(-80px) scale(1.3); opacity: 1; }
  100% { transform: translateY(0) scale(1); opacity: 0.7; }
}

/* Random placement */
.particle:nth-child(1) { left: 10%; animation-delay: 0s;}
.particle:nth-child(2) { left: 25%; animation-delay: 1s;}
.particle:nth-child(3) { left: 40%; animation-delay: 2s;}
.particle:nth-child(4) { left: 60%; animation-delay: 1.5s;}
.particle:nth-child(5) { left: 75%; animation-delay: 0.5s;}
.particle:nth-child(6) { left: 90%; animation-delay: 2.5s;}

/* ------------------ Main Card ------------------- */
.container {
  width: 90%;
  max-width: 650px;
  padding: 40px;
  background: rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  backdrop-filter: blur(12px);
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.25);
  text-align: center;
  animation: fadeIn 1.2s ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.85); }
  to   { opacity: 1; transform: scale(1); }
}

/* ------------------ Heading ------------------- */
.title {
  font-size: 42px;
  font-weight: 700;
  margin-bottom: 15px;
  color: #ffffff;
  text-shadow: 0 0 15px rgba(255,255,255,0.9);
  animation: glow 2s infinite alternate ease-in-out;
}

@keyframes glow {
  0% { text-shadow: 0 0 10px #fff; }
  100% { text-shadow: 0 0 25px #fff; }
}

/* ------------------ Line Text ------------------- */
.subtitle {
  font-size: 20px;
  color: #f6f6f6;
  opacity: 0.9;
  line-height: 1.6;
  animation: slideUp 1.4s ease-out;
}

@keyframes slideUp {
  from { transform: translateY(25px); opacity: 0; }
  to   { transform: translateY(0); opacity: 1; }
}

/* ------------------ Neon Button ------------------- */
.btn {
  margin-top: 25px;
  padding: 14px 30px;
  font-size: 18px;
  font-weight: bold;
  color: white;
  background: transparent;
  border: 2px solid #fff;
  border-radius: 50px;
  cursor: pointer;
  transition: 0.4s;
  animation: fadeIn 2s ease-out;
}

.btn:hover {
  background: white;
  color: black;
  transform: scale(1.08);
  box-shadow: 0 0 18px #fff;
}
</style>
</head>

<body>

<!-- Particles -->
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>
<div class="particle"></div>

<!-- Main Content -->
<div class="container">
  <h1 class="title">Roast Zone 🔥</h1>
  <p class="subtitle">
        1. Rabin types like he’s getting paid per mistake.<br>
2. Rabin’s Wi-Fi has more commitment than he does.<br>
3. Rabin is the reason instructions say “Do NOT try this at home.”<br>
4. If laziness was a sport, Rabin would still come last—too tired to participate.<br>
5. Rabin’s brain has buffering issues.<br>
6. Rabin is the type of guy who studies for a test and still gets the same marks as someone who didn’t.<br>
7. Google searches “Rabin meaning?” whenever he asks a question.<br>
8. Even autocorrect gave up on Rabin.<br>
9. Rabin’s plans have one thing in common: they never happen.<br>
10. If common sense was money, Rabin would be in debt.<br>
  </p>

  
</div>

</body>
</html>
`)
})
let port = 4000;
server.listen(port, () => {
    console.log("done in port 4000");
})