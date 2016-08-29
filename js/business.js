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
      orders:[],
      customers:[],
      currentOrder: {
        customer: {
          email: "owner@pizzapress.com",
          firstName: "Guest",
          lastName: "Doe",
          address: "1234 Main St",
          city: "Anytown",
          state: "USA",
          zip: "12345",
          paymentMethod: "Cash"
        },
        items: [],
        total: 0,
        date: "2016-08-27"
      },
      sizes: [
        {
          description: "Medium",
          multiplier: 1
        }
      ],
      types: [
        {
          category: "meat",
          topping: true,
          extra: false,
          ingredients: [
            {
              description: "pepperoni",
              cost: .5,
              price: 1.25
            },
            {
              description: "sausage",
              cost: .5,
              price: 1.25
            }
          ]
        },
        {
          category: "veggies",
          topping: true,
          extra: false,
          ingredients: [
            {
              description: "mushrooms",
              cost: .25,
              price: .5
            },
            {
              description: "olives",
              cost: .1,
              price: .25
            }
          ],
        },
        {
          category: "drinks",
          topping: false,
          extra: true,
          ingredients: [
            {
              description: "Pepsi",
              cost: .5,
              price: 2.75
            },
            {
              description: "Budwieser",
              cost: 1.15,
              price: 5.25
            }
          ],
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
function findSize(description) {
  var thisSize={};
  Business.sizes.forEach(function(size) {
    if(size.description===description) {
      thisSize=size;
    }
  });
  return thisSize;
}

// For non-pizza items, toppings, specialties
function Item(description, cost, price) {
  this.description=description;
  this.cost=cost;
  this.price=price;
}
function findTopping(description) {
  thisTopping = {};
  Business.types.forEach(function(type) {
     if(type.topping) {
       type.ingredients.forEach(function(topping) {
         if(topping.description===description) {
           thisTopping= topping;
         }
       });
     }
  });
  return thisTopping;
}

function Type(category, topping, extra) {
  this.category=category;
  this.topping=topping;
  this.extra=extra;
  this.ingredients=[];
}
Type.prototype.findType = function(category) {}
