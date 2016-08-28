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
  this.total+=item.price;
}
