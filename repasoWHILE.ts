function numeroPar(numbers: number []): boolean{
    let isPar: boolean = false
    let index = 0
    

    while(index <= numbers.length &&  isPar == false){
       
        if (numbers[index] % 2 == 0){
            isPar = true
        }else{
            isPar = false
            index ++
        }  
    }
   
   
   
   

    return isPar
}


let arraynumber = [1,3,5,7,9,10,12,13,14]
let araynumber2 = [1,3,5,7,9,11,13]
console.log(numeroPar(arraynumber))
console.log(numeroPar(araynumber2))



function trueM(names: string[]):boolean{
    let namesM: boolean = true;
    let index = 0; 
  
    while((index < names.length ) && (namesM === true)){
      if (names[index].charAt(0) === 'M'){
                  
                  namesM = true;
                  index ++;      
                   
  
      }else{        
          
          namesM = false;
          
        
      }
      
  }
  return namesM
  
  
  };
  
  let nombres = ['Martin', 'Maria', 'Moria', 'Maricarmen'];
  let nombre2 = ['Mariana','Juan', 'Ricrdo', 'Marta'];
  
  
  console.log(trueM(nombres));
  console.log(trueM(nombre2));
  
  
