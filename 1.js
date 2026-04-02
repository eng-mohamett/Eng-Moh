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


// Firebase Configuration
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getDatabase, ref, onValue, push, set } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyB6eNH-U-4IHjgiLsZ7Ezi6sLYNYlr9uaE",
  authDomain: "engmo-port.firebaseapp.com",
  databaseURL: "https://engmo-port-default-rtdb.firebaseio.com",
  projectId: "engmo-port",
  storageBucket: "engmo-port.firebasestorage.app",
  messagingSenderId: "555854261992",
  appId: "1:555854261992:web:64852b9482a34caf3fe35d"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Inaan xogta kaso aqrino Firebase oo aan soo bandhigno
const webGrid = document.getElementById("web");
const designGrid = document.getElementById("design");

onValue(ref(db, 'projects'), (snapshot) => {
  const data = snapshot.val();
  if (data) {
    webGrid.innerHTML = '';
    designGrid.innerHTML = '';
    
    Object.keys(data).forEach(key => {
      const project = data[key];
      const card = `
        <article class="card">
          ${project.type === 'design' ? `<img src="${project.image}" alt="${project.title}">` : ''}
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          ${project.link ? `<a href="${project.link}" class="link">View</a>` : ''}
        </article>
      `;
      
      if (project.type === 'web') {
        webGrid.innerHTML += card;
      } else {
        designGrid.innerHTML += card;
      }
    });
  }
});
