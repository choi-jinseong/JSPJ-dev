package com.JSPJ.demo.Mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.JSPJ.demo.Vo.businessVo;

@Mapper
public interface businessMapper {

	/**
	 * 등록현황 조회 
	 * @return
	 */
	List<businessVo> selectRegistInfoList();
	
	/**
	 * 상품등록
	 * @param businessVo
	 * @return
	 */
	int insProductRegist(businessVo businessVo);
}
