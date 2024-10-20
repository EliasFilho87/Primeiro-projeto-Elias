function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // if(htlm.classlist.contains('light')) {
  // html.classlist.remove('light')
  // } else {
  // html.classlist.add ('light')
  //  }

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/fotoeu2.png")
  } else {
    //se tiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/fotoeu1.png")
  }
}
