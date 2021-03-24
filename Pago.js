"use strict" 
 
BigNumber.config({DECIMAL_PLACES: 2, ROUNDING_MODE: BigNumber.ROUND_HALF_UP}
);  var FMT_MONEDA = "$0,0.00"; 
 var forma = document.getElementById("forma"); 
var salidaSeleccion = document.getElementById("salidaSeleccion"); var salidaCosto = document.getElementById("salidaPago"); var tortas = document.getElementsByName("tortas"); 
 
forma.addEventListener('click', validarTortas, false); 
 
function  validarTortas(){ 
       var tortasSeleccionadas = new Array();     var totalPago = 0.0; 
     for(var i=0, total=tortas.length; i<total; i++){         var torta = tortas[i];         if(torta.checked){             tortasSeleccionadas.push(torta.value); 
             switch (torta.value){                 case "Hawaiana":                     totalPago += 45.0                         break;                 case "Cubana":                     totalPago += 50.0                         break;                 case "Mexicana":                     totalPago += 60.0                         break;                 case "Española":                     totalPago += 50.0                         break;                 case "Suiza":                     totalPago += 90.0                         break;                 case "Jamon":                     totalPago += 40.0                         break; 
            } 
        
        } 
    }      
    salidaSeleccion.textContent = tortasSeleccionadas.join(", "); 
    salidaCosto.textContent = "Total a pagar: " + numeral(totalPago).format( FMT_MONEDA); 
 } 
 