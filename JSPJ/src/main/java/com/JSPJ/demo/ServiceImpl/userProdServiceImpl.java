package com.JSPJ.demo.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.JSPJ.demo.Mapper.userProdMapper;
import com.JSPJ.demo.Service.userProdService;
import com.JSPJ.demo.Vo.businessVo;

@Service("userProdService")
public class userProdServiceImpl implements userProdService {

	@Autowired
	userProdMapper userProdMapper;
	
	/**
	 * 상품목록
	 */
	@Override
	public List<businessVo> selectProductList(){
		List<businessVo> productList = userProdMapper.selectProductList();
		
		return productList;
	}
	
	
	/**
	 * 상품 상세정보
	 */
	@Override
	public businessVo selectProdDetail(String id){
		businessVo productInfo = userProdMapper.selectProdDetail(id);
		
		return productInfo;
	}
	
}
