function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // if(html.classList.contains('light')) {
  //   html.classList.remove('light')
  // } else {
  //   html.classList.add('light')
  // }

  // pegar a imagem
  const img = document.querySelector("#profile img")

  // substituir a imagem
  if(html.classList.contains('light')) {
    //se tiver light mode, adicionar a imagem light (avatar)
    img.setAttribute("src", "./assets/Avatar.png")
  } else {
    // se estiver sem light mode, manter a imagem normal
    img.setAttribute("src", "./assets/avatar.2.jpg")
  }

  // desafio: novo atributo alt
  if(html.classList.contains('light')) {
    alt.setAttribute("alt", "Avatar de Iasmyn Gabrielle, cabelos loiros e olhos azuis, usando uma blusa verde-água e fundo marrom.")
  } else {
    alt.setAttribute("alt", "Avatar de Iasmyn Gabrielle, cabelos loiros escuros e olhos azuis, usando uma blusa verde-água e fundo bege.")
  }  
}
