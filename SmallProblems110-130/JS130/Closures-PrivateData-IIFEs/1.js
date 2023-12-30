function myBind(func, context) {
  return function() {
    func.call(context);
  }
}