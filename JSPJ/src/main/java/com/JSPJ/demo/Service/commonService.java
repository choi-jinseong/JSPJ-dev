package com.JSPJ.demo.Service;

import java.util.List;

import com.JSPJ.demo.Vo.menuVo;

public interface commonService {
	
	/**
	 * 공통 으로 메뉴 가져오기
	 * @return
	 */
	List<menuVo> menuList(String userAuth);

}
