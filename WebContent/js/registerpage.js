/**
 * Created by dell on 2017-05-17.
 */
$(document).ready(function(){
    $(".outHelp").mouseover(function(){
        $(".helpYou").stop(true,false).slideDown("slow");
    }).mouseout(function(){
        $(".helpYou").stop(true,false).slideUp("slow");
    })
    var flag1;
    var flag2;
    var flag3;
    var flag4;
    $("#registerForm").submit(function(){

        if(checkName()){
            flag1=true
        }
        if(checkPwd()){
            flag2=true
        }
        if(checkRepwd()){
            flag3=true
        }
        if(checkYanzheng()){
            flag4=true
        }
         return flag1&&flag2&&flag3&&flag4;  /* return checkName()&&checkPwd()&&checkRepwd();*/
        })
    var i=60
    var asd=true;
    $(".tableText").click(function(){
        var nums=parseInt(Math.random()*9000+1000);
        var time=parseInt(Math.random()*60);
        if(checkName()){
            if(asd){
                var s=setInterval(function(){
                    asd=false;
                    $(".tableText").html("("+(--i)+"秒)重发");
                    if(i==time){
                        $(".yanzheng").val(nums);
                    }
                    if(i<0){
                        clearInterval(s);
                        i=60;
                        $(".tableText").html("获取验证码");
                        asd=true;
                    }
                },1000);
            }

        }


    })
    $("[name=phone]").blur(function(){
        checkName();
    })
    $("[name=password]").blur(function(){
        checkPwd();
    })
    $("[name=rePassword]").blur(function(){
        checkRepwd();
    })
    $("[name=yanzheng]").blur(function(){
        checkYanzheng();
    })
    function checkName(){
        var name=$("[name=phone]").val();
       var pat=/^1[3578]\d{9}$/;

        if(name==""){
            $("[name=phone]").next().css({"color":"red","position":"absolute","left":"350px","width":"400px"});
            $("[name=phone]").next().html("手机号不能为空");
            return false;
        }
        if(!pat.test(name)){
            $("[name=phone]").next().css({"color":"red","position":"absolute","left":"350px","width":"400px"});
            $("[name=phone]").next().html("手机号不正确");
            return false;
        }
        $("[name=phone]").next().html("");
        return true;
    }
    function checkPwd(){
        var pwd=$("[name=password]").val();
        var pat1=/^\w{6,10}$/;

        if(pwd==""){
            $("[name=password]").next().css({"color":"red","position":"absolute","left":"350px","width":"400px"});
            $("[name=password]").next().html("密码不能为空");
            return false;
        }
        if(!pat1.test(pwd)){
            $("[name=password]").next().css({"color":"red","position":"absolute","left":"350px","width":"400px"});
            $("[name=password]").next().html("密码为包含数字、字母或者下划线的6-10位字符");
            return false;
        }
        $("[name=password]").next().html("");
        return true;
    }
    function checkRepwd(){
        var pwd=$("[name=password]").val();
        var repwd=$("[name=rePassword]").val();
        if(repwd==""){
            $("[name=rePassword]").next().css({"color":"red","position":"absolute","left":"350px","width":"400px"});
            $("[name=rePassword]").next().html("确认密码不能为空");
            return false;
        }
        if(pwd!=repwd){
            $("[name=rePassword]").next().css({"color":"red","position":"absolute","left":"350px","width":"200px"});
            $("[name=rePassword]").next().html("密码与确认密码不一致");
            return false;
        }
        $("[name=rePassword]").next().html("");
        location.href="../1号店素材/RegisterOk.html";
        return true;
    }
    function checkYanzheng(){
        var yanzheng=$("[name=yanzheng]").val();
        var pat4=/^\d{4}$/;

        if(yanzheng==""){
            $("[name=yanzheng]").parent().siblings("span").css({"color":"red","position":"absolute","left":"810px","top":"250px","width":"400px","font-size":"14px"});
            $("[name=yanzheng]").parent().siblings("span").html("验证码不能为空");
            return false;
        }
        if(!pat4.test(yanzheng)){
            $("[name=yanzheng]").parent().siblings("span").css({"color":"red","position":"absolute","left":"810px","top":"250px","width":"400px","font-size":"14px"});
            $("[name=yanzheng]").parent().siblings("span").html("验证码为4位纯数字");
            return false;
        }
        $("[name=yanzheng]").parent().siblings("span").html("");
        return true;
    }
})