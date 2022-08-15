function addingEventListener() {
  const buttonClick=document.getElementById("button");

  function clickAlert(){
      alert("Button has been clicked!");

  }
  buttonClick.addEventListener("click", clickAlert);
}