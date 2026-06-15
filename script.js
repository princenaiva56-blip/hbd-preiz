// 🔒 PASSWORD
function checkPassword() {
  const input = document.getElementById("passwordInput").value;

  if (input.toLowerCase() === "preiz") {
    document.getElementById("lockScreen").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
  } else {
    document.getElementById("error").textContent = "Wrong password 💔";
  }
}

// 🎁 START EXPERIENCE
function startExperience() {
  startMusic();
  typeMessage();
  startConfetti();
}

// 🎵 MUSIC
function startMusic() {
  const music = document.getElementById("bgMusic");
  music.play().catch(() => {
    alert("Click again to enable music 🎵");
  });
}

// ✍️ TYPING MESSAGE
const message =
"Preiz, turning 18 is a beautiful milestone. May your life be filled with love, growth, peace, and endless opportunities. Shine always ✨";

let i = 0;

function typeMessage() {
  const text = document.getElementById("typingText");
  text.innerHTML = "";

  function type() {
    if (i < message.length) {
      text.innerHTML += message.charAt(i);
      i++;
      setTimeout(type, 40);
    }
  }

  type();
}

// 💬 WISHES
function displayWish(wishText) {
    const list = document.getElementById("wishList");

    const div = document.createElement("div");
    div.className = "wish";
    div.textContent = wishText;

    list.appendChild(div);
}

function addWish() {
    const input = document.getElementById("wishInput");

    if (input.value.trim() === "") return;

    let wishes = JSON.parse(localStorage.getItem("wishes")) || [];

    wishes.push(input.value);

    localStorage.setItem("wishes",JSON.stringify(wishes)
    
        
    );
   
    displayWish(input.value);

    input.value = "";
}

document.addEventListener("DOMContentLoaded", () => {

    const wishes =
        JSON.parse(localStorage.getItem("wishes")) || [];

    wishes.forEach(wish => {
        displayWish(wish);
    });

});

// 🎊 CONFETTI
const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 150; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 5 + 2
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#fff";

  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.fill();
  });

  update();
}

function update() {
  particles.forEach(p => {
    p.y += 1.5;
    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  });
}

function animate() {
  draw();
  requestAnimationFrame(animate);
}

function startConfetti() {
  animate();
}

// resize
window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});