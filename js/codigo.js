

// Array agregar y mostrar un elemento
// var listaCompleta=[];
// var elementlist;

// do {
//     elementlist=prompt('ingresa elementos: ');
//     listaCompleta.push(elementlist);
    
// } while (confirm('Quiere agregar mas?'));

//for (let index = 0; index < listaCompleta.length; index++) {
    ////document.write(listaCompleta[index]);
  //  console.log(listaCompleta[index]);
//}

//console.log(elementlist);
// fin de array

// Funciones inicio

var p1;
var p2;



function operaciones() {
       
    
    var check=document.getElementById('selection').value;
    

    check=parseInt(check);
    console.log(check);
    
switch (check) {
    case 1:
            suma();
        break;
    case 2:
            resta();   
        break;
    case 3:
            div();
        break;
    case 4:
            mult();
        break;
                        
    default:
        alert('NO EXISTEN OPERACIONES');
        break;
}
}


            function suma(p1,p2) {
                p1= document.getElementById('valor1').value;
                p2=document.getElementById('valor2').value;
                    
                var resultadoMult=parseInt(p1+p2);
                // console.log(resultadoMult); 
                                }

            function resta(p1,p2) {
                p1= document.getElementById('valor1').value;
            p2=document.getElementById('valor2').value;
            
            var resultadoMult=parseInt(p1-p2);
            // console.log(resultadoMult); 
            
            }
        
            function div(p1,p2) {
                p1= document.getElementById('valor1').value;
            p2=document.getElementById('valor2').value;
            
            var resultadoMult=p1/p2;
            // console.log(resultadoMult); 
                                }
            function mult(p1,p2){

            p1= document.getElementById('valor1').value;
            p2=document.getElementById('valor2').value;
                
            var resultadoMult=p1*p2;
            // console.log(resultadoMult);
    
                                }
//fin funciones