package com.ytzl.oneshop.dao.impl;


import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;


import com.ytzl.oneshop.dao.BaseDao;
import com.ytzl.oneshop.dao.OneShopDao;
import com.ytzl.oneshop.entity.Person;

public class OneShopDapImpl extends BaseDao implements OneShopDao{

	@Override
	public int isRes(Person person) {
		
		String sql="insert into shop(username,pwd) values(?,?)";
		Object[] params={person.getUserName(),person.getPwd()};
		int num=this.executeUpdate(sql, params);
		
		return num;
	}

	
	public int islogin(Person person) {
		int num=0;
		String sql="select count(1) from shop where username=? and pwd=?";
		Connection conn=this.getConnection();
		
		try {
			PreparedStatement ps = conn.prepareStatement(sql);
			ps.setString(1, person.getUserName());
			ps.setString(2, person.getPwd());
			ResultSet rs=ps.executeQuery();
			while(rs.next()){
				num=rs.getInt(1);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return num;
	
	}
	
}
