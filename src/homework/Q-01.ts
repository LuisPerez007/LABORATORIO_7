(() => {

  /* NOMBRE CORRECTAMETE LAS SIGUIENTES VARIABLES 
     ADEMAS DE COMPROBAR SI USA LET O CONST,
    SE PUEDE REFACTORIZAR, ETC.
  */

  //lista de emails de usuarios de Meta-X
  const gmailList: Array<string> = [
    "email1@gmail.com", 
    "email1@gmail.com", 
    "email1@gmail.com"
  ];

  console.log(gmailList);

  //Lista de compras de un carrito
  const cardProducts: Array<Object> = [
    {product: "switch"},
    {product: "X-box Controller"},
    {product: "steam-gift-card"},
  ];

  console.log(cardProducts);
  

  //funcion para sumar mas 3 a un numero y retornarlo
  const addThree = (value: number): number => {
    return value + 3;
  }

  console.log(addThree(2));
  
  
  //funcion para capitalizar una palabra pasara por params
  //idente o refactorice de ser necesario
  //el resultado no deberia cambiar
function capitalize(word: string): string {
  word = word.toLowerCase();    
  const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalizedWord;
}

console.log(capitalize("capricorn"));

  
  //variable que alerta en caso de que algun evento suceda
  let isEventTriggered: boolean = false;

  if (isEventTriggered) {
    console.log('event');
  }  

  //variable que se encarga de verificar 
  //si un usuario puede acceder o no
  let isWelcomeMessageDisplayed: boolean = true;

  if (isWelcomeMessageDisplayed) {
    console.log('welcome');
  }  
  
  //variable para hallar el promedio de 3 numeros
  const average: number = (1 + 2 + 3) / 3;

  console.log(average);
  
  //variable que almacena el valor de PI
  const pi: number = 3.141592654;

  console.log(pi);
  

  //variabel que controla si un archivo es modificable 
  let isFileEditable: boolean = false;

  if(isFileEditable) console.log('edit this file?');
  
  //variable para almacenar el valor de e
  const eulerNumber: number = 2.718281828; 

  console.log('value of Euler', {eulerNumber});


})();