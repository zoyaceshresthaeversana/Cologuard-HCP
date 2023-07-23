const commercialBtn = document.querySelector("#Commercial");
const medicaidBtn = document.querySelector("#Medicaid");
const medicareBtn = document.querySelector("#Medicare");
const hiddenBlock = document.querySelector(".hidden-chart-container ");
const navBar = document.querySelector(".navbar-container-mobile-view");
const navBarIcon = document.querySelector(".navbar-hamburger-icon");
const searchBtn = document.querySelector(".CommercialSearch");
const coverContainer = document.querySelector(".hidden-cover-container");
const nonCoverContainer = document.querySelector(".hidden-non-cover-container");
const cologuardimage = document.querySelector(".cologuard-image");

function toggleMobileMenu(menu) {
  menu.classList.toggle("open");
}

// navBarIcon.addEventListener("click", () => {
//   if (navBar.style.display === "none") {
//     navBar.style.display = "flex";
//   } else {
//     navBar.style.display = "none";
//   }
// });

// Commercial button
commercialBtn.addEventListener("click", () => {
  if (hiddenBlock.style.display === "none") {
    hiddenBlock.style.display = "grid";
    cologuardimage.style.display = "none";
  } else {
    hiddenBlock.style.display = "none";
    coverContainer.style.display = "none";
    nonCoverContainer.style.display = "none";
    cologuardimage.style.display = "block";
  }
});

// medicacid
medicaidBtn.addEventListener("click", () => {
  if (hiddenBlock.style.display === "none") {
    hiddenBlock.style.display = "grid";
    cologuardimage.style.display = "none";
  } else {
    hiddenBlock.style.display = "none";
    coverContainer.style.display = "none";
    nonCoverContainer.style.display = "none";
    cologuardimage.style.display = "block";
  }
});

// Medicare btn
medicareBtn.addEventListener("click", () => {
  if (hiddenBlock.style.display === "none") {
    hiddenBlock.style.display = "grid";
    cologuardimage.style.display = "none";
  } else {
    hiddenBlock.style.display = "none";
    coverContainer.style.display = "none";
    nonCoverContainer.style.display = "none";
    cologuardimage.style.display = "block";
  }
});

searchBtn.addEventListener("click", () => {
  var selectedCounty = document.getElementById("County").value;
  var selectedProvider = document.getElementById("Provider").value;
  console.log(selectedCounty);
  console.log(selectedProvider);
  if (selectedCounty == "QA" && selectedProvider == "EBB") {
    nonCoverContainer.style.display = "none";
    coverContainer.style.display = "block";
  } else if (selectedCounty == "QA" && selectedProvider == "MP") {
    nonCoverContainer.style.display = "block";
    coverContainer.style.display = "none";
  } else {
  }
});
