# JS Scoping exercises

1. What’s the result of executing this code and why.
  ```js
  function test() {
     console.log(a);
     console.log(foo());
     
     var a = 1;
     function foo() {
        return 2;
     }
  }
  
  test();
  ```

> undefined, 2. Muestra ambas porque 'a' no está definida antes de que se llame; al mismo tiempo se llama a 'foo', que se pide que retorne 2.
> undefined, 2, undefined.


2. What is result?
  ```js
  var a = 1; 
  
  function someFunction(number) {
    function otherFunction(input) {
      return a;
    }
    
    a = 5;
    
    return otherFunction;
  }
  
  var firstResult = someFunction(9);
  var result = firstResult(2);
  ```
> 1. Porque 'a' está definido como 1 desde antes de establecer 'someFunction', que se pide al final.
> undefined


3. What is the result of the following code? Explain your answer.
  ```js
  var a = 1
  function foo() {
    var a = 2;

    function bar() {
      console.log( a );
    }

    return bar;
  }
  var baz = foo();
  baz();
  ``` 
> 2. La función 'bar', dentro de la función 'foo', pide mostrar/imprimir 'a' que se definió como 2.
> 2, undefined.


4. What will you see in the console for the following example?
  ```js
  var a = 1; 
  function b() { 
      a = 10; 
      return; 
      function a() {} 
  } 
  b(); 
  ```

> undefined. 'return' no tiene instrucciones y 'function a' tampoco tiene procedimientos.
> undefined.
