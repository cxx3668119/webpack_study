import "../css/index.css"
import "../css/font.less"

function component() {
  const element = document.createElement("div")

  element.innerHTML = ["hello", "world"].join("");
  element.className = "content"

  const imEl = new Image();
  imEl.src = require("../img/zznh.png").default;
  element.appendChild(imEl);

  const bgDivEl = document.createElement('div')
  bgDivEl.style.width = 200 + 'px';
  bgDivEl.style.height = 200 + 'px';
  bgDivEl.className = "bg-image";
  bgDivEl.style.backgroundColor = 'red';
  element.appendChild(bgDivEl)


  return element
}

document.body.appendChild(component())