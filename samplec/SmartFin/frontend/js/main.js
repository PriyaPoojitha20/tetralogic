/* ============================================================
   SmartFin - Main JavaScript (shared across all pages)
   ============================================================ */

const API = "http://localhost:5000/api";

/* ── Auth ── */
function loginUser(event) {
  event.preventDefault();
  const email    = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  if (!email || !password) {
    return alert("Please enter email and password.");
  }

  localStorage.setItem("smartfin_user", email);
  window.location.href = "dashboard.html";
}

function logout() {
  localStorage.removeItem("smartfin_user");
  window.location.href = "login.html";
}

function checkLogin() {
  const user = localStorage.getItem("smartfin_user");
  if (!user) window.location.href = "login.html";
}

/* ── LocalStorage helpers (for financial health score) ── */
function saveData(key, value) {
  localStorage.setItem("sf_" + key, JSON.stringify(value));
}

function getData(key) {
  const d = localStorage.getItem("sf_" + key);
  return d ? JSON.parse(d) : null;
}

/* ── Currency formatter ── */
function fmt(amount) {
  return "₹" + Number(amount).toLocaleString("en-IN", { maximumFractionDigits: 2 });
}

/* ── Show / hide result box ── */
function showResult(id, html, isError = false) {
  const el = document.getElementById(id);
  if (!el) return;
  el.innerHTML = html;
  el.style.display = "block";
  el.classList.toggle("error", isError);
}

/* ── Generic API fetch ── */
async function apiFetch(path, method = "GET", body = null) {
  const opts = {
    method,
    headers: { "Content-Type": "application/json" },
  };
  if (body) opts.body = JSON.stringify(body);
  const res  = await fetch(API + path, opts);
  return res.json();
}

/* ── Hero slider ── */
function initHeroSlider() {
  const track = document.getElementById("heroSlides");
  if (!track) return;
  let idx = 0;
  const total = track.children.length;
  function go(n) { idx = (n + total) % total; track.style.transform = `translateX(-${idx * 100}%)`; }
  document.getElementById("heroPrev")?.addEventListener("click", () => go(idx - 1));
  document.getElementById("heroNext")?.addEventListener("click", () => go(idx + 1));
  setInterval(() => go(idx + 1), 4500);
}

/* ── Info-cards slider ── */
function initInfoSlider() {
  const track = document.getElementById("infoTrack");
  if (!track) return;
  let idx = 0;
  const total = track.children.length;
  setInterval(() => {
    idx = (idx + 1) % total;
    track.style.transform = `translateX(-${idx * 100}%)`;
  }, 4000);
}

/* ── Dropdown menu toggle ── */
function toggleMenu() {
  const m = document.getElementById("dropdownMenu");
  if (m) m.style.display = m.style.display === "block" ? "none" : "block";
}

/* ── Init on load ── */
document.addEventListener("DOMContentLoaded", () => {
  initHeroSlider();
  initInfoSlider();
});
