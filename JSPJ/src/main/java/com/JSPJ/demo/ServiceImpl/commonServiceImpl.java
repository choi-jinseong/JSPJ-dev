package com.JSPJ.demo.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.JSPJ.demo.Mapper.commonMapper;
import com.JSPJ.demo.Service.commonService;
import com.JSPJ.demo.Vo.companyVo;
import com.JSPJ.demo.Vo.menuVo;
import com.JSPJ.demo.Vo.userVo;

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
	
	/**
	 * 업체찾기 팝업
	 */
	@Override
	public List<companyVo> selCompanyInfo(String param){
		List<companyVo> companyList = commonMapper.selCompanyInfo(param);
		
		return companyList;
	}
	
	/**
	 * 담당자 찾기
	 */
	@Override
	public List<userVo> selManagerInfo(String param){
		List<userVo> managerList = commonMapper.selManagerInfo(param);
		
		return managerList;
	}
	
	
}
