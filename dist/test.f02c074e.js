const textarea = document.getElementById("markdown-editor");
const renderer = document.getElementById("renderer");
function convert(str) {
    // On vide le renderer de la page avant d'insérer le nouveau texte dedans
    renderer.innerHTML = "";
    // Split le texte par ligne
    let lines = str.split("\n");
    var len = lines.length;
    for(let i = 0; i <= len; i++){
        let line = lines[i];
        var newline = "";
        // let newline = line.replace(/([^#][a-zA-Z0-9\s]+)/g, '$1');
        if (line.match(/(^# [a-zA-Z0-9\s]+)/g)) {
            newline = line.replace("#", "");
            newline = "<h1>" + newline + "</h1>";
        } else if (line.match(/(^## [a-zA-Z0-9\s]+)/g)) {
            newline = line.replaceAll("#", "");
            newline = "<h2>" + newline + "</h2>";
        } else if (line.match(/(^### [a-zA-Z0-9\s]+)/g)) {
            newline = line.replaceAll("#", "");
            newline = "<h3>" + newline + "</h3>";
        } else newline = line;
        let fullnewline = '<p class="renderer-line">' + newline + "</p>";
        renderer.innerHTML += fullnewline;
    }
}
textarea.addEventListener("input", ()=>{
    convert(textarea.value);
});

//# sourceMappingURL=test.f02c074e.js.map
