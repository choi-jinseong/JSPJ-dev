package com.JSPJ.demo.Service;

import java.util.List;

import com.JSPJ.demo.Vo.companyVo;
import com.JSPJ.demo.Vo.menuVo;
import com.JSPJ.demo.Vo.userVo;

public interface commonService {
	
	/**
	 * 공통 으로 메뉴 가져오기
	 * @return
	 */
	List<menuVo> menuList(String userAuth);
	
	/**
	 * 업체 찾기 
	 * @param param
	 * @return
	 */
	List<companyVo> selCompanyInfo(String param);
	
	/**
	 * 담당자 찾기
	 * @param param
	 * @return
	 */
	List<userVo> selManagerInfo(String param);

}
