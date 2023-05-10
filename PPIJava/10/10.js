let l = document.getElementById('lista');
let texto = document.getElementById('texto');
let se = true;
const array = [];

function deleta() {
    for (var i = 0; i < array.length; i++) 
    {
        if (texto.value == array[i]) 
        {
            array.splice(i, 1);
            ordem();
        }
    }
}
function input() {
    se = true;
    for (var i = 0; i < array.length; i++) 
    {
        if (texto.value == array[i]) {
            se = false;
        }
    }
    if (se) 
    {
        array.push(texto.value);
        ordem();
    } else {
        window.alert('Elemento já existe');
    }
}
function ordem() {
    l.innerHTML = "";
    for (var i = 0; i < array.length; i++) 
    {
        p = document.createElement('p');
        p.innerHTML = array[i];
        l.appendChild(p);
    }
}