<%@ page language="java" import="com.ytzl.oneshop.entity.*,com.ytzl.oneshop.service.impl.*" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>登录</title>
	<link rel="stylesheet" href="css/base.css">
	<link rel="stylesheet" href="css/load.css">
</head>
<body>
	<header id="headNav">
		<div class="innerNav cf">
			<a class="fl" href="#"><img src="images/loginlogo.jpg" alt=""/></a>
			<div class="headFont fr">
				<span>您好，欢迎光临1号店！<a href="registerpage.html">请注册</a></span>
				<a class="helpLink" href="#"><i class="runbun"></i>帮助中心<i class="turnb"></i></a>
			</div>
			<div class="outHelp">
				<ul class="helpYou" style="display: none;">
					<li><a href="#">包裹跟踪</a></li>
					<li><a href="#">常见问题</a></li>
					<li><a href="#">在线退换货</a></li>
					<li><a href="#">在线投诉</a></li>
					<li><a href="#">配送范围</a></li>
				</ul>
			</div>
		</div>
	</header>
	<section id="secBody">
		<form action="faker01.jsp" id="loadForm">
			<div class="innerBody cf">
				<img class="fl" src="images/loadimg.jpg" alt=""/>
				<div class="tableWrap fr">
					<div class="tableTap cf">
						<h3 class="fl">1号店用户登录</h3>
						<a class="fr" id="fr" href="#">注册账号</a>
					</div>
					<div class="tableItem">
						<i class="userHead"></i>
						<!--邮箱、以13、15、18开头的电话或者是2~4个汉字-->
						<input type="text" name="userName" id="one" placeholder="邮箱/手机/用户名" required
							   pattern="[a-zA-Z0-9]{1,10}@[a-zA-Z0-9]{1,5}\.[a-zA-Z0-9]{1,5}|^1[3578]\d{9}$|^[\u4e00-\u9fa5]{2,4}$"/>
					</div>
					<div class="tableItem">
						<i class="userLock"></i>
						<input type="password" name="password" id="two" placeholder="密码" required pattern="^\w{6,10}$"/>
					</div>
					<div class="tableAuto cf">
						<a class="autoMatic fl" href="#"><input class="loadGiet"  type="checkbox"/>自动登录</a>
						<a class="fr" href="#">忘记密码？</a>
					</div>
					<!--<button class="tableBtn">登录</button>-->
					<input type="submit" class="tableBtn" value="登录"/>
					<h2 class="moreWeb">更多合作网站账号登录</h2>
					<div class="outType cf">
						<ul class="loadType cf">
							<li class="fl" id="is"><a href="#"></a></li>
							<li class="fl"><a href="#"></a></li>
							<li class="fl"><a href="#"></a></li>
							<li class="fl"><a href="#"></a></li>
							<li class="loadMore fr">更多合作网站<i></i></li>
						</ul>
					</div>
					<ul class="typeWeb cf">
						<li class="fl"><i></i><a href="#">百度</a></li>
						<li class="fl"><i></i><a href="#">百度</a></li>
						<li class="fl"><i></i><a href="#">百度</a></li>
						<li class="fl"><i></i><a href="#">百度</a></li>
						<li class="fl"><i></i><a href="#">百度</a></li>
					</ul>
				</div>
			</div>
		</form>
	</section>
	<footer id="footNav">
		<p><a href="#">沪ICP备13044278号</a>|&nbsp;&nbsp;合字B1.B2-20130004&nbsp;&nbsp;|<a href="#">营业执照</a></p>
		<p>Copyright © 1号店网上超市 2007-2016，All Rights Reserved</p>
	</footer>

<%-- <% 
	request.setCharacterEncoding("utf-8");
	Person person=new Person();
	person.setUserName(request.getParameter("userName"));
	person.setPwd(request.getParameter("password"));
	int num=new OneShopServiceImpl().loginService(person);
	 if(num>0){
		response.sendRedirect("Index.jsp");
	}else{
		response.sendRedirect("registerpage.jsp");
		
	} 
%> --%>
</body>
</html>