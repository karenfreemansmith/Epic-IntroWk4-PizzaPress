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
      "businessName": "Pizza Press"
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
