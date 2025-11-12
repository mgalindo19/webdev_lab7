function init() {
  const input = document.getElementById("entryinput");
  const button = document.getElementById("entrybutton");
  const output = document.getElementById("textoutput");

  button.addEventListener("click", function() {
    const textValue = input.value; 
    alert("Debarlaben: " + textValue);
    output.textContent = textValue;
  });
}
window.addEventListener('load', init);
