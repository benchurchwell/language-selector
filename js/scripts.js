function handleSelect(event) {
  event.preventDefault();
  const langSelect = document.getElementById("questions").value;
  // console.log(langSelect)

    if(langSelect === "python") {
    document.getElementById("questions").setAttribute("class", "python");
  } else if(langSelect === "swift") {
    document.getElementById("questions").setAttribute("class", "swift");
  } else if(langSelect === "golang"){
    document.getElementById("questions").setAttribute("class", "golang");
  } else {
    document.getElementById("questions").setAttribute("class", "javascript");
  }
}

window.addEventListener("load", function() {
  document.getElementById("select-form").addEventListener("submit", handleSelect);
});
