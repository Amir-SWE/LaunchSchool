function foo(bar) {
  console.log(bar());
}

foo(function() {return 'Welcome'});    // Should print 'Welcome'
foo(function() {return 3.1415});    // Should print 3.1415
foo(function() {return [1, 2, 3]});    // Should print [1, 2, 3]