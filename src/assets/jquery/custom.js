function openNav() {
   document.getElementById("mySidebar").style.width = "250px";
   document.getElementById("main").style.marginLeft = "250px";
 }
 
 function closeNav() {
   document.getElementById("mySidebar").style.width = "0";
   document.getElementById("main").style.marginLeft= "0";
 }
function openMenu(evt, menuName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("menu");
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(menuName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-red";
}
$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
$('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
},  3000);
var total = 0;
var i = 1;
var itemCost = [];
function add(n){
   brand = "brand" + n;
   priceId = "price" + n;
   quantityId = "quantity" + n;
   name = document.getElementById(brand).innerHTML;
   price = document.getElementById(priceId).innerHTML;
   quantity = document.getElementById(quantityId).value;
   var node = document.createElement("LI");
   item = "item"+i;
   node.setAttribute("id", item)
   itemCost[i-1] = Number(price) * Number(quantity);
   i += 1;
   var textnode = document.createTextNode(name+" "+ quantity + " x " +  price +                 " Rs ");
   node.appendChild(textnode);
   document.getElementById("items").appendChild(node);
   total += Number(price) * Number(quantity);
   document.getElementById("total").innerHTML = "Total: " + total.toFixed(2) + " Rs  ";
   document.getElementById(item).innerHTML += '<button onclick="deleItem('+"'"+ item+ "'"+')" class="btn btn-primary"> x </button>';

}
function deleteE(eId) {
   document.getElementById(eId).innerHTML = ' ';
}
function deleItem(eId){
   document.getElementById(eId).remove();
   n = Number(eId.slice(-1)) - 1;
   total -= itemCost[n];
   document.getElementById("total").innerHTML = "Total: " + total.toFixed(2) + " Rs"; 
}
function GenerateCaptcha() {  
var chr1 = Math.ceil(Math.random() * 10) + '';  
var chr2 = Math.ceil(Math.random() * 10) + '';  
var chr3 = Math.ceil(Math.random() * 10) + '';  

var str = new Array(4).join().replace(/(.|$)/g, function () { return ((Math.random() * 36) | 0).toString(36)[Math.random() < .5 ? "toString" : "toUpperCase"](); });  
var captchaCode = str + chr1 + ' ' + chr2 + ' ' + chr3;  
document.getElementById("txtCaptcha").value = captchaCode  
}  

/* Validating Captcha Function */  
function ValidCaptcha() {  
var str1 = removeSpaces(document.getElementById('txtCaptcha').value);  
var str2 = removeSpaces(document.getElementById('txtCompare').value);  

if (str1 == str2) return true;  
return false;  
}  

/* Remove spaces from Captcha Code */  
function removeSpaces(string) {  
return string.split(' ').join('');  
}