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
let $itemInfoHeader = $(".itemInfoHeader");

// A typing effect created by individually showing each letter by looping through at a certain speed.
function typingTitle() {
  const title = "Groceries List"
  if (i < title.length) {
    // After finding the Id of title, the code prints each letter on the screen one by one after .07
    document.getElementById("title").innerHTML += title.charAt(i);
    i++;
    setTimeout(typingTitle, 70);
  }
}

// Function call to take item names and append them to the "content" div.
function centerData() {
  for (var i = 0; i < data.length; i++) {
    // Uppercasing the first letter.
    var $output = data[i].item.charAt(0).toUpperCase() + data[i].item.slice(1) + " (" + data[i].type + ")";
    // Dynamically creating a new button elements for each data[i].
    var $itemContainer = $("<button>")
      .addClass(`itemContainer ${data[i].category}`) // Giving each button a familial class and a unique class.
      .attr("onclick", "openNav(this)")
      .attr("data-pos", i); // Adds a data-attribute in order to save the position in which this particular button was created from in the JSON.
    var $item = $("<h2>" + $output + "</h2>"); // Dynamically creating an <h2> tag in order to give styling to the generated contents of the Groceries List.

    $item
      .addClass("item") // Gives the <h2> tag a class of `item`.
      .appendTo($itemContainer); // Pushes the dynamic <h2> tag into individual containers.
    $itemContainer.appendTo($content) // Appending the individual containers to the parent container.
  };
}
// For the open/close functions below, I actually ran into an issue where, $(".infoNav") was returning as undefined. Since document.getElementByClassName usually returns a set of elements with the same classnames, I tried being more specific by giving it the index of [0].
// That seemed to fix the problem of the DOM not being able to find the className of "infoNav" 

// Function to slide away the right-navbar
function closeNav() {
  $infoNav[0].style.right = "-290px";
  flag = false; // Flag that is used to check the status of the right-navbar
  $(".itemContainer").attr("onclick", "openNav(this)"); // On the event of a click, the data for that element will be passed through "this" into the function, which is set up below as (response);
}

// Function to slide the right-navbar and append relevant information
function openNav(response) {
  $infoNav[0].style.right = "0px";

  // Clearing the text is good practice, however, because the text is dynamically
  // changed, this doesn't serve that much a purpose in this case.
  // $category.html("");
  // $itemName.html("");
  // $itemType.html("");
  // $itemBrand.html("");
  // $itemQuantity.html("");

  flag = true; // Flag that is used to check the status of the right-navbar
  $itemInfoHeader.html("Item Information"); // A header in order to give context as to what the navbar does.
  $svg
    .attr("src", `./assets/resources/${data[response.getAttribute("data-pos")].category}.svg`) // Dynamically displaying the svg file depending on what the category of the chosen item. 
    .attr("alt", `${data[response.getAttribute("data-pos")].category}`); // If the image doesn't load, then give an alternative display of what the picture is referencing, in this case, the category.
  $category.html("Category: " + data[response.getAttribute("data-pos")].category.charAt(0).toUpperCase() + data[response.getAttribute("data-pos")].category.slice(1));// This long line of code makes it so that the first letter is capitalized.
  $itemName.html("Item Name: " + data[response.getAttribute("data-pos")].item) // Dynamically push the item name from the returned data-pos attribute.
  $itemType.html("Item Type: " + data[response.getAttribute("data-pos")].type) // Dynamically push the item type from the returned data-pos attribute.
  $itemBrand.html("Item Brand: " + data[response.getAttribute("data-pos")].brand) // Dynamically push the item brand from the returned data-pos attribute.
  $itemQuantity.html("Quantity: " + data[response.getAttribute("data-pos")].qty) // Dynamically push the item quantity from the returned data-pos attribute.
}

// Sets the "active" class to the clicked button.
// Reset isn't given the "active" class because it's only purpose is to bring all options back.
$("button").on("click", function () {
  $("button").siblings().removeClass("active");
  $(this).addClass("active");
  $("#btnReset").removeClass("active");
})

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
  }, 100); // Runs 0.1s after the document is "ready".

  // When the document is loaded and ready, display the items from the JSON.
  centerData();
});