var Business=createBusiness();

function createBusiness() {
  if (storageAvailable('localStorage')) {
    if(localStorage.myBiz) {
      //alert("myBiz object in local storage");
      return JSON.parse(localStorage.getItem("myBiz"));
    } else {
      //alert("myBiz object not in local storage");
      saveBusiness(defaultBusiness());
      return defaultBusiness();
    }
  }
  else {
    //alert("Too bad, no localStorage for us");
    return defaultBusiness();
  }

  function defaultBusiness() {
    var Business = {
      businessName: "Pizza Press",
      basePrice: 9.95,
      orders: [
        {
          customer: {
            email: "owner@pizzapress.com",
            firstName: "Karen",
            lastName: "Freeman-Smith",
            address: "1710 Henderson Ave",
            city: "Eugene",
            state: "OR",
            zip: "97403",
            paymentMethod: "Visa"
          },
          items: [],
          total: 9.95,
          date: "2016-08-27"
        }
      ]
    }
    return Business;
  }

  function storageAvailable(type) {
    try {
      var storage = window[type],
        x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    }
    catch(e) {
      return false;
    }
  }
}

function saveBusiness(Business) {
  localStorage.setItem("myBiz", JSON.stringify(Business));
}


// pizza size used to calcuate prices
function Size(description, multiplier) {
  this.description=description;
  this.multiplier=multiplier;
}

// For non-pizza items, toppings, specialties
function Item(description, cost, price, type) {
  this.description=description;
  this.cost=cost;
  this.price=price;
  this.type=type;
}
