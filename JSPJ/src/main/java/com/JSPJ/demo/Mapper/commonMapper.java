package com.JSPJ.demo.Mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.JSPJ.demo.Vo.companyVo;
import com.JSPJ.demo.Vo.menuVo;
import com.JSPJ.demo.Vo.userVo;

@Mapper
public interface commonMapper {

	/**
	 * 공통 메뉴 조회
	 * @return
	 */
	List<menuVo> menuList(String userAuth);
	
	/**
	 * 업체찾기 
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
