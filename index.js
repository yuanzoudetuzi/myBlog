/**
 * Created by fanhualuomu on 17-4-13.
 */
$(document).ready(function () {
    $(".menu").mouseover(function () {
        $(this).find("ul").stop(true).slideDown("3000").effect("bounce",{ distance: 5 },"slow");

    });
    $(".menu").mouseout(function () {
        $(this).find("ul").stop(true).slideUp("3000");
    });

    $("#date").datepicker();

});

$( document ).click(function() {
    $( "#toggle" ).effect("bounce",{ distance: 5 },"slow")
});/**
 * Created by Administrator on 2017/4/18.
 */
