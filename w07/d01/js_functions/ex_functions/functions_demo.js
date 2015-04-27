iGotHoisted("adam");

function iGotHoisted(name) {
  console.log("Hello, " + name);
}


var cookiesAreDelicions = true;

if (cookiesAreDelicions) {
  var cookieFunction = function (name) {
    console.log("truth! " + name);
  }
} else {
  var cookieFunction = function (name) {
    console.log("False, " + name);
  }
}

cookieFunction("adam");
