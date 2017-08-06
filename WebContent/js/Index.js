/**
 * Created by dell on 2017-05-17.
 */
$(document).ready(function () {
    var q = 0;
    var clears = setInterval(ss, 2000);

    function ss() {
        $(".num>li").eq(q).children().css("color", "white");
        $(".num>li").eq(q).siblings().children().css("color", "black");
        $(".num>li").eq(q).css({"background": "red"});
        $(".num>li").eq(q).siblings().css({"background": "#989797"});
        $(".slide_box>li").eq(q).fadeIn(1500);
        $(".slide_box>li").eq(q).siblings().hide();
        q++;
        if (q == 3) {
            q = 0;
        }
    }

   /* $(".ss_list_bg").parent().mouseover(function () {
        $(".ss_list_bg").stop(true, false).slideDown(1000);
    }).mouseout(function () {
        $(".ss_list_bg").stop(true, false).slideUp(1000);
    });*/

    /*$(".car_t").mouseover(function () {
        $(".last").fadeIn();
    }).mouseout(function () {
        $(".last").fadeOut(350);
        $(".last").mouseover(function () {
            $(".last").stop(false, true);
            $(".last").show();
        }).mouseleave(function () {
            $(".last").fadeOut(1000);
        });

    });*/

 /*   var m = 0;
    $(".shop").find("a").click(function () {
        var i = parseFloat($(this).parent().siblings("div").children("strong").html().substring(1));
        var j = parseFloat($(".J_totalPrice").html().substring(1));
        $(".J_totalPrice").html("￥" + (j - i));
        var k = parseFloat($(this).parent().siblings("div").find("input").val());
        var l = parseFloat($(".J_totalCount").html().substring(1, 2));
        if (l > 0) {
            $(".J_totalCount").html("(" + (l - k) + ")");
            $(this).parents("li").remove();
            m = m - 1;
        }
        if (m == -3) {
            $(".buy").hide();
            $(".noshop").show();
        }
    })*/
    $(".fj").parent().mouseover(function () {
        $(this).children(".fj").css({"color": "red", "background": "white"});
        $(this).children(".zj").show();
    }).mouseout(function () {
        $(this).children(".fj").css({"color": "white", "background": "#B00504"});
        $(this).children(".zj").hide();
    })


    $(".num").children().mouseover(function () {

        $(this).children().css("color", "white");
        $(this).siblings().children().css("color", "black");
        $(this).css({"background": "red"});
        $(this).siblings().css({"background": "#989797"});
        var i = $(this).index();
        $(".slide_box>li").eq(i).show();
        $(".slide_box>li").eq(i).siblings().hide();
        q = i;
        clearInterval(clears);

    }).mouseout(function () {
        clears = setInterval(ss, 2000);
    });
    var marginTop = 0;
    var SV = setInterval(pp, 50);

    function pp() {
        var $first = $("#express>li").eq(0);
        $first.animate({"margin-top": marginTop--}, 10, function () {
            if ((-marginTop) > $first.height()) {
                $first.css({"margin-top": 0});
                $("#express").append($first);
                marginTop = 0;
            }
        })

    }

    $("#express>li").mouseover(function () {
        clearInterval(SV);
    }).mouseout(function () {
        SV = setInterval(pp, 50);
    })



   var marginRight = 0;
    var VS = setInterval(uu, 50);

    function uu() {

        /**
         * 左浮动
         * @type {*|jQuery}
         */
        var $first = $(".featureUL>li").first();
        $first.animate({"margin-left": marginRight--}, 10, function () {
         if ((-marginRight) > $first.width()) {
         $first.css("margin-left", "0px").appendTo($(".featureUL"));
         marginRight = 0;
         }
         });


        /*three.animate({"right":marginRight--},10,function(){
         if((-marginRight)>($first.width()*2)){
         three.css({"right":0});
         $(".featureUL").prepend(three);
         marginRight=0;
         }
         })

         two.animate({"right":marginRight--},10,function(){
         if((-marginRight)>($first.width()*3)){
         two.css({"right":0});
         $(".featureUL").prepend(two);
         marginRight=0;
         }
         })
         $first.animate({"right":marginRight--},10,function(){
         if((-marginRight)>($first.width()*4)){
         $first.css({"right":0});
         $(".featureUL").prepend($first);
         marginRight=0;
         }
         })
         */
    }
    $(".h_prev").click(function(){

        var $first = $(".featureUL>li").first();
        $first.stop(false,true);
        //$(".featureUL").append($first);

        clearInterval(VS);
    }).mouseout(function(){
        VS=setInterval(uu, 50);
    })

    $("#asd").submit(function(){
       var qqqq= $(".s_ipt").val();
        location.href="https://www.baidu.com/s?wd="+qqqq;
        return false;
    })


})