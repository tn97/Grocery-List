var i = 0;
const title = $(".title").val();
var speed = 50;

console.log(title);

function typeWriter() {
  if (i < title.length) {
    document.getElementById("title").innerHTML +=title.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}