var homepage = document.querySelector(".col-md-10").innerHTML
var loc = document.querySelector(".col-md-10")

function home(){
    loc.innerHTML=homepage
}
function login(){
    let login_form = document.getElementById("bootstrap-login").innerHTML
    
    loc.innerHTML=login_form
}