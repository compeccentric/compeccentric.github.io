function button_click(e) {
  const elems = document.querySelectorAll(".nav_item");

  [].forEach.call(elems, function (el) {
    el.classList.remove("active");
  });
  e.target.classList.add("active");
}

let divs = [
  "services_1",
  "services_2",
  "services_3",
  "services_4",
  "services_5",
  "services_6",
  "services_7",
  "services_8",
];

var visibleDivId = null;
function divVisibility(divId) {
  if (visibleDivId === divId) {
    visibleDivId = null;
  } else {
    visibleDivId = divId;
  }
  hideNonVisibleDivs();
}

function hideNonVisibleDivs() {
  var i, divId, div;
  for (i = 0; i < divs.length; i++) {
    divId = divs[i];
    div = document.getElementById(divId);
    if (visibleDivId === divId) {
      div.style.display = "block";
    } else {
      div.style.display = "none";
    }
  }
}
