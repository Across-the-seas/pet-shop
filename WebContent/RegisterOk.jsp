<!DOCTYPE html>
<html>
<head lang="en">
    <meta charset="UTF-8">
    <title></title>
    <style>
        .div{
            border:2px solid black;
           position:absolute;
            left:200px;
            top:200px;

        }
        .two{
            cursor:pointer;
            position:absolute;
            left:500px;
            top:85px;
        }
    </style>
</head>
<body>
    <div class="div"><span id="qq">5秒之后自动跳转···</span><img class="one" src="images/注册成功图片.jpg"><a href="loadpage.html"><img class="two" src="images/立即登录.jpg"></a></div>
<script src="js/jquery-1.11.1.min.js"></script>
<script >
    $(document).ready(function(){
        var i=5;
        var sv=setInterval(function(){
            if(i>0){
                i--
                $("#qq").html(i+"秒之后自动跳转···")
            }else{
                clearInterval(sv);
                location.href="loadpage.html";
            }
        },1000)
    })
</script>
</body>

</html>