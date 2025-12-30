package com.JSPJ.demo.Service;

import java.util.List;

import com.JSPJ.demo.Vo.businessVo;

public interface userProdService {

	/**
	 * 상품목록 조회
	 * @return
	 */
	public List<businessVo> selectProductList();
	
	/**
	 * 상품상세정보 조회
	 * @param id
	 * @return
	 */
	public businessVo selectProdDetail(String id);
	
}
