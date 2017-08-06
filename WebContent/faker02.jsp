<%@ page language="java" import="com.ytzl.oneshop.entity.*,com.ytzl.oneshop.service.impl.*" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<% 
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

%>