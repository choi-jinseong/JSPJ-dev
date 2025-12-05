package com.JSPJ.demo.ServiceImpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.JSPJ.demo.Mapper.businessMapper;
import com.JSPJ.demo.Service.businessService;
import com.JSPJ.demo.Vo.businessVo;

@Service("businessService")
public class businessServiceImpl implements businessService {

	@Autowired
	businessMapper businessMapper;
	
	/**
	 * 등록현황 조회 
	 */
	@Override
	public List<businessVo> selectRegistInfoList(){
		
		List<businessVo> resultList = businessMapper.selectRegistInfoList();
		
		return resultList;
	}
	
	/**
	 * 상품등록
	 */
	@Override
	public String insProductRegist(businessVo businessVo) {
		String result = "fail";
		
		//상품등록
		int resultFg = businessMapper.insProductRegist(businessVo);
		
		if(resultFg == 1) {
			result = "success";
		}
		
		return result;
	}
	
	/**
	 * 상품임시저장
	 */
	@Override
	public String insTempProductRegist(businessVo businessVo) {
		String result = "fail";
		
		//상품 임시저장
		int resultFg = businessMapper.insTempProductRegist(businessVo);
		
		if(resultFg == 1) {
			result = "success";
		}
		
		return result;
	}
	
	/**
	 * 최근 상품등록건 조회 
	 */
	@Override
	public businessVo selectRegProduct (String registId) {
		businessVo productRegVo = businessMapper.selectRegProduct(registId);
		
		return productRegVo;
	}
}
