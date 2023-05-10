let cel = document.getElementById('cel');
let far = document.getElementById('far');
let kel = document.getElementById('kel');

function conv(element) {
    if (cel.value != null && cel == element) {
        far.value = Number(cel.value) * 1.8 + 32;
        kel.value = Number(cel.value) + 273;
    }

    if (far.value != null && far == element) {
        cel.value = (Number(far.value) - 32) / 1.8;
        kel.value = (Number(far.value) - 32) * 5 / 9 + 273;
    }
    
    if (kel.value != null && kel == element) {
        cel.value = Number(kel.value) - 273;
        far.value = (Number(kel.value) - 273) * 1.8 + 32;
    }
}