package com.JSPJ.demo.Mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.JSPJ.demo.Vo.businessVo;

@Mapper
public interface userProdMapper {

	/**
	 * 상품목록 조회
	 * @return
	 */
	List<businessVo> selectProductList();
	
	/**
	 * 상품 상세정보
	 * @param id
	 * @return
	 */
	businessVo selectProdDetail(String id);
	
	/**
	 * 결제정보 저장
	 * @param businessVo
	 * @return
	 */
	int insProductBuyList(businessVo businessVo);
	
	/**
	 * 마스터상품 갯수 수정
	 * @param businessVo
	 * @return
	 */
	int updProdInfo(businessVo businessVo);
}
