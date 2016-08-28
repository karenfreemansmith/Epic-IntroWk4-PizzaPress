// for all pages
$(".businessName").text(Business.businessName);
$("title").text(Business.businessName);

// for build your pizza page
Business.sizes.sort(function(a,b) {
  return a.multiplier-b.multiplier;
}).forEach(function(size) {
  $("#listSizes").append('<div class="radio"><label><input type="radio" name="size" value="'+size.description+'">'+size.description+' <br>...starting at $'+(size.multiplier*Business.basePrice).toFixed(2)+'</label></div>');
});

// for admin page
$("#newBusinessName").val(Business.businessName);
$("#newBasePrice").val(Business.basePrice);
Business.sizes.sort(function(a,b) {
  return a.multiplier-b.multiplier;
}).forEach(function(size) {
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
