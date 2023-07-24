const commercialBtn = document.querySelector("#Commercial");
const medicaidBtn = document.querySelector("#Medicaid");
const medicareBtn = document.querySelector("#Medicare");
const hiddenBlock = document.querySelector(".hidden-chart-container ");
const medicaidHiddenBlock = document.querySelector(
  ".Medicaid-hidden-chart-container"
);
const medicareHiddenBlock = document.querySelector(
  ".Medicare-hidden-chart-container"
);
const navBar = document.querySelector(".navbar-container-mobile-view");
const navBarIcon = document.querySelector(".navbar-hamburger-icon");
const searchBtn = document.querySelector(".CommercialSearch");
const medicacidSearchBtn = document.querySelector(".MedicaidSearch");
const medicareSearchBtn = document.querySelector(".MedicareSearch");
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
  medicaidBtn.classList.remove("activebtn");
  medicareBtn.classList.remove("activebtn");
  medicaidHiddenBlock.style.display = "none";
  medicareHiddenBlock.style.display = "none";
  coverContainer.style.display = "none";
  nonCoverContainer.style.display = "none";
  if (hiddenBlock.style.display === "none") {
    commercialBtn.classList.add("activebtn");
    hiddenBlock.style.display = "grid";
    cologuardimage.style.display = "none";
  } else {
    commercialBtn.classList.remove("activebtn");
    hiddenBlock.style.display = "none";
    coverContainer.style.display = "none";
    nonCoverContainer.style.display = "none";
    cologuardimage.style.display = "block";
  }
});

// medicacid
medicaidBtn.addEventListener("click", () => {
  medicareBtn.classList.remove("activebtn");
  commercialBtn.classList.remove("activebtn");
  hiddenBlock.style.display = "none";
  medicareHiddenBlock.style.display = "none";
  coverContainer.style.display = "none";
  nonCoverContainer.style.display = "none";
  if (medicaidHiddenBlock.style.display === "none") {
    medicaidBtn.classList.add("activebtn");
    medicaidHiddenBlock.style.display = "grid";
    cologuardimage.style.display = "none";
  } else {
    medicaidBtn.classList.remove("activebtn");
    medicaidHiddenBlock.style.display = "none";
    coverContainer.style.display = "none";
    nonCoverContainer.style.display = "none";
    cologuardimage.style.display = "block";
  }
});

// Medicare btn
medicareBtn.addEventListener("click", () => {
  commercialBtn.classList.remove("activebtn");
  medicaidBtn.classList.remove("activebtn");
  hiddenBlock.style.display = "none";
  medicaidHiddenBlock.style.display = "none";
  coverContainer.style.display = "none";
  nonCoverContainer.style.display = "none";
  if (medicareHiddenBlock.style.display === "none") {
    medicareBtn.classList.add("activebtn");
    medicareHiddenBlock.style.display = "grid";
    cologuardimage.style.display = "none";
  } else {
    medicareBtn.classList.remove("activebtn");
    medicareHiddenBlock.style.display = "none";
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
  if (selectedProvider == "T") {
    nonCoverContainer.style.display = "none";
    coverContainer.style.display = "block";
  } else if (selectedProvider == "F") {
    nonCoverContainer.style.display = "block";
    coverContainer.style.display = "none";
  } else {
  }
});

medicacidSearchBtn.addEventListener("click", () => {
  var selectedMedicaidProvider =
    document.getElementById("medicaidProvider").value;
  console.log(selectedMedicaidProvider);
  if (selectedMedicaidProvider == "T") {
    nonCoverContainer.style.display = "none";
    coverContainer.style.display = "block";
  } else if (selectedMedicaidProvider == "F") {
    nonCoverContainer.style.display = "block";
    coverContainer.style.display = "none";
  } else {
  }
});

medicareSearchBtn.addEventListener("click", () => {
  var selectedMedicaidProvider =
    document.getElementById("medicareProvider").value;
  console.log(selectedMedicaidProvider);
  if (selectedMedicaidProvider == "T") {
    nonCoverContainer.style.display = "none";
    coverContainer.style.display = "block";
  } else if (selectedMedicaidProvider == "F") {
    nonCoverContainer.style.display = "block";
    coverContainer.style.display = "none";
  } else {
  }
});
