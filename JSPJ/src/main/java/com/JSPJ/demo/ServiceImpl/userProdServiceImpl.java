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
	
	/**
	 * 상품결제하기
	 */
	@Override 
	public String insProductBuyList(businessVo businessVo) {
		String result = "fail";
		
		//구매 예약 테이블 인서트
		
		//상품 마스터 테이블에서 총갯수 - 구매개수
		
		//상품이 정상적으로 주문 되었다고 로그인 계정에 안내 메일 또는 알림톡 전송
		
		return result;
	}
	
}
