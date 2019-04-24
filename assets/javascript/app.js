var i = 0;
// Setting a variable in order to make class calls more clean.
var content = $(".content");
var fruitClass = $(".fruit");
var beverageClass = $(".beverage");
var dessertClass = $(".dessert");
var pastaClass = $(".pasta");
var dairyClass = $(".dairy");

// Typewriter effect for the title of the webpage.
function typeWriter() {
  const title = "Groceries List"
  if (i < title.length) {
    document.getElementById("title").innerHTML += title.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}


// Function call to take item names and append them to the content div.
function centerData() {
  for (var i = 0; i < data.length; i++) {
    var output = data[i].item.charAt(0).toUpperCase() + data[i].item.slice(1) + " (" + data[i].type + ")";
    var itemContainer = $("<button>").addClass(`itemContainer ${data[i].category}`);
    var item = $("<h2>" + output + "</h2>");

    item.addClass("item");
    item.appendTo(itemContainer);
    itemContainer.appendTo(content)
  };
}

function fruitSelection() {

}

$(document).ready(function () {
  $("#btnFruit").on("click", function() {
    $(".fruit").fadeIn(1000);
    $(".pasta").fadeOut(1000);
    $(".beverage").fadeOut(1000);
    $(".dessert").fadeOut(1000);
    $(".dairy").fadeOut(1000);
  })
  $("#btnPasta").on("click", function() {
    $(".fruit").fadeOut(1000);
    $(".pasta").fadeIn(1000);
    $(".beverage").fadeOut(1000);
    $(".dessert").fadeOut(1000);
    $(".dairy").fadeOut(1000);
  })
  $("#btnBeverage").on("click", function() {
    $(".fruit").fadeOut(1000);
    $(".pasta").fadeOut(1000);
    $(".beverage").fadeIn(1000);
    $(".dessert").fadeOut(1000);
    $(".dairy").fadeOut(1000);
  })
  $("#btnDessert").on("click", function() {
    $(".fruit").fadeOut(1000);
    $(".pasta").fadeOut(1000);
    $(".beverage").fadeOut(1000);
    $(".dessert").fadeIn(1000);
    $(".dairy").fadeOut(1000);
  })
  $("#btnDairy").on("click", function() {
    $(".fruit").fadeOut(1000);
    $(".pasta").fadeOut(1000);
    $(".beverage").fadeOut(1000);
    $(".dessert").fadeOut(1000);
    $(".dairy").fadeIn(1000);
  })

  setTimeout(function () {
    typeWriter();
  }, 10);
  centerData();
});

// for (var i = 0; i < drinkList.length; i++) {
//   var newDrinkDiv = $("<div>" + drinkList[i] + "</div");
//   drinkDiv.append(newDrinkDiv);
// }
