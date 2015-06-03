var MyModule = (function (module) {
    var ready = function ready () {
        module.$body = $('body');
    };

    var _myColor = "purple";

    var changeBackground = function changeBackground () {
        module.$body.css({backgroundColor: _myColor});
    };

    return {
        ready: ready,
        changeBackground: changeBackground
    };
})(MyModule || {});

$(document).ready(MyModule.ready);

// MyModule.changeBackground();
