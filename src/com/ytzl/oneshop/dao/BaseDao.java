package com.ytzl.oneshop.dao;

import java.io.IOException;
import java.io.InputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Properties;


public class BaseDao {


	static{
		init();
	}

	Connection conn;
	PreparedStatement ps=null;
	ResultSet rs=null;
	private static String driver;
	private static String url;
	private static String userName;
	private static String password;

	public static void init(){
		Properties pro=new Properties();
		String config="database.properties";
		InputStream is=BaseDao.class.getClassLoader().getResourceAsStream(config);
		try {
			pro.load(is);
			driver=pro.getProperty("driver");
			url=pro.getProperty("url");
			userName=pro.getProperty("userName");
			password=pro.getProperty("password");	

		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}


	}

	public Connection getConnection(){
		try {
			Class.forName(driver);
			conn = DriverManager.getConnection(url,userName,password);
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (ClassNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return conn;
	}
	
	
	public void closeAll(Connection conn,PreparedStatement ps,ResultSet rs){

		try {
			if(rs!=null){
				rs.close();
			}
			if(ps!=null){
				conn.close();
			}
			if(rs!=null){
				rs.close();
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
	}
	
	public int executeUpdate(String sql,Object[] params){
			conn=this.getConnection();
		 int num=0;
		 try {
			 ps=conn.prepareStatement(sql);
			 for(int i=0;i<params.length;i++){
				 ps.setObject(i+1, params[i]);
			 }
			 num = ps.executeUpdate();
		 } catch (SQLException e) {
			 // TODO Auto-generated catch block
			 e.printStackTrace();
		 }finally{
			 closeAll(conn, ps, rs);
		 }
		 return num;

	}
}
