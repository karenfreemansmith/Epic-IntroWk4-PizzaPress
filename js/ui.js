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
    $("#listToppings").append('<h5 id='+type.category+'>'+type.category+':</h5>');
  }
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
  Business.basePrice=$("#newBasePrice").val();
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
  alert(newType.category +":"+ newType.topping +":"+ newType.extra);
  $("#ingredientTypes").append("<li>"+newType.category+"</li>");
  $("#typeCategory").val("");
  saveBusiness(Business);
});
