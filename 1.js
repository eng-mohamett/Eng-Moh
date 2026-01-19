// MOBILE MENU
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

burger.addEventListener("click",()=>{
  const open = nav.style.display === "flex";
  nav.style.display = open ? "none" : "flex";
  burger.setAttribute("aria-expanded",!open);
});

// AUTO CLOSE MENU
document.querySelectorAll(".nav a").forEach(link=>{
  link.addEventListener("click",()=>{
    if(window.innerWidth <= 650){
      nav.style.display = "none";
      burger.setAttribute("aria-expanded","false");
    }
  });
});

// PROJECT TABS
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab=>{
  tab.addEventListener("click",()=>{
    tabs.forEach(t=>t.classList.remove("active"));
    contents.forEach(c=>c.classList.remove("active"));

    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});

// FORM
function handleSubmit(e){
  e.preventDefault();
  document.getElementById("formStatus").textContent =
    "Mahadsanid! Fariintaada waa la helay.";
  e.target.reset();
}

// YEAR
document.getElementById("year").textContent = new Date().getFullYear();
