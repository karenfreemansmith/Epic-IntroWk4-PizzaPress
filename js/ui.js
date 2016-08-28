// for all pages
$(".businessName").text(Business.businessName);
$("title").text(Business.businessName);

// for admin page
$("#newBusinessName").val(Business.businessName);
$("#newBasePrice").val(Business.basePrice);
Business.sizes.forEach(function(size) {
  $("#pizzaSizes").append("<li>"+size.description+": $"+(size.multiplier*Business.basePrice).toFixed(2)+"</li>");
});

$("#editBusinessName button.update").click(function() {
  Business.businessName=$("#newBusinessName").val();
  saveBusiness(Business);
  $(".businessName").text(Business.businessName);
  $("title").text(Business.businessName);
});

$("#editBasePrice button.update").click(function() {
  Business.basePrice=$("#newBasePrice").val();
  saveBusiness(Business);
});

$("#addPizzaSize").click(function() {
  var newSize = new Size($("#sizeDescription").val(), parseFloat($("#sizePrice").val()));
  Business.sizes.push(newSize);
  //alert(newSize);
  $("#pizzaSizes").append("<li>"+newSize.description+": $"+(newSize.multiplier*Business.basePrice).toFixed(2)+"</li>");
  $("#sizeDescription").val("");
  $("#sizePrice").val("");
  saveBusiness(Business);
});
