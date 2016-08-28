$(".businessName").text(Business.businessName);
$("title").text(Business.businessName);
$("#newBusinessName").val(Business.businessName);
$("#newBasePrice").val(Business.basePrice);

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
