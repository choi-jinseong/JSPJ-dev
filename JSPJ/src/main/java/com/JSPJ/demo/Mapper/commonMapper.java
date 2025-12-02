package com.JSPJ.demo.Mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.JSPJ.demo.Vo.menuVo;

@Mapper
public interface commonMapper {

	/**
	 * 공통 메뉴 조회
	 * @return
	 */
	List<menuVo> menuList(String userAuth);
	
}
