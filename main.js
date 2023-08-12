const panels = Array.from(document.querySelectorAll(".panel"));
function widenDiv() {
  this.classList.toggle("open");
  console.log(panels[panels.indexOf(this)]);
  const restPanels = panels.filter((el) => el !== panels[panels.indexOf(this)]);
  console.table({ restPanels });
  restPanels.forEach((el) => el.classList.remove("open"));
}

function makeActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle("open-active");
  }
}

panels.forEach((el) => el.addEventListener("click", widenDiv));
panels.forEach((el) => el.addEventListener("transitionend", makeActive));
