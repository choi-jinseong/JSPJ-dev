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
	
	/**
	 * 상품 업데이트
	 * @param businessVo
	 * @return
	 */
	int updProductRegist(businessVo businessVo);
	
	/**
	 * 상품 등록건이 있는지확인 
	 * @param businessVo
	 * @return
	 */
	int selectRegistCnt(businessVo businessVo);
	
	/**
	 * 상품 임시저장
	 * @param businessVo
	 * @return
	 */
	int insTempProductRegist(businessVo businessVo);
	
	/**
	 * 상품등록 건 조회 
	 * @param param
	 * @return
	 */
	 businessVo selectRegProduct(String param);
	
}
