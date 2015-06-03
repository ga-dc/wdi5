var Cookie = function Cookie () {
    this.flavor = "Mint";
};

var thinMint = Cookie();
console.log(typeof thinMint); //=> undefined
console.log(window.flavor); //=> "Mint"

var thinMint = new Cookie();
console.log(typeof thinMint); //=> "object"
console.log(window.flavor); //=> "Mint"

var Cookie = function Cookie () {
    if (!(this instanceof Cookie)) {
        return new Cookie();
    }

    this.flavor = "Mint";
};

var thinMint = Cookie();
console.log(typeof thinMint); //=> "object"
console.log(window.flavor); //=> "Mint"
