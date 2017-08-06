<%@ page language="java" import="com.ytzl.oneshop.entity.*,com.ytzl.oneshop.service.impl.*" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head lang="en">
	<meta charset="UTF-8">
	<title>注册</title>
	<link rel="stylesheet" href="css/base.css">
	<link rel="stylesheet" href="css/register.css">
</head>
<body>
	<header id="headNav">
		<div class="innerNav cf">
			<a class="fl" href="#"><img src="images/loginlogo.jpg" alt=""></a>
			<div class="headFont fr">
				<span>您好，欢迎光临1号店！<a href="loadpage.html">请登录</a></span>
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
	<section id="secTab">
		<form action="faker02.jsp" id="registerForm">
			<div class="innerTab">
		<h2>1号店注册</h2>
		<div class="tableItem">
	        <input type="text"id="kk" name="phone"  placeholder="手机号码" /><span class="sb"></span>
	    </div>
	    <div class="cf">
			<div class="tableItem onlyItem fl">
				<input class="yanzheng" type="text" name="yanzheng" placeholder="验证码" />
		    </div>
	    	<a class="tableText fr"  >获取验证码</a><span class="sb"></span>
	    </div>
		<div class="tableItem">
	        <input type="password" name="password"  placeholder="设置密码"  /><span class="sb"></span>
	    </div>
		<div class="tableItem">
	        <input type="password" name="rePassword"  placeholder="确认密码" /><span class="sb"></span>
	    </div>
	    <p class="clickRegist">点击注册，表示您同意1号店 <a href="#">《服务协议》</a></p>
	    <input type="submit" id class="tableBtn" value="同意协议并注册" >
	</div>
		</form>
	</section>
	<footer id="footNav">
		<p><a href="#">沪ICP备13044278号</a>|&nbsp;&nbsp;合字B1.B2-20130004&nbsp;&nbsp;|<a href="#">营业执照</a></p>
		<p>Copyright © 1号店网上超市 2007-2016，All Rights Reserved</p>
	</footer>
<%-- 	<%
		request.setCharacterEncoding("utf-8");
		Person person=new Person();
		person.setUserName(request.getParameter("phone"));
		person.setPwd(request.getParameter("password"));
		int num=new OneShopServiceImpl().regService(person);
		 if(num>0){
			response.sendRedirect("loadpage.jsp");
		}else{
			response.sendRedirect("Product.jsp");
		
	} 
	%> --%>

</body>
</html>