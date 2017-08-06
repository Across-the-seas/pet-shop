/**
 * Created by dell on 2017-05-17.
 */
$(document).ready(function(){
    $("[name=zuhe]").click(function(){

        var price=parseFloat($(this).parent().next().html().substring(1));
        if($(this).is(':checked')){
            var total=parseFloat($(".team_sum").children("span").html());

            $(".team_sum").children("span").html(total+price);
        }else{
            var total=parseFloat($(".team_sum").children("span").html());

            $(".team_sum").children("span").html(total-price);
        }
    })

    $("#choice1").find("li").click(function(){

        $(this).css("border","2px red solid");
        $(this).children().show();
        $(this).siblings().css("border","2px gray solid");
        $(this).siblings().children().hide();
    })
    $("#choice2").find("li").click(function(){

        $(this).css("border","2px red solid");
        $(this).children().show();
        $(this).siblings().css("border","2px gray solid");
        $(this).siblings().children().hide();
    })
    $(".n_btn_1").click(function(){
       var num= parseInt($(this).prev().val());
        $(this).prev().val(num+1);
        var total=parseInt($(".des_price").children("b").html().substring(1));
        var to=total/num*(num+1);
        $(".des_price").children("b").html("￥"+to);

    })
    $(".n_btn_2").click(function(){
        var num= parseInt($(this).siblings().first().val());
        if(num>1){
            $(this).siblings().first().val(num-1);
            var total=parseInt($(".des_price").children("b").html().substring(1));
            var to=total/num*(num-1);
            $(".des_price").children("b").html("￥"+to);
        }
    })

    $(".s_brand_c").click(function(){
        location.href="../1号店素材/CategoryList.html";
    })

})

