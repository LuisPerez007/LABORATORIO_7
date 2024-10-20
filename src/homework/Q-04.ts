(() => {

  /* APLICA DRY */
  
  //EX - 1
  
  function calculateOperation1(a: number, b: number, c: number): number {
    const sumResult = a + b;
    const multiplicationResult = sumResult * c;
    return multiplicationResult;
  }
  
  function calculateOperation2(x: number, y: number, z: number): number {
    const sumResult = x + y;
    const multiplicationResult = sumResult * z;
    return multiplicationResult;
  }
  
  const result1 = calculateOperation1(2, 3, 4);
  console.log(`Result of Operation 1: ${result1}`);
  
  const result2 = calculateOperation2(5, 6, 7);
  console.log(`Result of Operation 2: ${result2}`);
  

  // EX - 2
  function calculateRectangleArea(length: number, width: number): number {
    return length * width;
  }
  
  function calculateCircleArea(radius: number): number {
    return Math.PI * radius ** 2; 
  }
  
  const rectangleArea = calculateRectangleArea(5, 10);
  console.log(`Area of the rectangle: ${rectangleArea}`);
  
  const circleArea = calculateCircleArea(7);
  console.log(`Area of the circle: ${circleArea}`);
  

  // EX - 3
  //No es necesario aumentar codigo en este ejercicio
  function validateEmail(email: string): boolean {
    // ...some code for validation here
    return false;
  }

  function validateUsername(username: string): boolean {
    // ...some code for validation here
    return false; 
  }
})();
