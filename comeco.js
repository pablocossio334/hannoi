/*
Comeco


Torre de Hanoi

josecarlos.dev

desenvolvido por José Carlos - 2020


*/

var  g = 4;
window.onload = function(){
	

var u = setInterval(mudarblur,100);
	
	
}

function mudarblur(){
g=g-0.5;
document.getElementById("logo_comeco").style.filter = 'blur('+g+'px)';	

if(g<-10) {
	
	document.getElementById("tela_comeco").style.display = "none";
	clearInterval(u);
	
}

}