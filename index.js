const cyb = document.getElementById("cyb");
import './src/sass/style.scss';
import pic from './src/img/6.png'
var h1 = document.createElement("h1");
var div = document.createElement("div");
var img = new Image();
img.src = pic;
div.appendChild(img);
h1.id = 'cyb';
h1.innerHTML = "Cyb";
document.body.appendChild(h1)
document.body.appendChild(div)
