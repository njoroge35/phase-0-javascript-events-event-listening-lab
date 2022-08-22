const input = document.getElementById("button");
  
function addingEventListener() {
  input.addEventListener("click", function (event) {
    alert("I was clicked!");
  });
}
addingEventListener()