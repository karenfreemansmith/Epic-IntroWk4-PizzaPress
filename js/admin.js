var loggedin=true;
// if(localStorage.admin) {
//   loggedin=localStorage.getItem("admin");
// }

var pageHTML="";
if(loggedin===true) {
  pizzaBiz.sizes.forEach(function(size) {
    $("#pizzaSizes").append("<li>"+size.description+": "+size.price+"</li>");
  });

  //pageHTML+='<button id="logout" class="btn btn-default btn-lg">Logout Here</button>';
} else {
  pageHTML+='<h2>Sign in for Website Administration</h2>';
  pageHTML+='<button id="login" class="btn btn-default btn-lg">Login Here</button>';
}
$("#admin").prepend(pageHTML);

$("#addPizzaSize").click(function() {
  var newSize = new Size($("#sizeDescription").val(), parseFloat($("#sizePrice").val()));
  pizzaBiz.addSize(newSize);
  $("#pizzaSizes").append("<li>"+newSize.description+": $"+newSize.price.toFixed(2)+"</li>");
  $("#sizeDescription").val("");
  $("#sizePrice").val("");
});

$("#addIngredient").click(function() {
  var newSize = new Size($("#sizeDescription").val(), parseFloat($("#sizePrice").val()));
  pizzaBiz.addSize(newSize);
  $("#pizzaSizes").append("<li>"+newSize.description+": $"+newSize.price.toFixed(2)+"</li>");
  $("#sizeDescription").val("");
  $("#sizePrice").val("");
});

$("#addType").click(function() {
  var newSize = new Size($("#sizeDescription").val(), parseFloat($("#sizePrice").val()));
  pizzaBiz.addSize(newSize);
  $("#pizzaSizes").append("<li>"+newSize.description+": $"+newSize.price.toFixed(2)+"</li>");
  $("#sizeDescription").val("");
  $("#sizePrice").val("");
});

$("#addExtra").click(function() {
  var newSize = new Size($("#specialName").val(), parseFloat($("#toppingCost").val()), parseFloat($("#toppingPrice").val()));
  pizzaBiz.addSize(newSize);
  $("#pizzaSizes").append("<li>"+newSize.description+": $"+newSize.price.toFixed(2)+"</li>");
  $("#sizeDescription").val("");
  $("#sizePrice").val("");
});

$("#addSpecial").click(function() {
  var newSpecial = new Special($("#specialName").val(), parseFloat($("#toppingCost").val()), parseFloat($("#toppingPrice").val());
  pizzaBiz.addSpecial(newSpecial);
  $("#pizzaSizes").append("<li>"+newSize.newSpecial+"</li>");
  $("#specialName").val("");
  $("#toppingCost").val("");
  $("#toppingPrice").val("");
});
// Backend Logic & Data Storage
function login() {
    loggedin=true;
    localStorage.setItem("admin", true);
    location.reload();
}

function logout() {
  loggedin=false;
  localStorage.setItem("admin", false);
  location.reload();
}
