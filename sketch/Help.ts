function helpButtonToggle() {
  let content: any = document.querySelector(".content");
  if (content.style.display === "none") {
    content.style.display = "block";
  } else {
    content.style.display = "none";
  }
}
