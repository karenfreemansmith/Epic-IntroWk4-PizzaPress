$(".businessName").text(Business.businessName);
$("title").text(Business.businessName);
$("#newBusinessName").val(Business.businessName);

$("#editBusinessName button.update").click(function() {
  Business.businessName=$("#newBusinessName").val();
  saveBusiness(Business);
  $(".businessName").text(Business.businessName);
  $("title").text(Business.businessName);
});
