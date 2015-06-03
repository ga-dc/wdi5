if (typeof Function.prototype.method !== "function") {
    Function.prototype.method = function (name, implementation) {
        this.prototype[name] = implementation;
        return this;
    };
}

var Cookie = function Cookie () {
    this.flavor = "Chocolate Chip";
};

var chipsAhoy = new Cookie();
console.log(chipsAhoy);

Cookie.method('getFlavor', function getFlavor () {
    return this.flavor;
}).method('setFlavor', function setFlavor (flavor) {
    this.flavor = flavor;
    return this;
});

console.log(chipsAhoy.getFlavor());
console.log(chipsAhoy.setFlavor("Peanut Butter").getFlavor());
