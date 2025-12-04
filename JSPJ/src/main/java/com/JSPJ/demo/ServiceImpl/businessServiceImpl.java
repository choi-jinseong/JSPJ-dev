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
		
		//A 등록완료 B 진행중 
		String state = "A";
		businessVo.setState(state);
		
		//상품등록
		int resultFg = businessMapper.insProductRegist(businessVo);
		
		return result;
	}
}
