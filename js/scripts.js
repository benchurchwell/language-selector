function handleSelect(event) {
  event.preventDefault();
  const selection = document.getElementById("questions").value;
  console.log(selection)
}

window.addEventListener("load", function() {
  document.getElementById("select-form").addEventListener("submit", handleSelect);
});

