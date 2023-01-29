function handleSelect(event) {
  event.preventDefault();
  const selection = document.getElementById("questions").value;
  console.log(selection)
}

window.addEventListener("load", function() {
  document.getElementById("select-form").addEventListener("submit", handleSelect);
});

function handleRadio(event) {
  event.preventDefault();
  const radioSelection = document.querySelector("input[name='flavor']:checked").value;
}

window.addEventListener("load", function() {
  document.getElementById("radio-form").addEventListener("submit", handleRadio);
});

// const dob = document.getElementById("born").value;

// const favoriteColor = document.getElementById("color").value;