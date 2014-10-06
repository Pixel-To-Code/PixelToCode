var Main = {
    run: function () {
        homePromos.init();
    }
};

var currentId = 0;
var paused = false;
var interval = 5000;
var numSlides = 0;

var homePromos = {

    init: function () {

        numSlides = $('.homepromos ul li a.panel-control').length;

        if (numSlides > 0) {
            $('.homepromos ul li a.panel-control').click(function () {
                paused = true;
                currentId = this.id.replace('panel', '');
                shift(this.id);
                return false;
            });

            var x = setTimeout('slider()', interval, null);
        }
    }
};

function shift(id) {
    $('div.panel:visible').slideToggle();
    var panel = $('div.' + id);
    panel.slideToggle();
    panel.show();
}

function slider() {
    //alert(currentId);
    currentId++;
    if (currentId > numSlides) { currentId = 0; }
    if (!paused) {
        shift('panel' + currentId);
        var x = setTimeout('slider()', interval, null);
    }
}

$(document).ready(function () {
    Main.run();
});
