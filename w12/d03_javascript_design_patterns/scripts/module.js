(function () {
    var module = {};

    module.ready = function ready () {
        module.$body = $('body');
    };

    module.changeBackground = function changeBackground () {
        module.$body.css({backgroundColor: "red"});
    };

    window.MyModule = module;
})();

$(document).ready(MyModule.ready);

// MyModule.changeBackground();
