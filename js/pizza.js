// For build-your-own pizzas
function Pizza(size) {
  this.size=size;
  this.toppings=[];
  this.cost=0;
  this.price=0;
}
Pizza.prototype.addTopping=function(topping) {
  //this.item= ...lookup and get item from existing items...
  this.toppings.push(topping);
}
Pizza.prototype.getCost=function() {
  this.cost=Business.baseCost;
  this.toppings.forEach(function(topping) {
    this.cost+=topping.cost;
  });
  return this.cost*=this.size.multiplier;
}
Pizza.prototype.getPrice=function() {
  var price=Business.basePrice;
  this.toppings.forEach(function(topping) {
    price+=topping.price;
  });
  return price*=this.size.multiplier;
}
Pizza.prototype.getDescription=function() {
  var description = this.size.description;
  this.toppings.forEach(function(topping) {
    description+= " " + topping.description;
  });
  return description.toUpperCase();
}
