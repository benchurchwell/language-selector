function handleSelect(event) {
  event.preventDefault();
  const langSelect = document.getElementById("questions").value;
  console.log(langSelect)

    if langSelect === "python" {
    setAttribute("class", "python");
  } else if langSelect === "swift" {
    setAttribute("class", "swift");
  } else if langSelect === "golang"{
    setAttribute("class", "golang");
  } else {
    setAttribute("class", "javascript");
  }
}
window.addEventListener("load", function() {
  document.getElementById("select-form").addEventListener("submit", handleSelect);
});