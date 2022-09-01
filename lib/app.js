const textarea = document.getElementById('markdown-editor')
const renderer = document.getElementById('renderer')

function convert(str) {

  // On vide le renderer de la page avant d'insérer le nouveau texte dedans
  renderer.innerHTML = ""

  // Split le texte par ligne
  let ligns = str.split('\n')
  var len = ligns.length
  
  for (let i = 0; i <= len; i++) {
    let lign = ligns[i]
    var newlign = ''
    // let newlign = lign.replace(/([^#][a-zA-Z0-9\s]+)/g, '$1');

    if(lign.match(/(^# [a-zA-Z0-9\s]+)/g)) {

      newlign = lign.replace('#', '')
      newlign = "<h1>" + newlign + "</h1>"

    } else if (lign.match(/(^## [a-zA-Z0-9\s]+)/g)) {

      newlign = lign.replaceAll('#', '')
      newlign = "<h2>" + newlign + "</h2>"

    } else if (lign.match(/(^### [a-zA-Z0-9\s]+)/g)) {

      newlign = lign.replaceAll('#', '')
      newlign = "<h3>" + newlign + "</h3>"

    } else {

      newlign = lign

    }
    
    let fullnewlign = "<p class=\"renderer-lign\">" + newlign + "</p>"
    renderer.innerHTML += fullnewlign
  }
}

textarea.addEventListener('input', () => {
  convert(textarea.value)
})