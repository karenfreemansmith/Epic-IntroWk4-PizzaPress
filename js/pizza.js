// For build-your-own pizzas
function Pizza(size) {
  this.size=size;
  this.toppings=[];
}
Pizza.prototype.addTopping=function(topping) {
  this.toppings.push(topping);
}
Pizza.prototype.getCost=function() {
  var cost=Business.baseCost;
  this.toppings.forEach(function(topping) {
    cost+=topping.cost;
  });
  return cost*=this.size.multiplier;
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
  return description;
}
