package com.JSPJ.demo.Service;

import java.util.List;

import com.JSPJ.demo.Vo.businessVo;

public interface businessService {

	/**
	 * 등록현황 조회
	 * @return
	 */
	public List<businessVo> selectRegistInfoList();
	
	/**
	 * 상품등록
	 * @param businessVo
	 * @return
	 */
	public String insProductRegist(businessVo businessVo);
	
	/**
	 * 상품 임시저장
	 * @param businessVo
	 * @return
	 */
	public String insTempProductRegist(businessVo businessVo);
	
	/**
	 * 해당 상품등록건 조회
	 * @param registId
	 * @return
	 */
	public businessVo selectRegProduct(String registId);
}
