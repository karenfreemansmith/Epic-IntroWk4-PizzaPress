//business logic

function Pizza(type) {
  this.type=type;
  if(type==="personal") {
    this.size=4,
    this.price=2.99 }
  if(type==="mini") {
    this.size=6,
    this.price=4.99 }
  if(type==="small") {
    this.size=8,
    this.price=5.99 }
  if(type==="medium") {
    this.size=10,
    this.price=8.99 }
  if(type==="large") {
    this.size=12,
    this.price=10.99 }
  if(type==="xlarge") {
    this.size=16,
    this.price=15.99 }
  if(type==="colossal") {
    this.size=36,
    this.price=32.99 }
}

Pizza.prototype.addTopping = function(t) {
  this.type+=" " +t;
  if(t==="peperoni"){this.price+=.99}
  if(t==="sausage"){this.price+=.99}
  if(t==="bacon"){this.price+=.99}
  if(t==="canadian"){this.price+=.99}
  if(t==="steak"){this.price+=2.99}
  if(t==="chicken"){this.price+=1.99}
  if(t==="cheese"){this.price+=0}
  if(t==="xtra"){this.price+=.49}
  if(t==="asiago"){this.price+=2.99}
  if(t==="feta"){this.price+=2.99}
  if(t==="nacho"){this.price+=.99}
  if(t==="jalepeno"){this.price+=.49}
  if(t==="olive"){this.price+=.49}
  if(t==="pepper"){this.price+=.49}
  if(t==="redpepper"){this.price+=.49}
  if(t==="onion"){this.price+=.49}
  if(t==="tomato"){this.price+=.49}
  if(t==="mushroom"){this.price+=.49}
  if(t==="anchovy"){this.price+=.49}
}

//user interface logic
var total = 0;
$("#addToOrder").click(function(event) {
  event.preventDefault();

  var yourPizza = new Pizza ($("input[name='size']:checked").val());
  $("input[name='toppings']:checked").each(function() {
    yourPizza.addTopping($(this).val());
  });

  total+=yourPizza.price;

$("#yourOrder").append("<li>" + yourPizza.size + "\" " + yourPizza.type.toUpperCase() +  ": $" + yourPizza.price.toFixed(2) + "</li>");
$("#orderTotal").text("$" + total.toFixed(2));
});
