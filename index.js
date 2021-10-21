var current_page = 1;
var records_per_page = 2;

var objJson = [
  { data: "data 1" },
  { data: "data 2" },
  { data: "data 3" },
  { data: "data 4" },
  { data: "data 5" },
  { data: "data 6" },
  { data: "data 7" },
  { data: "data 8" },
  { data: "data 9" },
  { data: "data 10" },
];

function prevPage() {
  if (current_page > 1) {
    current_page--;
    changePage(current_page);
  }
}

function nextPage() {
  if (current_page < numPages()) {
    current_page++;
    changePage(current_page);
  }
}

function changePage(page) {
  var btn_next = document.getElementById("btn_next");
  var btn_prev = document.getElementById("btn_prev");
  var listing_table = document.getElementById("listingTable");
  var page_span = document.getElementById("page");

  // Validate page
  if (page < 1) page = 1;
  if (page > numPages()) page = numPages();

  listing_table.innerHTML = "";

  for (
    var i = (page - 1) * records_per_page;
    i < page * records_per_page;
    i++
  ) {
    listing_table.innerHTML += objJson[i].data + "<br>";
  }
  page_span.innerHTML = page;

  if (page == 1) {
    btn_prev.style.visibility = "hidden";
  } else {
    btn_prev.style.visibility = "visible";
  }

  if (page == numPages()) {
    btn_next.style.visibility = "hidden";
  } else {
    btn_next.style.visibility = "visible";
  }
}

function numPages() {
  return Math.ceil(objJson.length / records_per_page);
}

window.onload = function () {
  changePage(1);
};
