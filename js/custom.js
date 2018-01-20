$(document).ready(function(){
 headerPostion();
});
$(window).resize(function(){
headerPostion();
});

function headerPostion(){
    var Height=$(window).height();
    var Top = (Height- $(".header-content").height() + $(".logo-container").height())/6;
    var BtmContentTop = (($(".header-content").height() + $(".logo-container").height())+$(".header-btm-content").height())-$(".header-btn-container").height();
    $(".head-container").css({"height":Height+"px"});
    $(".header-content").css({"top":Top+"px"});
    //$(".header-btm-content").css({"top":BtmContentTop+"px"});
}