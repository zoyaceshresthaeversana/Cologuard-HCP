const body = document.querySelector("body");
const head = document.querySelector("head");

window.addEventListener("load", function () {
  setTimeout(function open(event) {
    document.querySelector(".HCP-pop-up").style.display = "block";
    body.style.backgroundColor = "rgba( 0 , 0, 0 , .5)";
  }, 500);
});

const popUpCross = document.querySelector(".cross-btn");
popUpCross.addEventListener("click", () => {
  var popUpContent = document.querySelector(".HCP-pop-up");
  popUpContent.style.display = "none";
  body.style.backgroundColor = "white";
});
