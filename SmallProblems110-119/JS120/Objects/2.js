let item = {
  name: 'Foo',
  description: 'Fusce consequat dui est, semper.',
  price: 50,
  quantity: 100,
  discount: function(percent) {
    let discount = this.price * percent / 100;
    let newPrice = this.price - discount;
    
    return newPrice;
  },
};

console.log(item.discount(20));
console.log(item.discount(50));
console.log(item.discount(25));