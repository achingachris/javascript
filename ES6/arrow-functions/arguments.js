// Traditional Function
function (a, b) {
    return a + b + 100;
}

// Arrow Function
(a, b) => a + b + 100;

// Traditional Function (no arguments)
let a = 4;
let b = 2;

function () {
    return a + b + 100;
}

// Arrow Function (no arguments)
let a = 4;
let b = 2;
() => a + b + 100;



// Traditional Function
function (a, b){
    let chuck = 42;
    return a + b + chuck;
  }
   
  // Arrow Function
  (a, b) => {
    let chuck = 42;
    return a + b + chuck;
  }