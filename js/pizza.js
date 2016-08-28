// For build-your-own pizzas
function Pizza(size) {
  this.size=size;
  this.toppings=[];
  this.cost=getCost();
  this.price=getPrice();
}
Pizza.prototype.addTopping(topping) {
  //this.item= ...lookup and get item from existing items...
  this.toppings.push(topping);
}
Pizza.prototype.getCost=function() {
  this.cost=Business.baseCost;
  this.toppings.forEach(function(topping) {
    this.cost+=topping.cost;
  });
  this.cost*=this.size.multiplier;
}
Pizza.prototype.getPrice=function() {
  this.price=Business.basePrice;
  this.toppings.forEach(function(topping) {
    this.price+=topping.price;
  });
  this.price*=this.size.multiplier;
}
