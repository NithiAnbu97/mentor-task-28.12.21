// Diff.bett Call & Apply & Bind
  
  // call:
  //    Call invokes the function and allows you to pass in arguments one by one.
  
  // Apply:
  //    Apply invokes the function and allows you to pass in arguments as an array.
  
  // Bind:
  //    Bind returns a new function, allowing you to pass in a this array and any number of arguments.
  
  
  //    Examples for {Apply vs. Call vs. Bind}
  
  // 1; Call
  
  var person1 = {firstName: 'Nithi', lastName: 'Anbu'};
  var person2 = {firstName: 'Vidya', lastName: 'Priya'};
  
  function say(greeting) {
      console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
  }
  
  say.call(person1, 'Hello'); // Hello Nithi Anbu
  say.call(person2, 'Hello'); // Hello Vidya Priya
  
  
  // 2; Apply
  
  var person1 = {firstName: 'Nithi', lastName: 'Anbu'};
  var person2 = {firstName: 'Vidya', lastName: 'Priya'};
  
  function say(greeting) {
      console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
  }
  
  say.apply(person1, ['Hello']); // Hello Nithi Anbu
  say.apply(person2, ['Hello']); // Hello Vidya Priya
  
  // 3; Bind
  
  var person1 = {firstName: 'Nithi', lastName: 'Anbu'};
  var person2 = {firstName: 'Vidya', lastName: 'Priya'};
  
  function say() {
      console.log('Hello ' + this.firstName + ' ' + this.lastName);
  }
  
  var sayHelloNithi = say.bind(person1);
  var sayHelloVidya = say.bind(person2);
  
  sayHelloNithi(); // Hello Nithi Anbu
  sayHelloVidya(); // Hello Vidya Priya