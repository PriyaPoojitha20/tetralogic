/* ============================================================
   SmartFin Pro — Core Utilities
   ============================================================ */

const API = "http://localhost:5000/api";

/* ── Auth ── */
function loginUser(e){
  e.preventDefault();
  const email=document.getElementById("email")?.value.trim();
  const pass=document.getElementById("password")?.value;
  if(!email||!pass)return alert("Enter email and password.");
  localStorage.setItem("sf_user",JSON.stringify({email,name:email.split("@")[0]}));
  window.location.href="dashboard.html";
}
function logout(){localStorage.removeItem("sf_user");window.location.href="login.html";}
function checkLogin(){if(!localStorage.getItem("sf_user"))window.location.href="../login.html";}
function getUser(){const u=localStorage.getItem("sf_user");return u?JSON.parse(u):null;}

/* ── Storage ── */
function save(k,v){localStorage.setItem("sf_"+k,JSON.stringify(v));}
function load(k,fb=null){const d=localStorage.getItem("sf_"+k);return d?JSON.parse(d):fb;}

/* ── Formatting ── */
function fmt(n,dec=0){
  return "₹"+Number(n).toLocaleString("en-IN",{minimumFractionDigits:dec,maximumFractionDigits:dec});
}
function pct(n){return Number(n).toFixed(1)+"%";}
function mono(n){return `<span style="font-family:var(--font-mono)">${n}</span>`;}

/* ── Result Box ── */
function showResult(id,html,type=""){
  const el=document.getElementById(id);if(!el)return;
  el.innerHTML=html;el.style.display="block";el.className="result-box "+(type||"");
  el.scrollIntoView({behavior:"smooth",block:"nearest"});
}
function hideResult(id){const el=document.getElementById(id);if(el)el.style.display="none";}

/* ── Button loading state ── */
function setLoad(id,on){
  const b=document.getElementById(id);if(!b)return;
  if(on){b.dataset.orig=b.innerHTML;b.innerHTML='<span class="spin"></span> Working…';b.disabled=true;}
  else{b.innerHTML=b.dataset.orig||b.innerHTML;b.disabled=false;}
}

/* ── API ── */
async function apiFetch(path,method="GET",body=null){
  const opts={method,headers:{"Content-Type":"application/json"}};
  if(body)opts.body=JSON.stringify(body);
  const res=await fetch(API+path,opts);
  if(!res.ok)throw new Error(res.status);
  return res.json();
}

/* ── Nav highlight ── */
function highlightNav(){
  const pg=location.pathname.split("/").pop();
  document.querySelectorAll(".nav-links a").forEach(a=>{
    if(a.getAttribute("href")&&a.getAttribute("href").includes(pg))a.classList.add("active");
  });
  const user=getUser();
  const el=document.getElementById("navUser");
  if(el&&user)el.textContent="👤 "+user.name;
}

document.addEventListener("DOMContentLoaded",()=>{
  highlightNav();
  // Hamburger menu
  const ham=document.getElementById("hamburger");
  const nl=document.querySelector(".nav-links");
  if(ham&&nl)ham.addEventListener("click",()=>nl.classList.toggle("open"));
});
