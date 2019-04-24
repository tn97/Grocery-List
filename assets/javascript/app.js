let i = 0; // initial variable i for counter
let flag = false; // Setting a flag in order to use toggle functions
// Setting a variable in order to make class calls easily legible.
let $content = $(".content");
let $infoNav = $(".infoNav");
let $category = $(".category");
let $itemName = $(".itemName");
let $itemType = $(".itemType");
let $itemBrand = $(".itemBrand");
let $itemQuantity = $(".itemQuantity");
let $svg = $(".svg");

// A typing effect created by individually showing each letter by looping through at a certain speed.
function typingTitle() {
  const title = "Groceries List"
  if (i < title.length) {
    document.getElementById("title").innerHTML += title.charAt(i);
    i++;
    setTimeout(typingTitle, 50);
  }
}

// Function call to take item names and append them to the content div.
function centerData() {
  for (var i = 0; i < data.length; i++) {
    var $output = data[i].item.charAt(0).toUpperCase() + data[i].item.slice(1) + " (" + data[i].type + ")";
    var $itemContainer = $("<button>")
      .addClass(`itemContainer ${data[i].category}`)
      .attr("onclick", "openNav(this)")
      .attr("data-pos", i); // Adds a data-attribute in order to save the position in which this particular button was created from in the JSON.
    var $item = $("<h2>" + $output + "</h2>");

    $item
      .addClass("item") // Gives the <h2> tag a class of `item`
      .appendTo($itemContainer); // Pushes the dynamic <h2> tag into the content container
    $itemContainer.appendTo($content)
  };
}
// For the open/close functions below, I actually ran into an issue where, $(".infoNav") was returning as undefined. Since document.getElementByClassName usually returns a set of elements with the same classnames, I tried being more specific by giving it the index of [0].
// That seemed to fix the problem of the DOM not being able to find the className of "infoNav" 

// Function to close the right-navbar and clear the information for a new button
function closeNav() {
  $infoNav[0].style.width = "0";
  flag = false;
  $(".itemContainer").attr("onclick", "openNav(this)");
}

// Function to open the right-navbar and append relevant information
function openNav(response) {
  $infoNav[0].style.width = "270px";

  console.log(this);
  // Clearing the text is good practice, however, because the text is dynamically
  // changed, this doesn't serve that much a purpose.
  $category.html("");
  $itemName.html("");
  $itemType.html("");
  $itemBrand.html("");
  $itemQuantity.html("");

  flag = true;

  $svg
    .attr("src", `./assets/resources/${data[response.getAttribute("data-pos")].category}.svg`)
    .attr("alt", `${data[response.getAttribute("data-pos")].category}`);
  $category.html("Category: " + data[response.getAttribute("data-pos")].category);
  $itemName.html("Item Name: " + data[response.getAttribute("data-pos")].item)
  $itemType.html("Item Type: " + data[response.getAttribute("data-pos")].type)
  $itemBrand.html("Item Brand: " + data[response.getAttribute("data-pos")].brand)
  $itemQuantity.html("Quantity: " + data[response.getAttribute("data-pos")].qty)
}

$(document).ready(function () {
  // Anonymous functions called when filter buttons are clicked, to display the corresponding options
  $("#btnFruit").on("click", function () {
    closeNav();
    $(".fruit").fadeIn(1000);
    $(".pasta").fadeOut(1000);
    $(".beverage").fadeOut(1000);
    $(".dessert").fadeOut(1000);
    $(".dairy").fadeOut(1000);
  });

  $("#btnPasta").on("click", function () {
    closeNav();
    $(".fruit").fadeOut(1000);
    $(".pasta").fadeIn(1000);
    $(".beverage").fadeOut(1000);
    $(".dessert").fadeOut(1000);
    $(".dairy").fadeOut(1000);
  });

  $("#btnBeverage").on("click", function () {
    closeNav();
    $(".fruit").fadeOut(1000);
    $(".pasta").fadeOut(1000);
    $(".beverage").fadeIn(1000);
    $(".dessert").fadeOut(1000);
    $(".dairy").fadeOut(1000);
  });

  $("#btnDessert").on("click", function () {
    closeNav();
    $(".fruit").fadeOut(1000);
    $(".pasta").fadeOut(1000);
    $(".beverage").fadeOut(1000);
    $(".dessert").fadeIn(1000);
    $(".dairy").fadeOut(1000);
  });

  $("#btnDairy").on("click", function () {
    closeNav();
    $(".fruit").fadeOut(1000);
    $(".pasta").fadeOut(1000);
    $(".beverage").fadeOut(1000);
    $(".dessert").fadeOut(1000);
    $(".dairy").fadeIn(1000);
  });

  $("#btnReset").on("click", function () {
    $(".fruit").fadeIn(1000);
    $(".pasta").fadeIn(1000);
    $(".beverage").fadeIn(1000);
    $(".dessert").fadeIn(1000);
    $(".dairy").fadeIn(1000);
  });
  // Function call for the typewriter.
  setTimeout(function () {
    typingTitle();
  }, 10);

  centerData();
});