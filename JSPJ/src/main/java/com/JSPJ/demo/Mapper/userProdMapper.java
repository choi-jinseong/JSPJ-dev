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
}
