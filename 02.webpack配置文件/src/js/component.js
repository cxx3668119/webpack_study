import "../css/index.css"
import "../css/font.less"

function component() {
  const element = document.createElement("div")

  element.innerHTML = ["hello", "world"].join("");
  element.className = "content"

  return element
}

document.body.appendChild(component())