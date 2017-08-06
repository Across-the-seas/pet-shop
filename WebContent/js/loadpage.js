/**
 * Created by dell on 2017-05-17.
 */
$(document).ready(function(){
$("#is").click(function(){
    //location.href="https://graph.qq.com/oauth/show?which=Login&display=pc&client_id=100240394&response_type=code&redirect_uri=http%3A%2F%2Fhuaban.com%2Foauth%2Fcallback%2F&scope=get_user_info%2Cadd_topic%2Cget_info%2Cget_fanslist%2Cget_idolist%2Cadd_idol%2Ccheck_page_fans";
})

    $("#fr").click(function(){
       location.href="../1号店素材/registerpage.html";
    })


    $(".tableBtn").click(function(){
        var uname=document.getElementById("one");
        var pwd=document.getElementById("two");
        if(uname.validity.valueMissing) {
            uname.setCustomValidity("用户名不能为空");
        }else if(uname.validity.patternMismatch){

                uname.setCustomValidity("用户名应为邮箱、以13、15、18开头的电话或者是2~4个汉字");

        }else{
            uname.setCustomValidity("");
        }
        if(pwd.validity.valueMissing){
            pwd.setCustomValidity("密码不能为空");
        }else if(pwd.validity.patternMismatch){
            pwd.setCustomValidity("密码必须是6-10位包含数字、字母或者下划线的字符");
        }else{
            pwd.setCustomValidity("");
           location.href="../1号店素材/Index.html";
          return false;   //阻止冒泡
        }
    })

})
