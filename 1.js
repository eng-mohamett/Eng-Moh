

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


// Soo aqrinta mashaariicda database-ka
const webGrid = document.getElementById("web");
const designGrid = document.getElementById("design");

function loadProjects() {
  database.ref('projects/').on('value', (snapshot) => {
    const data = snapshot.val();
    
    // Clear current grids
    webGrid.innerHTML = "";
    designGrid.innerHTML = "";

    if (data.web) {
      Object.values(data.web).forEach(proj => {
        webGrid.innerHTML += `
          <article class="card">
            <h3>${proj.title}</h3>
            <p>${proj.desc}</p>
            <a href="${proj.link}" class="link" target="_blank">View</a>
          </article>`;
      });
    }

    if (data.design) {
      Object.values(data.design).forEach(proj => {
        designGrid.innerHTML += `
          <article class="card">
            <img src="${proj.link}" alt="${proj.title}">
            <p>${proj.title}</p>
          </article>`;
      });
    }
  });
}

// Call function
loadProjects();


// FORM
function handleSubmit(e){
  e.preventDefault();
  document.getElementById("formStatus").textContent =
    "Mahadsanid! Fariintaada waa la helay.";
  e.target.reset();
}

// YEAR
document.getElementById("year").textContent = new Date().getFullYear();

