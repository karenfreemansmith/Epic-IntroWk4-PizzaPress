// Front End
$(document).ready(function() {
  $("#login").click(function() {
    alert("logged in");
    login();
    $("#admin").show();
    $("#signin").hide();
  });
  $("#logout").click(function() {
    alert("logged out");
    logout();
    $("#admin").hide();
    $("#signin").show();
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

function Business() {
  this.orders=[];
  this.customers=[];
  this.ingredients=[];
  this.types=[];
  this.extras=[];
  this.specials=[];
  this.sizes=[];
}

// Data Storage
//global variable to determine logged in status
var loggedin=false;

function login() {
    loggedin=true;
    localStorage.setItem("admin", true);
}

function logout() {
  loggedin=false;
  localStorage.setItem("admin", false);
}

//global variable to maintain business data
var pizzaBiz=getBizData();

function getBizData() {
  if(localStorage.myBusiness) {
    var business=JSON.parse(localStorage.getItem("myBiz"));
  } else {
    var business=[];
  }
  return business;
}
