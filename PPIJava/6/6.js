let texto = document.getElementById('texto');
let maistexto = document.getElementById('maistexto');

function lista(){
    div = document.createElement('div');
    div.innerHTML = texto.value;
    maistexto.appendChild(div);
}