// Front End

// Back End
function Order() {
  this.final=false;
  this.items=[];
  this.total=0;
}

Order.prototype.addItem = function() {

}



function Pizza(size) {
  this.size;
  this.crust="";
  this.sauce="";
  this.cheeses=[];
  this.meats=[];
  this.veggies=[];
  this.nuts=[];
  this.fruits=[];
  this.candy=[];
  this.drizzle="";
  this.crustFlavor="";
  //sizes array - size is index?
  this.price=this.size*5;
}

Pizza.prototype.getPrice = function() {
  this.price*=2;
  //for each type of topping/ingredient, add amount
  //cheeses
  //meats
  //veggies
  //nuts
  //fruits
  //candy

}

Pizza.prototype.addTopping = function(topping, amount) {
  this[topping.type].push([topping,amount]);
}

function Ingredient() {
  this.type=type;
  this.description=description;
  this.cost=cost;
}

function Extra() {
  this.description="";
  this.price=0;
}
