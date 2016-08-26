// Front End
$(document).ready(function() {
  $("#login").click(function() {
    login();
  });
  $("#logout").click(function() {
    logout();
  });
});

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

function Size(description, price) {
  this.description=description;
  this.price=price;
}

function Business() {
  this.orders=[];
  this.customers=[];
  this.ingredients=[];
  this.types=[];
  this.extras=[];
  this.specials=[];
  this.sizes=[];
}
Business.prototype.addOrder = function(order) {
  this.orders.push(order);
}
Business.prototype.addCustomer = function(customer) {
  this.customers.push(customer);
  saveBizData();
}
Business.prototype.addIngredient = function(ingredient) {
  this.ingredients.push(ingredient);
  saveBizData();
}
Business.prototype.addType = function(type) {
  this.types.push(type);
  saveBizData();
}
Business.prototype.addExtra = function(extra) {
  this.extras.push(extra);
  saveBizData();
}
Business.prototype.addSpecial = function(special) {
  this.specials.push(special);
  saveBizData();
}
Business.prototype.addSize = function(size) {
  this.sizes.push(size);
  saveBizData();
}

// Data Storage
//global variable to maintain business data
var pizzaBiz=getBizData();

function getBizData() {
  var business=new Business();
  if(localStorage.myBiz) {
    var tempBD=JSON.parse(localStorage.getItem("myBiz"));
    tempBD.sizes.forEach(function(size) {
      business.addSize(size);
    });
  }
  console.log(business);
  return business;
}

function saveBizData() {
  localStorage.setItem("myBiz", JSON.stringify(pizzaBiz));
}
