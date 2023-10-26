function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar a tag img

  const img = document.querySelector("#profile img")

  //substituir a imagem

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }

  /* a mesma coisa do toggle porém de outra forma

  if(html.classList.contains('ligth')){
    html.classList.remove('ligth')
  }
  else {
    html.classList.add('ligth')
  }
  */
}
