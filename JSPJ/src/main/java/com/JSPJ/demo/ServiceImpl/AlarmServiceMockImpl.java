package com.JSPJ.demo.ServiceImpl;

import org.springframework.context.annotation.Profile;
import org.springframework.stereotype.Service;

import com.JSPJ.demo.Service.AlarmService;
import com.JSPJ.demo.Vo.businessVo;

@Service
@Profile({"local", "dev"})
public class AlarmServiceMockImpl implements AlarmService  {

	 @Override
	    public void sendOrderComplete(businessVo vo) {
	        System.out.println("===== [알림톡 MOCK] =====");
	        System.out.println("상품명: " + vo.getProductNm());
	        System.out.println("주문수량: " + vo.getProductCnt());
	        System.out.println("배송예정일: " + vo.getDeliveryDate());
	        System.out.println("========================");
	    }
}
