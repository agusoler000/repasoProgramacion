function devuelveImpar(numero) {
    for (var i = 0; i < numero; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
devuelveImpar(100);
devuelveImpar(10);


function inverter(array: string[]): string[] {
    array.toString()
    let arrayinvertida: string[] = [];
    
    for(let i = array.length - 1; i >= 0; i--){

        arrayinvertida.push(array[i])
            
        }
    
    


    return arrayinvertida

}


let arrayy: string[] = ['1','2','3','4','5','6','7','8','9']

console.log(inverter(arrayy))







function colordearcoiris(colores: string []){
    
    for (const key in colores) {
        if ((colores[key] === 'Rojo') || (colores[key] === 'Celeste') || (colores[key] === 'Amarillo') || (colores[key] === 'Verde') || (colores[key] === 'Azul') || 
        (colores[key] === 'Violeta') || (colores[key] === 'Anaranjado')){
        console.log(colores[key] + ' es un color del arcoiris')
        }
        else{
        console.log(colores[key] + ' NO  es un color que se encuentra en el arcoiris')
    
        }
            
    }



}


let arraycolores = ['Azul', 'Verde','Rojo', 'Amarillo', 'Fucsia', 'Anaranjado','Violeta','Magenta']

colordearcoiris(arraycolores)




function sumacarc(arr: string[]):number{
    let sumacaracteres: number = 0
    
    for (let key in arr) {
        sumacaracteres += arr[key].length
    }





    return sumacaracteres
}




let array1 = ['hola', 'como', 'estas']
let array4 = ['hola', 'como', 'estas',' ','123456789']

console.log(sumacarc(array1));
console.log(sumacarc(array4));



function sumaParorNot(arr: string[]){
    let sumacaracteres: number = 0
    
    for (let key in arr) {
        sumacaracteres += arr[key].length
    }

    if(sumacaracteres % 2 == 0){
        console.log('El numero es par')

    }else{
        console.log('El numero es impar');
        
    }






    
}

let array3 = ['Casa', 'Coche', 'Ciudad', 'Cesta']
let array5 = ['Barco', 'Baca','Bicicleta', 'Balon','Bisiesto','Brasil']
let array2 = ['Venezuela','Veneno','Voltaje']

sumaParorNot(array5)
sumaParorNot(array3)
sumaParorNot(array2)

