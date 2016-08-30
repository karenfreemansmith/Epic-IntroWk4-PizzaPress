function Customer(email, first, last, street, city, state, zip, method) {
  this.email=email;
  this.firstName=first;
  this.lastName=last;
  this.address=street;
  this.city=city;
  this.state=state;
  this.zip=zip;
  this.paymentMethod=payment;
}

function Order(customer) {
  this.customer=customer;
  this.items=[];
  this.total=0; //calculated as items are added
  this.date=""; //find get current datetime function to get this info
}

Order.prototype.addItem = function(item) {
  this.items.push(item);
  this.total+=item.getPrice();
}

// var currentOrder = new Order(Business.currentOrder.customer);
//
// $("#addToOrder").click(function(event) {
//   event.preventDefault();
//   var yourPizza = new Pizza(findSize($("input[name='size']:checked").val()));
//   $("input[name='toppings']:checked").each(function() {
//     yourPizza.addTopping(findTopping($(this).val()));
//   });
//   currentOrder.addItem(yourPizza);
//   currentOrder.total+=yourPizza.getPrice();
//   $("#yourOrder").append("<li>" + yourPizza.getDescription().toUpperCase() + ": $" + yourPizza.getPrice().toFixed(2) + "</li>");
//   $("#orderTotal").text("$" + currentOrder.total.toFixed(2));
// });
