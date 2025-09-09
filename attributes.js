//Copyright 2025 Pigly3
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[goto]").forEach((element) => {
    element.onclick = (event) => {window.location.href = element.getAttribute("goto")}
  })
  document.querySelectorAll("[fa]").forEach((element) => { //for FontAwesome
    element.class += " "
    element.class += element.getAttribute("fa").split(" ").map((className) => {return "fa-" + className}).join(" ")
  })
})