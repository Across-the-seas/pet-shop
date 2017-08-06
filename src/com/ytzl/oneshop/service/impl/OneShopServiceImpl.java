package com.ytzl.oneshop.service.impl;



import com.ytzl.oneshop.dao.OneShopDao;
import com.ytzl.oneshop.dao.impl.OneShopDapImpl;
import com.ytzl.oneshop.entity.Person;

public class OneShopServiceImpl implements OneShopService{
	OneShopDao oneShopDao=new OneShopDapImpl();
	@Override
	public int loginService(Person person) {
		
		return this.oneShopDao.islogin(person);
	}

	@Override
	public int regService(Person person) {
		
		 return this.oneShopDao.isRes(person);
	}

}
