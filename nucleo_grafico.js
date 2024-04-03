/*
Nucleo grafico 


Torre de Hanoi

josecarlos.dev

desenvolvido por José Carlos - 2020


*/


var numeross = 0; // variavel que define o numero de discos
var disco_origem = 0; // variavel que define o disco que foi clicado
var torre_origem = 0;// variavel que define a torre(pino) do disco que foi clicado
var discos = []; // array que armazena os objetos
var num_pi = []; // array que armazena o numero discos em cada pino
var ganhou = 0; // variavel que indica se o jogador ganhou ou nao o jogo
var algoritmo=[];

function iniciar(env){
numeross = env; 

gerar_graficos(numeross);

for(var j = 0; j<numeross; j++) discos[j] = new Gerar((j+1),1,(j+1));

num_pi = [numeross,0,0];

document.getElementsByClassName("aviso_erro")[0].style.display = "none"; //ocultando o aviso inicial
}



/* definir o disco e a torre de origem */
function definir_disco(disco,torre){

disco_origem = disco;
torre_origem = torre;

}
function movs() {
   console.log(algoritmo);
   document.getElementById("aviso_texto").innerHTML = "MOVIMIENTOS!!!<br>" +
     algoritmo.map(function(paso) {
       return "<br>" + paso;
     }).join('') + // Necesitas unir los elementos del array generado por map
     '<button id="reini" onclick="sair()">REINICIAR</button>';
}

/* definir a torre de destino */
function definir_pino(num){

if(disco_origem!= 0 && torre_origem!=0){

var ret = discos[disco_origem-(7-numeross+1)].movimentar(num);



switch(ret){
case 0:
   document.getElementById("aviso_texto").innerHTML="Debe quitar los discos de arriba primero";
   document.getElementsByClassName("aviso_erro")[1].style.display = "block";
   break;
case 1:
   document.getElementById("aviso_texto").innerHTML="El disco de arriba no puede ser mayor que el de abajo" ;
   document.getElementsByClassName("aviso_erro")[1].style.display = "block";
   break;
case 2:
   document.getElementById("aviso_texto").innerHTML="Escoja otro pino" ;
   document.getElementsByClassName("aviso_erro")[1].style.display = "block";
   break;
case 3: 
   trocar(num);
   break;
default:
   trocar(num);
   
    if(movimentos>(Math.pow(2,numeross)-1)) {
      document.getElementById("aviso_texto").innerHTML =
	  "Buen Trabajo!!!<br>"+
	  "Pero podria ser mejor usted uso  <b>"+movimentos+"</b> Movimientos<br>"+
	  "El ideal es <b>"+(Math.pow(2,numeross)-1)+"</b><br>"+
	  '<button id="reini" onclick="sair()">REINICIAR</button>'+ '<button id="movs" onclick="movs()">VER MOVimientos</button>';
     
    } else{
	document.getElementById("aviso_texto").innerHTML = "Perfecto!!! Prueba Superada!!!<br>"+
	'<button id="reini" onclick="sair()">REINICIAR</button>';
   
	
    }
	
    document.getElementsByClassName("aviso_erro")[1].style.display = "block";
	ganhou = 1;
}

}

disco_origem = 0; 
torre_origem = 0;

}
function numFicha(num){
   let N_num;
   if(numeross==7){
      N_num=num;
   }else if(numeross==6){
      N_num=num-1; 
   }else if(numeross==5){
    N_num=num-2;
   }else if(numeross==4){
      N_num=num-3;

   }else if(numeross==3){
   N_num=num-4;
   }

   return N_num;
}

function trocar(num){

num_pi[num-1]+=1;
num_pi[torre_origem-1]-=1;
console.log(movimentos+") muevo ficha numero:"+numFicha(disco_origem) +" a torre "+num);
algoritmo.push(movimentos+") muevo ficha numero:"+numFicha(disco_origem) +" a torre "+num)

document.getElementById("espaco"+num).style.height = (100-13*num_pi[num-1])+'%';
document.getElementById("espaco"+torre_origem).style.height = (100-13*num_pi[torre_origem-1])+'%';

document.getElementById('disco'+disco_origem+'_'+torre_origem).style.display = "none";
document.getElementById('disco'+disco_origem+'_'+num).style.display = "block";


var quant = parseInt(document.getElementById("num_mov1").innerHTML);

document.getElementById("num_mov1").innerHTML=quant+1;

}


function sair(){

document.getElementsByClassName("aviso_erro")[1].style.display = "none";

if(ganhou==1) {
	document.getElementsByClassName("aviso_erro")[0].style.display = "block";
	ganhou=0;
}

}

