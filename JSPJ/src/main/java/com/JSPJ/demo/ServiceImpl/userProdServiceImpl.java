package com.JSPJ.demo.ServiceImpl;

import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Calendar;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.JSPJ.demo.Mapper.userProdMapper;
import com.JSPJ.demo.Service.AlarmService;
import com.JSPJ.demo.Service.userProdService;
import com.JSPJ.demo.Vo.businessVo;

@Service("userProdService")
public class userProdServiceImpl implements userProdService {

	@Autowired
	userProdMapper userProdMapper;
	
	@Autowired
	AlarmService alarmService;
	
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
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, 1); // 다음날

		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		String deliveryDate = sdf.format(cal.getTime());

		businessVo.setDeliveryDate(deliveryDate);

		
		int orderResult = userProdMapper.insProductBuyList(businessVo);
		
		if(orderResult != 1) {
			return result;
		}
		
		String id = businessVo.getRegistId();
		
		businessVo prodInfo = new businessVo();
		prodInfo = userProdMapper.selectProdDetail(id);
		
		int orderCnt = Integer.parseInt(businessVo.getProductCnt());
		int totalProdCnt = Integer.parseInt(prodInfo.getProductCnt());
		
		int prodCnt = totalProdCnt - orderCnt;
		String strProdCnt = String.valueOf(prodCnt);
		
		//전체갯수에서 주문완료 갯수 빼기
		businessVo updProdInfo = new businessVo();
		updProdInfo.setRegistId(id);
		updProdInfo.setProductCnt(strProdCnt);
		
		int updResult = userProdMapper.updProdInfo(updProdInfo);
		
		if(updResult != 1) {
			return result;
		}
		
		//상품이 정상적으로 주문 되었다고 로그인 계정에 안내 메일 또는 알림톡 전송
	    alarmService.sendOrderComplete(businessVo);
		
		return result;
	}
	
}
