// for all pages
$(".businessName").text(Business.businessName);
$("title").text(Business.businessName);

// for build your pizza page
Business.sizes.sort(function(a,b) {
  return a.multiplier-b.multiplier;
}).forEach(function(size) {
  $("#listSizes").append('<div class="radio"><label><input type="radio" name="size" value="'+size.description+'">'+size.description+' <br>...starting at $'+(size.multiplier*Business.basePrice).toFixed(2)+'</label></div>');
});

Business.types.sort(function(a,b) {
  return a.multiplier-b.multiplier;
}).forEach(function(type) {
  if(type.topping) {
    $("#listToppings").append('<h5 id='+type.category+'>'+type.category.toUpperCase()+':</h5>');
    type.ingredients.sort(function(a,b) {
      return a.description-b.description;
    }).forEach(function(item) {
      $("#listToppings").append('<label class="checkbox-inline"><input type="checkbox" value="'+item.description+'" name="toppings">'+item.description.toLowerCase()+'</label>');
    });
  }
});

// add to Order
var total=0;
$("#addToOrder").click(function(event) {
  event.preventDefault();
  var yourPizza = new Pizza(findSize($("input[name='size']:checked").val()));
  $("input[name='toppings']:checked").each(function() {
    yourPizza.addTopping(findTopping($(this).val()));
  });
  total+=yourPizza.getPrice();
  $("#yourOrder").append("<li>" + yourPizza.getDescription().toUpperCase() + ": $" + yourPizza.getPrice().toFixed(2) + "</li>");
  $("#orderTotal").text("$" + total.toFixed(2));
});

// for order page
// suggest extra items to add to order
Business.types.sort(function(a,b) {
  return a.multiplier-b.multiplier;
}).forEach(function(type) {
  if(type.extra) {
    $("#listExtras").append('<h5 id='+type.category+'>'+type.category.toUpperCase()+':</h5>');
    type.ingredients.sort(function(a,b) {
      return a.description-b.description;
    }).forEach(function(item) {
      $("#listExtras").append('<label class="checkbox-inline"><input type="checkbox" value="'+item.description+'" name="toppings">'+item.description.toLowerCase()+'</label>');
    });
  }
});
// remember customer details and pre-populate form
$("#newEmail").val(Business.currentOrder.customer.email);
$("#newFirstName").val(Business.currentOrder.customer.firstName);
$("#newLastName").val(Business.currentOrder.customer.lastName);
$("#newStreet").val(Business.currentOrder.customer.address);
$("#newCity").val(Business.currentOrder.customer.city);
$("#newState").val(Business.currentOrder.customer.state);
$("#newZip").val(Business.currentOrder.customer.zip);
$("#newPayment").val(Business.currentOrder.customer.paymentMethod);
//$("#newPhone").val(Business.currentOrder.customer.phone);
// update business name
$("#addCustomer").click(function() {
  Business.currentOrder.customer.email=$("#newEmail").val();
  Business.currentOrder.customer.firstName=$("#newFirstName").val();
  Business.currentOrder.customer.lastName=$("#newLastName").val();
  Business.currentOrder.customer.address=$("#newStreet").val();
  Business.currentOrder.customer.city=$("#newCity").val();
  Business.currentOrder.customer.state=$("#newState").val();
  Business.currentOrder.customer.zip=$("#newZip").val();
  Business.currentOrder.customer.paymentMethod=$("#newPayment").val();
  saveBusiness(Business);
});

// for admin page
// business name
// display in editable field
$("#newBusinessName").val(Business.businessName);
// update business name
$("#editBusinessName button.update").click(function() {
  Business.businessName=$("#newBusinessName").val();
  saveBusiness(Business);
  $(".businessName").text(Business.businessName);
  $("title").text(Business.businessName);
});
// business base pizza price (typically medium cheese pizza)
// display in editable field
$("#newBasePrice").val(Business.basePrice);
// update base price
$("#editBasePrice button.update").click(function() {
  Business.basePrice=parseFloat($("#newBasePrice").val());
  saveBusiness(Business);
  location.reload(); // refresh size-price list with recalculated prices
});

// pizza sizes
// display list
Business.sizes.sort(function(a,b) {
  return a.multiplier-b.multiplier;
}).forEach(function(size) {
  $("#pizzaSizes").append("<li>"+size.description+": $"+(size.multiplier*Business.basePrice).toFixed(2)+"</li>");
});
// input new sizes
$("#addPizzaSize").click(function() {
  var newSize = new Size($("#sizeDescription").val(), parseFloat($("#sizePrice").val()));
  Business.sizes.push(newSize);
  //alert(newSize);
  $("#pizzaSizes").append("<li>"+newSize.description+": $"+(newSize.multiplier*Business.basePrice).toFixed(2)+"</li>");
  $("#sizeDescription").val("");
  $("#sizePrice").val("");
  saveBusiness(Business);
});

// types-categories of ingredients, and other items to be sold
// i.e. Toppings: meat, cheese, veggies - Extras: drinks, salads, desserts
// display categories
Business.types.sort(function(a,b) {
  return a.category-b.category;
}).forEach(function(type) {
  $("#ingredientTypes").append("<li>"+type.category+"</li>");
});
// input new categories
$("#addType").click(function() {
  var typeToppings=false;
  var typeExtras=false;
  if($("input[name='type']:checked").val()==="toppings") {
    typeToppings=true;
    typeExtras=false;
  } else {
    typeToppings=false;
    typeExtras=true;
  }
  var newType = new Type($("#typeCategory").val(), typeToppings, typeExtras);
  Business.types.push(newType);
  $("#ingredientTypes").append("<li><span class='category'>"+newType.category+"</span></li>");
  $("#typeCategory").val("");
  saveBusiness(Business);
});

// ingredients, and other items to be sold
// to be filtered by type ... how?
// display toppings and extras
Business.types.forEach(function(type) {
  if(type.topping) {
    $("#toppingTypes").append("<option>"+type.category+"</option>");
    type.ingredients.sort(function(a,b) {
      return a.description-b.description;
    }).forEach(function(item) {
      $("#ingredients").append("<li>"+item.description+"</li>");
    });
  } else {
    $("#extraTypes").append("<option>"+type.category+"</option>");
    type.ingredients.sort(function(a,b) {
      return a.description-b.description;
    }).forEach(function(item) {
      $("#extras").append("<li>"+item.description+"</li>");
    });
  }
});

// input new toppings
$("#addIngredient").click(function() {
  var newItem = new Item($("#ingredientDescription").val(), parseFloat($("#ingredientCost").val()), parseFloat($("#ingredientPrice").val()));
  Business.types.forEach(function(type) {
    if(type.category===$("#toppingTypes").val()) {
      type.ingredients.push(newItem);
    }
  });
  $("#ingredients").append("<li>"+newItem.description+"</li>");
  $("#ingredientDescription").val("");
  $("#servingCost").val("");
  $("#servingPrice").val("");
  saveBusiness(Business);
});

// input new extras
$("#addExtra").click(function() {
  var newItem = new Item($("#extraDescription").val(), parseFloat($("#extraCost").val()), parseFloat($("#extraPrice").val()));
  Business.types.forEach(function(type) {
    if(type.category===$("#extraTypes").val()) {
      type.ingredients.push(newItem);
    }
  });
  $("#extras").append("<li>"+newItem.description+"</li>");
  $("#extraDescription").val("");
  $("#extraCost").val("");
  $("#extraPrice").val("");
  saveBusiness(Business);
});
