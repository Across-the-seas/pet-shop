/**
 * Created by dell on 2017-05-16.
 */
$(document).ready(function(){
    $(".ss_list_bg").parent().mouseover(function(){
            $(".ss_list_bg").stop(true,false).slideDown(1000);
    }).mouseout(function(){
        $(".ss_list_bg").stop(true,false).slideUp(1000);
    });

   $(".car_t").mouseover(function(){
       $(".last").fadeIn();
   }).mouseout(function(){
       $(".last").fadeOut(350);
           $(".last").mouseover(function(){
               $(".last").stop(false,true);
               $(".last").show();
           }).mouseleave(function(){
               $(".last").fadeOut(1000);
           });

   });
    var pl=0;
    var nn=3;
    $(".J_btnDelCount").click(function(){
        var num=$(this).next().val();
        if(num>1){
            var j=parseInt(num)-1;
            $(this).next().val(j);


           var smallTotalPrice=$(this).parent().next().html();
            var price=parseFloat(smallTotalPrice.substring(1));

            var s=price/parseInt(num);
            $(this).parent().next().html("￥"+(j*s).toFixed(1));

            var totalPrice=$(".J_smallTotalPrice").text().split("￥");
            var total=0;
            for(var k=1;k<totalPrice.length;k++){
               total=total+parseFloat(totalPrice[k]);
            }
            $(".J_totalPrice").html("￥"+total);

            var count=0;
            var totalCount=$(".J_inputCount");
            for(var k=0;k<totalCount.length;k++){
                count=count+parseInt(totalCount.eq(k).val());
            }
           $(".J_totalCount").html("("+count+")");

            var J_count= parseInt($(this).parents("li").find($(".J_count")).html().substring(1,2));
            $(this).parents("li").find($(".J_count")).html("共"+(j)+"件商品");
        }else if(num==1){
            var bol=confirm("确认要删除吗？");
            if(bol){

                var totalPrice= $(this).parents("li").siblings("li").find(".J_smallTotalPrice").text().split("￥");
                $(this).parents("li").remove();
                /*var totalPrice=$(".J_smallTotalPrice").text().split("￥");*/
                var total=0;
                for(var k=1;k<totalPrice.length;k++){
                    total=total+parseFloat(totalPrice[k]);
                }
                $(".J_totalPrice").html("￥"+total);
                $(".J_totalCount").html("("+(--nn)+")");
                pl--

                if(pl==-3){
                    $(".buy").hide();
                    $(".noshop").show();
                }
            }
       /*     var pp=$(this);
            alert(pp);
        $(".f").show();
        $(".s").show();
        $(".ts").show();
            $(".s").click(function(){
                pp.parents("li").remove();
                var totalPrice=$(".J_smallTotalPrice").text().split("￥");
                var total=0;
                for(var k=1;k<totalPrice.length;k++){
                    total=total+parseFloat(totalPrice[k]);
                }
                $(".J_totalPrice").html("￥"+total);
                $(".J_totalCount").html("("+(--nn)+")");
                pl--

                if(pl==-4){
                    $(".buy").hide();
                    $(".noshop").show();
                }
                $(".f").hide()
                $(".s").hide()
                $(".ts").hide()
            })*/

        }

    });

    $(".J_btnAddCount").click(function(){
        var num=$(this).prev().val();

        var j=parseInt(num)+1;

        $(this).prev().val(j);

        var smallTotalPrice=$(this).parent().next().html();
        var price=parseFloat(smallTotalPrice.substring(1));
        var s=price/parseInt(num);
        $(this).parent().next().html("￥"+(j*s).toFixed(1));

        var totalPrice=$(".J_smallTotalPrice").text().split("￥");

        var total=0;
        for(var k=1;k<totalPrice.length;k++){
            total=total+parseFloat(totalPrice[k]);
        }
        $(".J_totalPrice").html("￥"+total);

        var count=0;
        var totalCount=$(".J_inputCount");
        for(var k=0;k<totalCount.length;k++){
            count=count+parseInt(totalCount.eq(k).val());
        }
        $(".J_totalCount").html("("+count+")");
        $(this).parents("li").find($(".J_count")).html("共"+(j)+"件商品");

    });
    var yi;
    var xi;
    $(".J_inputCount").focus(function(){

        yi=parseInt($(this).val());
    }).blur(function(){
        xi=$(this).val();
        if(isNaN(xi)==false){
            if(xi==0){
                alert("最小输入值为1")
                $(this).val(yi);
            }else{
                xi=parseInt(xi);
                $(this).val(xi);
            }
        }else if(isNaN(xi)){
            alert("输入错误");
            $(this).val(yi);
        }

        if(xi>yi){
            var smallTotalPrice=$(this).parent().next().html();
            var price=parseFloat(smallTotalPrice.substring(1));
            var s=price/yi;
            $(this).parent().next().html("￥"+(xi*s).toFixed(1));
            var totalPrice=$(".J_smallTotalPrice").text().split("￥");

            var total=0;
            for(var k=1;k<totalPrice.length;k++){
                total=total+parseFloat(totalPrice[k]);
            }
            $(".J_totalPrice").html("￥"+total);
            var count=0;
            var totalCount=$(".J_inputCount");
            for(var k=0;k<totalCount.length;k++){
                count=count+parseInt(totalCount.eq(k).val());
            }
            $(".J_totalCount").html("("+count+")");

            var J_count= parseInt($(this).parents("li").find($(".J_count")).html().substring(1,2));
            $(this).parents("li").find($(".J_count")).html("共"+(xi)+"件商品");

        }else if(xi<yi){

            if(xi>0){
                var smallTotalPrice=$(this).parent().next().html();
                var price=parseFloat(smallTotalPrice.substring(1));

                var s=price/yi;
                $(this).parent().next().html("￥"+(xi*s).toFixed(1));

                var totalPrice=$(".J_smallTotalPrice").text().split("￥");
                var total=0;
                for(var k=1;k<totalPrice.length;k++){
                    total=total+parseFloat(totalPrice[k]);
                }
                $(".J_totalPrice").html("￥"+total);

                var count=0;
                var totalCount=$(".J_inputCount");
                for(var k=0;k<totalCount.length;k++){
                    count=count+parseInt(totalCount.eq(k).val());
                }
                $(".J_totalCount").html("("+count+")");
                var J_count= parseInt($(this).parents("li").find($(".J_count")).html().substring(1,2));
                $(this).parents("li").find($(".J_count")).html("共"+(xi)+"件商品");
            }
        }
    })


    $("[data-key='0']").click(function(){
        var mli=$(".cate_list").children();
        var arr=[];
        for(var i=0;i<mli.length;i++){
            arr[i]=mli.eq(i);
        }
        arr.sort(function(a,b){
            return parseInt(a.find("span").html().substring(1))- parseInt(b.find("span").html().substring(1));
        });
        for(var i=0;i<arr.length;i++){
            $(".cate_list").append(arr[i]);
        }
    })

    $("[data-key='1']").click(function(){
        var mli=$(".cate_list").children();
        var arr=[];
        for(var i=0;i<mli.length;i++){
            arr[i]=mli.eq(i);
        }
        arr.sort(function(a,b){
            return parseInt(a.find("span").html().substring(1))- parseInt(b.find("span").html().substring(1));
        });
        for(var i=0;i<arr.length;i++){
            $(".cate_list").append(arr[i]);
        }
    })

    $("[data-key='2']").click(function(){
        var mli=$(".cate_list").children();
        var arr=[];
        for(var i=0;i<mli.length;i++){
            arr[i]=mli.eq(i);
        }
        arr.sort(function(a,b){
            return parseInt(a.find("span").html().substring(1))- parseInt(b.find("span").html().substring(1));
        });
        for(var i=0;i<arr.length;i++){
            $(".cate_list").prepend(arr[i]);
        }
    })

    var m=0;
    $(".shop").find("a").click(function(){
        var bol= confirm("确认要删除吗？");
        if(bol){
            var i=parseFloat($(this).parent().siblings("div").children("strong").html().substring(1));
            var j=parseFloat($(".J_totalPrice").html().substring(1));
            $(".J_totalPrice").html("￥"+(j-i));
            var k=parseFloat($(this).parent().siblings("div").find("input").val());
            var l=parseFloat($(".J_totalCount").html().substring(1,2));

                $(".J_totalCount").html("(" + (l - k) + ")");
                $(this).parents("li").remove();
                m = m - 1;

            if(m==-3){
                $(".buy").hide();
                $(".noshop").show();
            }
        }

    })
    $("#ppp").click(function(){
        location.href="http://localhost:63342/WebStormProject/1%E5%8F%B7%E5%BA%97%E7%B4%A0%E6%9D%90/Product.html"
    })
   /* $("j_car").click(function(){
        var $mli=$()
    })*/
})