let butt = document.getElementById('butt');
butt.style.position = 'absolute';

function tracer() {
    butt.style.bottom = Math.floor(Math.random() * 500) + 'px';
    butt.style.right = Math.floor(Math.random() * 1000) + 'px';
}