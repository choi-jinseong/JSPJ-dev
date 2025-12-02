package com.JSPJ.demo.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.JSPJ.demo.Mapper.commonMapper;
import com.JSPJ.demo.Service.commonService;
import com.JSPJ.demo.Vo.menuVo;

@Service("commonService")
public class commonServiceImpl implements commonService {

	@Autowired
	commonMapper commonMapper;
	
	/**
	 * 공통 메뉴 조회
	 */
	@Override
	public List<menuVo> menuList(String userAuth) {
		List<menuVo> menuList = commonMapper.menuList(userAuth);
		
		return menuList;
	}
}
