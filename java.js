// var button = document.getElementById('btn-1');
// button.addEventListener('click', buttonclick);
// var box = document.getElementById('sec-1');

// function buttonclick(){
//     if (box.style.display === 'block') {
//         box.style.display = 'none';
//     } else {
//         box.style.display = 'block';
//     }
// };

var button = document.getElementById('btn-1');
button.addEventListener('click', click1);
var image = document.getElementById('gif');

function click1(){
    if (image.style.display === 'block') {
        image.style.display = 'none';
    } else {
        image.style.display = 'block';
    }
};