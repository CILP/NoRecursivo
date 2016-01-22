// fibonacci.js
// Carlos Linares

function fibonacci(limite) { 
  var a = 1, 
      b = -1, 
      c = 0; 
  
  while (c < limite) { 
    c = a + b; 
    console.log(c); 
    b = a; 
    a = c; 
  }
}
