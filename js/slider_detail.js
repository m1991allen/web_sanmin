

var header = document.getElementById("bookTab2");
var btns = header.getElementsByClassName("tab2");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("tabActive2");
        current[0].className = current[0].className.replace(" tabActive2", "");
        this.className += " tabActive2";
    });
}



$(document).ready(function () {
    $('#booktb8').click();
});

$('#booktb8').click(function () {
    $('#book-tab9,#book-tab10,#book-tab11,#book-tab12,#book-tab13').hide();
    $('#book-tab8').show();
});
$('#booktb9').click(function () {
    $('#book-tab8,#book-tab10,#book-tab11,#book-tab12,#book-tab13').hide();
    $('#book-tab9').show();
});
$('#booktb10').click(function () {
    $('#book-tab8,#book-tab9,#book-tab11,#book-tab12,#book-tab13').hide();
    $('#book-tab10').show();
});
$('#booktb11').click(function () {
    $('#book-tab8,#book-tab9,#book-tab10,#book-tab12,#book-tab13').hide();
    $('#book-tab11').show();
});
$('#booktb12').click(function () {
    $('#book-tab8,#book-tab9,#book-tab10,#book-tab11,#book-tab13').hide();
    $('#book-tab12').show();
});
$('#booktb13').click(function () {
    $('#book-tab8,#book-tab9,#book-tab10,#book-tab11,#book-tab12').hide();
    $('#book-tab13').show();
});